// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: xAsgWs0dYw

import * as React from 'react';

import Head from 'next/head';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import * as p from '@plasmicapp/react-web';
import * as ph from '@plasmicapp/react-web/lib/host';

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
  ensureGlobalVariants,
} from '@plasmicapp/react-web';
import { LoginWithLeftBackground } from '../../chakra/chakraPro/Application/Authentication/LoginWithLeftBackground'; // plasmic-import: M0jfWiLAo4K/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicLoginWithLeftBackground.module.css'; // plasmic-import: xAsgWs0dYw/css

export type PlasmicLoginWithLeftBackground__VariantMembers = {};
export type PlasmicLoginWithLeftBackground__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoginWithLeftBackground__VariantsArgs;
export const PlasmicLoginWithLeftBackground__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLoginWithLeftBackground__ArgsType = {};
type ArgPropType = keyof PlasmicLoginWithLeftBackground__ArgsType;
export const PlasmicLoginWithLeftBackground__ArgProps =
  new Array<ArgPropType>();

export type PlasmicLoginWithLeftBackground__OverridesType = {
  root?: p.Flex<'div'>;
  loginWithLeftBackground?: p.Flex<typeof LoginWithLeftBackground>;
};

export interface DefaultLoginWithLeftBackgroundProps {
  className?: string;
}

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

function PlasmicLoginWithLeftBackground__RenderFunc(props: {
  variants: PlasmicLoginWithLeftBackground__VariantsArgs;
  args: PlasmicLoginWithLeftBackground__ArgsType;
  overrides: PlasmicLoginWithLeftBackground__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants,
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={'root'}
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
      <LoginWithLeftBackground
        data-plasmic-name={'loginWithLeftBackground'}
        data-plasmic-override={overrides.loginWithLeftBackground}
        className={classNames('__wab_instance', sty.loginWithLeftBackground)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'loginWithLeftBackground'],
  loginWithLeftBackground: ['loginWithLeftBackground'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  loginWithLeftBackground: typeof LoginWithLeftBackground;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginWithLeftBackground__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginWithLeftBackground__VariantsArgs;
    args?: PlasmicLoginWithLeftBackground__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginWithLeftBackground__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoginWithLeftBackground__ArgsType,
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
          internalArgPropNames: PlasmicLoginWithLeftBackground__ArgProps,
          internalVariantPropNames:
            PlasmicLoginWithLeftBackground__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLoginWithLeftBackground__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicLoginWithLeftBackground';
  } else {
    func.displayName = `PlasmicLoginWithLeftBackground.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginWithLeftBackground = Object.assign(
  // Top-level PlasmicLoginWithLeftBackground renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    loginWithLeftBackground: makeNodeComponent('loginWithLeftBackground'),

    // Metadata about props expected for PlasmicLoginWithLeftBackground
    internalVariantProps: PlasmicLoginWithLeftBackground__VariantProps,
    internalArgProps: PlasmicLoginWithLeftBackground__ArgProps,
  }
);

export default PlasmicLoginWithLeftBackground;
/* prettier-ignore-end */
