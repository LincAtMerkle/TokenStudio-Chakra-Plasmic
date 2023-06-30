// /* eslint-disable react/display-name */
// import react, { ReactElement, useMemo } from 'react';
// import { cx } from '@chakra-ui/shared-utils';
// import root from 'react-shadow';

// type ModifierObj = Record<string, any>;

// export const ModifierContext = react.createContext<ModifierObj>({});

// export const useModifiers = () => {
//   const ctx = react.useContext(ModifierContext);

//   if (!ctx) {
//     throw new Error('useModifiers must be used within a ModifierProvider');
//   }

//   return ctx;
// };

// const useRootCtx = (): ModifierObj => {
//   const ctx = react.useContext(ModifierContext);

//   if (!ctx) {
//     return {} as ModifierObj;
//   }

//   return ctx;
// };

// export const ModifierProvider = ({ modifiers, children }) => {
//   const ctx = useRootCtx();
//   const mergedModifiers = useMemo(() => {
//     return {
//       ...ctx?.modifiers,
//       ...modifiers,
//     };
//   }, [ctx?.modifiers, modifiers]);

//   return (
//     <ModifierContext.Provider
//       value={{ modifiers: mergedModifiers, rawModifiers: modifiers }}
//     >
//       {children}
//     </ModifierContext.Provider>
//   );
// };

// export const ComponentContext = react.createContext({
//   name: '',
//   map: {},
// });

// export const useComponentCtx = () => {
//   return react.useContext(ComponentContext);
// };

// export const ComponentProvider = ({ name, children }) => {
//   const modifiers = useModifiers();

//   const { type, color } = modifiers.modifiers;

//   const [styleSheets, setStyleSheets] = react.useState<CSSStyleSheet[]>([]);
//   let cssSync = null;
//   const css = useMemo(async () => {
//     if (process.browser) {
//       const { default: sheet } = await import(`../${name}/${name}.tokens`, {
//         assert: { type: 'css' },
//       });

//       const { default: sheet2 } = await import(
//         `../${name}/tokens/${name}-${type}-${color}.tokens`,
//         {
//           assert: { type: 'css' },
//         }
//       );

//       const stylesheet = new CSSStyleSheet();
//       -console.log(sheet2);
//       // Add some CSS
//       stylesheet.replaceSync(sheet2 + sheet);

//       console.log(stylesheet);

//       setStyleSheets([stylesheet]);

//       // setStyleSheets([sheet]);
//       return sheet;
//     }
//   }, [type, color]);

//   return (
//     <ComponentContext.Provider value={{ name, map: cssSync || css }}>
//       <root.div styleSheets={styleSheets}>{children}</root.div>
//     </ComponentContext.Provider>
//   );
// };

// export const wrapTokens =
//   (Element: React.ReactElement, selector?: string) =>
//   ({ className, children }) => {
//     const { name, map } = useComponentCtx();
//     const selectorClass = map[`${name}__${selector}`];

//     const klass = cx(selectorClass, `${name}__${selector}`, className);

//     //@ts-ignore
//     return <Element className={klass}>{children}</Element>;
//   };

/* eslint-disable react/display-name */
import react, { ReactElement, useMemo } from "react";
import { cx } from "@chakra-ui/shared-utils";
//import root from "react-shadow";
import root from "react-shadow/emotion";
import { ReactNode } from "react";

type ModifierObj = Record<string, any>;

export const ModifierContext = react.createContext<ModifierObj>({});

export const useModifiers = () => {
  const ctx = react.useContext(ModifierContext);

  if (!ctx) {
    throw new Error("useModifiers must be used within a ModifierProvider");
  }

  return ctx;
};

const useRootCtx = (): ModifierObj => {
  const ctx = react.useContext(ModifierContext);

  if (!ctx) {
    return {} as ModifierObj;
  }

  return ctx;
};

interface ModifierProviderProps {
  modifiers: any;
  children: ReactNode
}

export const ModifierProvider = ({ modifiers, children } : ModifierProviderProps) => {
  const ctx = useRootCtx();
  const mergedModifiers = useMemo(() => {
    return {
      ...ctx?.modifiers,
      ...modifiers,
    };
  }, [ctx?.modifiers, modifiers]);

  return (
    <ModifierContext.Provider
      value={{ modifiers: mergedModifiers, rawModifiers: modifiers }}
    >
      {children}
    </ModifierContext.Provider>
  );
};

export const ComponentContext = react.createContext({
  name: "",
  map: {},
});

export const useComponentCtx = () => {
  return react.useContext(ComponentContext);
};

export interface ComponentProviderProps {
  name: string;
  children: any;
  className?: string;
}

export const ComponentProvider = ({
  name,
  children,
  className,
}: ComponentProviderProps) => {
  const modifiers = useModifiers();

  const { type, color } = modifiers.modifiers;

  const [styleSheets, setStyleSheets] = react.useState<CSSStyleSheet[]>([]);
  let cssSync = null;

  const css = useMemo(async () => {
    if (typeof window) {
      const { default: compSheet } = await import(`../${name}/${name}.tokens`, {
        assert: { type: "css" },
      });

      // const { default: sheet2 } = await import(
      //     `../${name}/tokens/${name}-${type}-${color}.tokens`,
      //     {
      //         assert: { type: "css" },
      //     }
      // );

      const { default: colorSheet } = await import(
        `../${name}/tokens/${name}-${color}.tokens`,
        {
          assert: { type: "css" },
        }
      );

      const stylesheet = new CSSStyleSheet();
      -(
        // Add some CSS
        stylesheet.replaceSync(colorSheet + compSheet)
      );

      setStyleSheets([stylesheet]);

      // setStyleSheets([sheet]);
      return compSheet;
    }
  }, [type, color, name, setStyleSheets]);

  return (
    <ComponentContext.Provider value={{ name, map: cssSync || css }}>
      <root.div styleSheets={styleSheets} className={className}>{children}</root.div>
    </ComponentContext.Provider>
  );
};

const generateClassNameForProps = () => {

}

export const wrapTokens =
  (Element: React.ElementType, selector?: string) =>
  ({ className, children, ...rest }) => {
    const { name, map } = useComponentCtx();
    const selectorClass = map[`${name}__${selector}`];

    const propsClasses = Object.keys(rest)
      .map(
        (key) =>
          typeof rest[key] === "string" &&
          `${name}__${rest[key]}`
      )
      .join(" ");

      // Object.keys(rest).forEach((key) => {
      //   console.log('key:', key)
      //   console.log('value:', rest[key])
      //   console.log(`${name}__${key}__${rest[key]}`)
      // })

    const klass = cx(
      selectorClass,
      `${name}__${selector}`,
      propsClasses,
      className
    );

    //@ts-ignore
    return (
      <Element className={klass} {...rest}>
        {children}
      </Element>
    );
  };