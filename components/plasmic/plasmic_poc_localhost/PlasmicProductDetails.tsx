// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: pAqW20mUUP

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
import { ProductWithLargeImages } from "../../custom/chakraPro/ProductWithLargeImages"; // plasmic-import: avrjieaxCjWE/codeComponent
import { ProductWithCarousel } from "../../custom/chakraPro/ProductWithCarousel"; // plasmic-import: lmM62WOHYWgA/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicProductDetails.module.css"; // plasmic-import: pAqW20mUUP/css

export type PlasmicProductDetails__VariantMembers = {};
export type PlasmicProductDetails__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductDetails__VariantsArgs;
export const PlasmicProductDetails__VariantProps = new Array<VariantPropType>();

export type PlasmicProductDetails__ArgsType = {};
type ArgPropType = keyof PlasmicProductDetails__ArgsType;
export const PlasmicProductDetails__ArgProps = new Array<ArgPropType>();

export type PlasmicProductDetails__OverridesType = {
  root?: p.Flex<"div">;
  productWithLargeImages?: p.Flex<typeof ProductWithLargeImages>;
  productWithCarousel?: p.Flex<typeof ProductWithCarousel>;
};

export interface DefaultProductDetailsProps {}

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

function PlasmicProductDetails__RenderFunc(props: {
  variants: PlasmicProductDetails__VariantsArgs;
  args: PlasmicProductDetails__ArgsType;
  overrides: PlasmicProductDetails__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__uurfh)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oXi4W
              )}
            >
              {"Product Details"}
            </div>
          </Heading>
          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__m1Q0S)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bQUtl
              )}
            >
              {"Product with large images"}
            </div>
          </Heading>
          <ProductWithLargeImages
            data-plasmic-name={"productWithLargeImages"}
            data-plasmic-override={overrides.productWithLargeImages}
            className={classNames("__wab_instance", sty.productWithLargeImages)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__oxPy)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cCxJz
              )}
            >
              {"Product with carousel"}
            </div>
          </Heading>
          <ProductWithCarousel
            data-plasmic-name={"productWithCarousel"}
            data-plasmic-override={overrides.productWithCarousel}
            className={classNames("__wab_instance", sty.productWithCarousel)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "productWithLargeImages", "productWithCarousel"],
  productWithLargeImages: ["productWithLargeImages"],
  productWithCarousel: ["productWithCarousel"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  productWithLargeImages: typeof ProductWithLargeImages;
  productWithCarousel: typeof ProductWithCarousel;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductDetails__VariantsArgs;
    args?: PlasmicProductDetails__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductDetails__ArgsType,
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
          internalArgPropNames: PlasmicProductDetails__ArgProps,
          internalVariantPropNames: PlasmicProductDetails__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductDetails";
  } else {
    func.displayName = `PlasmicProductDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicProductDetails = Object.assign(
  // Top-level PlasmicProductDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productWithLargeImages: makeNodeComponent("productWithLargeImages"),
    productWithCarousel: makeNodeComponent("productWithCarousel"),

    // Metadata about props expected for PlasmicProductDetails
    internalVariantProps: PlasmicProductDetails__VariantProps,
    internalArgProps: PlasmicProductDetails__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProductDetails;
/* prettier-ignore-end */
