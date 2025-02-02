// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: YtbpO2NJAH

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { Heading } from "@chakra-ui/react"; // plasmic-import: 0G7l8BbhtHSG-/codeComponent
import { LayoutWithFullContentHeight } from "../../custom/chakraPro/Marketing/Layouts/LayoutWithFullContentHeight"; // plasmic-import: vpVIqgESW6t9/codeComponent
import { LayoutWithTwoSidebars } from "../../custom/chakraPro/Marketing/Layouts/LayoutWithTwoSidebars"; // plasmic-import: FLKLZYFRpUgH/codeComponent
import { LayoutWithStickySidebar } from "../../custom/chakraPro/Marketing/Layouts/LayoutWithStickySidebar"; // plasmic-import: JgKhhRUWd0IV/codeComponent
import { LayoutWithStickyNavbar } from "../../custom/chakraPro/Marketing/Layouts/LayoutWithStickyNavbar"; // plasmic-import: 9fibxyps0UBd/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicLayouts.module.css"; // plasmic-import: YtbpO2NJAH/css

export type PlasmicLayouts__VariantMembers = {};
export type PlasmicLayouts__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayouts__VariantsArgs;
export const PlasmicLayouts__VariantProps = new Array<VariantPropType>();

export type PlasmicLayouts__ArgsType = {};
type ArgPropType = keyof PlasmicLayouts__ArgsType;
export const PlasmicLayouts__ArgProps = new Array<ArgPropType>();

export type PlasmicLayouts__OverridesType = {
  root?: p.Flex<"div">;
  layoutWithFullContentHeight?: p.Flex<typeof LayoutWithFullContentHeight>;
  layoutWithTwoSidebars?: p.Flex<typeof LayoutWithTwoSidebars>;
  layoutWithStickySidebar?: p.Flex<typeof LayoutWithStickySidebar>;
  layoutWithStickyNavbar?: p.Flex<typeof LayoutWithStickyNavbar>;
};

export interface DefaultLayoutsProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLayouts__RenderFunc(props: {
  variants: PlasmicLayouts__VariantsArgs;
  args: PlasmicLayouts__ArgsType;
  overrides: PlasmicLayouts__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__aBv5L)}
            noOfLines={1 as const}
            size={"4xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__y8S5X
              )}
            >
              {"Layouts"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__hul36)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2ZrXp
              )}
            >
              {"Layout with full content height"}
            </div>
          </Heading>
          <LayoutWithFullContentHeight
            data-plasmic-name={"layoutWithFullContentHeight"}
            data-plasmic-override={overrides.layoutWithFullContentHeight}
            className={classNames(
              "__wab_instance",
              sty.layoutWithFullContentHeight
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__ojiXn)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lXjm3
              )}
            >
              {"Layout with two sidebars"}
            </div>
          </Heading>
          <LayoutWithTwoSidebars
            data-plasmic-name={"layoutWithTwoSidebars"}
            data-plasmic-override={overrides.layoutWithTwoSidebars}
            className={classNames("__wab_instance", sty.layoutWithTwoSidebars)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__vxqUr)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8OR4X
              )}
            >
              {"Layout with sticky sidebar"}
            </div>
          </Heading>
          <LayoutWithStickySidebar
            data-plasmic-name={"layoutWithStickySidebar"}
            data-plasmic-override={overrides.layoutWithStickySidebar}
            className={classNames(
              "__wab_instance",
              sty.layoutWithStickySidebar
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__u1Pq9)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kdKj
              )}
            >
              {"Layout with sticky navbar"}
            </div>
          </Heading>
          <LayoutWithStickyNavbar
            data-plasmic-name={"layoutWithStickyNavbar"}
            data-plasmic-override={overrides.layoutWithStickyNavbar}
            className={classNames("__wab_instance", sty.layoutWithStickyNavbar)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "layoutWithFullContentHeight",
    "layoutWithTwoSidebars",
    "layoutWithStickySidebar",
    "layoutWithStickyNavbar"
  ],
  layoutWithFullContentHeight: ["layoutWithFullContentHeight"],
  layoutWithTwoSidebars: ["layoutWithTwoSidebars"],
  layoutWithStickySidebar: ["layoutWithStickySidebar"],
  layoutWithStickyNavbar: ["layoutWithStickyNavbar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layoutWithFullContentHeight: typeof LayoutWithFullContentHeight;
  layoutWithTwoSidebars: typeof LayoutWithTwoSidebars;
  layoutWithStickySidebar: typeof LayoutWithStickySidebar;
  layoutWithStickyNavbar: typeof LayoutWithStickyNavbar;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayouts__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayouts__VariantsArgs;
    args?: PlasmicLayouts__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayouts__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLayouts__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLayouts__ArgProps,
          internalVariantPropNames: PlasmicLayouts__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLayouts__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLayouts";
  } else {
    func.displayName = `PlasmicLayouts.${nodeName}`;
  }
  return func;
}

export const PlasmicLayouts = Object.assign(
  // Top-level PlasmicLayouts renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layoutWithFullContentHeight: makeNodeComponent(
      "layoutWithFullContentHeight"
    ),
    layoutWithTwoSidebars: makeNodeComponent("layoutWithTwoSidebars"),
    layoutWithStickySidebar: makeNodeComponent("layoutWithStickySidebar"),
    layoutWithStickyNavbar: makeNodeComponent("layoutWithStickyNavbar"),

    // Metadata about props expected for PlasmicLayouts
    internalVariantProps: PlasmicLayouts__VariantProps,
    internalArgProps: PlasmicLayouts__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLayouts;
/* prettier-ignore-end */
