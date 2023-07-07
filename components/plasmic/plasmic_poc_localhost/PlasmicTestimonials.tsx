// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: Ku9HxMRWRU

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
import { Heading } from '@chakra-ui/react'; // plasmic-import: 0G7l8BbhtHSG-/codeComponent
import { TestimonialWithCurve } from '../../chakra/chakraPro/Marketing/Team/TestimonialWithCurve'; // plasmic-import: ZYsqWenBXrdE/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicTestimonials.module.css'; // plasmic-import: Ku9HxMRWRU/css

export type PlasmicTestimonials__VariantMembers = {};
export type PlasmicTestimonials__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestimonials__VariantsArgs;
export const PlasmicTestimonials__VariantProps = new Array<VariantPropType>();

export type PlasmicTestimonials__ArgsType = {};
type ArgPropType = keyof PlasmicTestimonials__ArgsType;
export const PlasmicTestimonials__ArgProps = new Array<ArgPropType>();

export type PlasmicTestimonials__OverridesType = {
  root?: p.Flex<'div'>;
  testimonialWithCurve?: p.Flex<typeof TestimonialWithCurve>;
};

export interface DefaultTestimonialsProps {}

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

function PlasmicTestimonials__RenderFunc(props: {
  variants: PlasmicTestimonials__VariantsArgs;
  args: PlasmicTestimonials__ArgsType;
  overrides: PlasmicTestimonials__OverridesType;
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__hkUVi)}
            noOfLines={1 as const}
            size={'4xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__knsxt
              )}
            >
              {'Testimonials'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__xoclU)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8Znxo
              )}
            >
              {'Testimonial with image'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__nKnIg)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__k4V
              )}
            >
              {'Testimonial with two columns'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__bE4Jf)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tgAjD
              )}
            >
              {'Testimonial with rating two columns'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__fGEt)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__e7FpW
              )}
            >
              {'Testimonial with logo'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__nCgPl)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0V0G6
              )}
            >
              {'Testimonial with curve'}
            </div>
          </Heading>
          <TestimonialWithCurve
            data-plasmic-name={'testimonialWithCurve'}
            data-plasmic-override={overrides.testimonialWithCurve}
            className={classNames('__wab_instance', sty.testimonialWithCurve)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ['root', 'testimonialWithCurve'],
  testimonialWithCurve: ['testimonialWithCurve'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  testimonialWithCurve: typeof TestimonialWithCurve;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestimonials__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestimonials__VariantsArgs;
    args?: PlasmicTestimonials__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestimonials__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestimonials__ArgsType,
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
          internalArgPropNames: PlasmicTestimonials__ArgProps,
          internalVariantPropNames: PlasmicTestimonials__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTestimonials__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicTestimonials';
  } else {
    func.displayName = `PlasmicTestimonials.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonials = Object.assign(
  // Top-level PlasmicTestimonials renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    testimonialWithCurve: makeNodeComponent('testimonialWithCurve'),

    // Metadata about props expected for PlasmicTestimonials
    internalVariantProps: PlasmicTestimonials__VariantProps,
    internalArgProps: PlasmicTestimonials__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicTestimonials;
/* prettier-ignore-end */
