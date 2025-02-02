// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: fPDpzZbj8-

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
import { CheckoutWithTwoColumns } from "../../custom/chakraPro/CheckoutWithTwoColumns"; // plasmic-import: qBsfcmLdsm61/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicCheckoutPages.module.css"; // plasmic-import: fPDpzZbj8-/css

export type PlasmicCheckoutPages__VariantMembers = {};
export type PlasmicCheckoutPages__VariantsArgs = {};
type VariantPropType = keyof PlasmicCheckoutPages__VariantsArgs;
export const PlasmicCheckoutPages__VariantProps = new Array<VariantPropType>();

export type PlasmicCheckoutPages__ArgsType = {};
type ArgPropType = keyof PlasmicCheckoutPages__ArgsType;
export const PlasmicCheckoutPages__ArgProps = new Array<ArgPropType>();

export type PlasmicCheckoutPages__OverridesType = {
  root?: p.Flex<"div">;
  checkoutWithTwoColumns?: p.Flex<typeof CheckoutWithTwoColumns>;
};

export interface DefaultCheckoutPagesProps {}

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

function PlasmicCheckoutPages__RenderFunc(props: {
  variants: PlasmicCheckoutPages__VariantsArgs;
  args: PlasmicCheckoutPages__ArgsType;
  overrides: PlasmicCheckoutPages__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__rzUqY)}
            noOfLines={1 as const}
            size={"4xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___5NMbF
              )}
            >
              {"Checkout Pages"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__g7H4C)}
            noOfLines={1 as const}
            size={"lg" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__r9A8F
              )}
            >
              {"Checkout with two columns"}
            </div>
          </Heading>
          <CheckoutWithTwoColumns
            data-plasmic-name={"checkoutWithTwoColumns"}
            data-plasmic-override={overrides.checkoutWithTwoColumns}
            className={classNames("__wab_instance", sty.checkoutWithTwoColumns)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "checkoutWithTwoColumns"],
  checkoutWithTwoColumns: ["checkoutWithTwoColumns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  checkoutWithTwoColumns: typeof CheckoutWithTwoColumns;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckoutPages__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckoutPages__VariantsArgs;
    args?: PlasmicCheckoutPages__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCheckoutPages__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCheckoutPages__ArgsType,
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
          internalArgPropNames: PlasmicCheckoutPages__ArgProps,
          internalVariantPropNames: PlasmicCheckoutPages__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCheckoutPages__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckoutPages";
  } else {
    func.displayName = `PlasmicCheckoutPages.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckoutPages = Object.assign(
  // Top-level PlasmicCheckoutPages renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    checkoutWithTwoColumns: makeNodeComponent("checkoutWithTwoColumns"),

    // Metadata about props expected for PlasmicCheckoutPages
    internalVariantProps: PlasmicCheckoutPages__VariantProps,
    internalArgProps: PlasmicCheckoutPages__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCheckoutPages;
/* prettier-ignore-end */
