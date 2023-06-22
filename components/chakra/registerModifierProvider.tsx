import {
  ModifierProvider
} from '../../src/components/tokensCtx';
import { GlobalContextMeta } from '@plasmicapp/host';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import { Registerable } from './registerable';
import { getComponentNameAndImportMeta } from './utils';

type PlasmicModifierProviderProps = {color: string; type: string}


export function PlasmicModifierProvider(props: PlasmicModifierProviderProps) {
  return (
    <ModifierProvider modifiers={{ color: props.color, type: props.type }}>
      {props.children}
    </ModifierProvider>
  );
}

export const modifierProviderMeta: GlobalContextMeta<PlasmicModifierProviderProps> = {
  name: "modifierProvider",
  importPath: "./components/chakra/registerModifierProvider",
  importName: "PlasmicModifierProvider",
  props: {
    color: {
      type: "choice",
      options: [
        // ...Object.keys(colorTokens),
        "green",
        "blue",
      ],
      defaultValue: "green",
    },
    type: {
      type: "choice",
      options: ["casual", "business", "md", "lg"],
      defaultValue: "casual",
    },
  },
};

export function modifierProvider(
  loader?: Registerable,
  customModifierProviderMeta?: GlobalContextMeta<PlasmicModifierProviderProps>
) {
  const doRegisterComponent: typeof registerGlobalContext = (...args) =>
    loader
      ? loader.registerGlobalContext(...args)
      : registerGlobalContext(...args);
  doRegisterComponent(
    PlasmicModifierProvider,
    customModifierProviderMeta ?? modifierProviderMeta
  );
}
