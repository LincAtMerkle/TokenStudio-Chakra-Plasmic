// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: dMOeaCXbpM

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
import { UserCardWithTags } from "../../custom/chakraPro/Aplication/User Cards/UserCardWithTags"; // plasmic-import: hx-JbUSxCMo1/codeComponent
import { UserCardWithBackground } from "../../custom/chakraPro/Aplication/User Cards/UserCardWithBackground"; // plasmic-import: k8nx2p7O6Ocv/codeComponent
import { UserCardGrid } from "../../custom/chakraPro/Aplication/User Cards/UserCardGrid"; // plasmic-import: TlS4qetrVL1e/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_plasmic_poc_localhost.module.css"; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from "./PlasmicUserCards.module.css"; // plasmic-import: dMOeaCXbpM/css

export type PlasmicUserCards__VariantMembers = {};
export type PlasmicUserCards__VariantsArgs = {};
type VariantPropType = keyof PlasmicUserCards__VariantsArgs;
export const PlasmicUserCards__VariantProps = new Array<VariantPropType>();

export type PlasmicUserCards__ArgsType = {};
type ArgPropType = keyof PlasmicUserCards__ArgsType;
export const PlasmicUserCards__ArgProps = new Array<ArgPropType>();

export type PlasmicUserCards__OverridesType = {
  root?: p.Flex<"div">;
  userCardWithBackground?: p.Flex<typeof UserCardWithBackground>;
  userCardGrid?: p.Flex<typeof UserCardGrid>;
};

export interface DefaultUserCardsProps {}

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

function PlasmicUserCards__RenderFunc(props: {
  variants: PlasmicUserCards__VariantsArgs;
  args: PlasmicUserCards__ArgsType;
  overrides: PlasmicUserCards__OverridesType;
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
            className={classNames("__wab_instance", sty.chakraUiHeading__jhkJ)}
            noOfLines={1 as const}
            size={"4xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wMIlH
              )}
            >
              {"User Cards"}
            </div>
          </Heading>
          <Heading
            className={classNames(
              "__wab_instance",
              sty.chakraUiHeading___49Cp7
            )}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gFAb9
              )}
            >
              {"User card with tags"}
            </div>
          </Heading>
          <UserCardWithTags
            className={classNames(
              "__wab_instance",
              sty.userCardWithTags__eYrk7
            )}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__eSr6R)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__poKb0
              )}
            >
              {"User card with rating"}
            </div>
          </Heading>
          <UserCardWithTags
            className={classNames("__wab_instance", sty.userCardWithTags__raBo)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__eynm2)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uwxhn
              )}
            >
              {"User card with background"}
            </div>
          </Heading>
          <UserCardWithBackground
            data-plasmic-name={"userCardWithBackground"}
            data-plasmic-override={overrides.userCardWithBackground}
            className={classNames("__wab_instance", sty.userCardWithBackground)}
          />

          <Heading
            className={classNames("__wab_instance", sty.chakraUiHeading__mBo6)}
            noOfLines={1 as const}
            size={"xl" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__f6Sah
              )}
            >
              {"User card grid"}
            </div>
          </Heading>
          <UserCardGrid
            data-plasmic-name={"userCardGrid"}
            data-plasmic-override={overrides.userCardGrid}
            className={classNames("__wab_instance", sty.userCardGrid)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "userCardWithBackground", "userCardGrid"],
  userCardWithBackground: ["userCardWithBackground"],
  userCardGrid: ["userCardGrid"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  userCardWithBackground: typeof UserCardWithBackground;
  userCardGrid: typeof UserCardGrid;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserCards__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserCards__VariantsArgs;
    args?: PlasmicUserCards__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserCards__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUserCards__ArgsType,
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
          internalArgPropNames: PlasmicUserCards__ArgProps,
          internalVariantPropNames: PlasmicUserCards__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUserCards__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserCards";
  } else {
    func.displayName = `PlasmicUserCards.${nodeName}`;
  }
  return func;
}

export const PlasmicUserCards = Object.assign(
  // Top-level PlasmicUserCards renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    userCardWithBackground: makeNodeComponent("userCardWithBackground"),
    userCardGrid: makeNodeComponent("userCardGrid"),

    // Metadata about props expected for PlasmicUserCards
    internalVariantProps: PlasmicUserCards__VariantProps,
    internalArgProps: PlasmicUserCards__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicUserCards;
/* prettier-ignore-end */
