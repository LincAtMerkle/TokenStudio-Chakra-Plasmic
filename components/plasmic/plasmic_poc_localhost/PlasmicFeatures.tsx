// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: tLEbDT6B0Y

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
import { FeatureWithSideBySideImage } from '../../chakra/chakraPro/Marketing/Features/FeatureWithSideBySideImage'; // plasmic-import: l6JvlJUfDYM1/codeComponent
import { FeatureWithThreeColumnsCentred } from '../../chakra/chakraPro/Marketing/Features/FeatureWithThreeColumnsCentred'; // plasmic-import: XvSoXt86Q3bN/codeComponent
import { FeatureWithThreeColumns } from '../../chakra/chakraPro/Marketing/Features/FeatureWithThreeColumns'; // plasmic-import: iCUd50LInAEG/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicFeatures.module.css'; // plasmic-import: tLEbDT6B0Y/css

export type PlasmicFeatures__VariantMembers = {};
export type PlasmicFeatures__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatures__VariantsArgs;
export const PlasmicFeatures__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatures__ArgsType = {};
type ArgPropType = keyof PlasmicFeatures__ArgsType;
export const PlasmicFeatures__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatures__OverridesType = {
  root?: p.Flex<'div'>;
  featureWithSideBySideImage?: p.Flex<typeof FeatureWithSideBySideImage>;
  featureWithThreeColumnsCentred?: p.Flex<
    typeof FeatureWithThreeColumnsCentred
  >;
  featureWithThreeColumns?: p.Flex<typeof FeatureWithThreeColumns>;
};

export interface DefaultFeaturesProps {}

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

function PlasmicFeatures__RenderFunc(props: {
  variants: PlasmicFeatures__VariantsArgs;
  args: PlasmicFeatures__ArgsType;
  overrides: PlasmicFeatures__OverridesType;
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
            className={classNames('__wab_instance', sty.chakraUiHeading___7BN0)}
            noOfLines={1 as const}
            size={'4xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ywQgd
              )}
            >
              {'Features'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__cv6Vz)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7WYI
              )}
            >
              {'Feature with hero image on accent'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__bwp3X)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zL7Q7
              )}
            >
              {'Feature with hero image'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__crOvn)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iIhbL
              )}
            >
              {'Feature with side by side image'}
            </div>
          </Heading>
          <FeatureWithSideBySideImage
            data-plasmic-name={'featureWithSideBySideImage'}
            data-plasmic-override={overrides.featureWithSideBySideImage}
            className={classNames(
              '__wab_instance',
              sty.featureWithSideBySideImage
            )}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__ksvbm)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mlipK
              )}
            >
              {'Feature with three columns centred'}
            </div>
          </Heading>
          <FeatureWithThreeColumnsCentred
            data-plasmic-name={'featureWithThreeColumnsCentred'}
            data-plasmic-override={overrides.featureWithThreeColumnsCentred}
            className={classNames(
              '__wab_instance',
              sty.featureWithThreeColumnsCentred
            )}
          />

          <Heading
            className={classNames(
              '__wab_instance',
              sty.chakraUiHeading___7Aix7
            )}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___2Fw3E
              )}
            >
              {'Feature with three columns'}
            </div>
          </Heading>
          <FeatureWithThreeColumns
            data-plasmic-name={'featureWithThreeColumns'}
            data-plasmic-override={overrides.featureWithThreeColumns}
            className={classNames(
              '__wab_instance',
              sty.featureWithThreeColumns
            )}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'featureWithSideBySideImage',
    'featureWithThreeColumnsCentred',
    'featureWithThreeColumns',
  ],
  featureWithSideBySideImage: ['featureWithSideBySideImage'],
  featureWithThreeColumnsCentred: ['featureWithThreeColumnsCentred'],
  featureWithThreeColumns: ['featureWithThreeColumns'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  featureWithSideBySideImage: typeof FeatureWithSideBySideImage;
  featureWithThreeColumnsCentred: typeof FeatureWithThreeColumnsCentred;
  featureWithThreeColumns: typeof FeatureWithThreeColumns;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatures__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatures__VariantsArgs;
    args?: PlasmicFeatures__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeatures__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFeatures__ArgsType,
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
          internalArgPropNames: PlasmicFeatures__ArgProps,
          internalVariantPropNames: PlasmicFeatures__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicFeatures';
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    featureWithSideBySideImage: makeNodeComponent('featureWithSideBySideImage'),
    featureWithThreeColumnsCentred: makeNodeComponent(
      'featureWithThreeColumnsCentred'
    ),
    featureWithThreeColumns: makeNodeComponent('featureWithThreeColumns'),

    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */
