// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: Lvo1NoyitI

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
import { ShowcaseOnWhiteBackground } from '../../chakra/chakraPro/E-Commerce/Category Showcases/registerShowcaseOnWhiteBackground'; // plasmic-import: wEztTssyLcBE/codeComponent
import { ShowcaseOnSpanningColumns } from '../../chakra/chakraPro/ShowcaseOnSpanningColumns'; // plasmic-import: t11NHRuZSYyy/codeComponent
import { ShowcaseThreeColumnGrid } from '../../chakra/chakraPro/ShowcaseThreeColumnGrid'; // plasmic-import: HtbdbrjV8sSP/codeComponent
import { ShowcaseGrid } from '../../chakra/chakraPro/ShowcaseGrid'; // plasmic-import: 6LCal5Tufm7Z/codeComponent
import { ShowcaseOnBackgroundImage } from '../../chakra/chakraPro/E-Commerce/Category Showcases/registerShowcaseOnBackgroundImage'; // plasmic-import: M1ud6iQ3blbL/codeComponent
import { ShowcaseOnColoredBackground } from '../../chakra/chakraPro/E-Commerce/Category Showcases/registerShowcaseOnColoredBackground'; // plasmic-import: D3aVY6T6ZVuL/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicCategoryShowcases.module.css'; // plasmic-import: Lvo1NoyitI/css

export type PlasmicCategoryShowcases__VariantMembers = {};
export type PlasmicCategoryShowcases__VariantsArgs = {};
type VariantPropType = keyof PlasmicCategoryShowcases__VariantsArgs;
export const PlasmicCategoryShowcases__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCategoryShowcases__ArgsType = {};
type ArgPropType = keyof PlasmicCategoryShowcases__ArgsType;
export const PlasmicCategoryShowcases__ArgProps = new Array<ArgPropType>();

export type PlasmicCategoryShowcases__OverridesType = {
  root?: p.Flex<'div'>;
  showcaseOnWhiteBackground?: p.Flex<typeof ShowcaseOnWhiteBackground>;
  showcaseOnSpanningColumns?: p.Flex<typeof ShowcaseOnSpanningColumns>;
  showcaseThreeColumnGrid?: p.Flex<typeof ShowcaseThreeColumnGrid>;
  showcaseGrid?: p.Flex<typeof ShowcaseGrid>;
  showcaseOnBackgroundImage?: p.Flex<typeof ShowcaseOnBackgroundImage>;
  showcaseOnColoredBackground?: p.Flex<typeof ShowcaseOnColoredBackground>;
};

export interface DefaultCategoryShowcasesProps {}

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

function PlasmicCategoryShowcases__RenderFunc(props: {
  variants: PlasmicCategoryShowcases__VariantsArgs;
  args: PlasmicCategoryShowcases__ArgsType;
  overrides: PlasmicCategoryShowcases__OverridesType;
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
            className={classNames(
              '__wab_instance',
              sty.chakraUiHeading___0NxcT
            )}
            noOfLines={1 as const}
            size={'4xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__f6NuC
              )}
            >
              {'Category Showcases'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__i9Eei)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pgaSx
              )}
            >
              {'Showcase on white background'}
            </div>
          </Heading>
          <ShowcaseOnWhiteBackground
            data-plasmic-name={'showcaseOnWhiteBackground'}
            data-plasmic-override={overrides.showcaseOnWhiteBackground}
            className={classNames(
              '__wab_instance',
              sty.showcaseOnWhiteBackground
            )}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__qsuIb)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kxwUz
              )}
            >
              {'Showcase on spanning columns'}
            </div>
          </Heading>
          <ShowcaseOnSpanningColumns
            data-plasmic-name={'showcaseOnSpanningColumns'}
            data-plasmic-override={overrides.showcaseOnSpanningColumns}
            className={classNames(
              '__wab_instance',
              sty.showcaseOnSpanningColumns
            )}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__yNm9H)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mTiWy
              )}
            >
              {'Showcase three column grid'}
            </div>
          </Heading>
          <ShowcaseThreeColumnGrid
            data-plasmic-name={'showcaseThreeColumnGrid'}
            data-plasmic-override={overrides.showcaseThreeColumnGrid}
            className={classNames(
              '__wab_instance',
              sty.showcaseThreeColumnGrid
            )}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__pGmX)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3Fc8V
              )}
            >
              {'Showcase grid'}
            </div>
          </Heading>
          <ShowcaseGrid
            data-plasmic-name={'showcaseGrid'}
            data-plasmic-override={overrides.showcaseGrid}
            className={classNames('__wab_instance', sty.showcaseGrid)}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__caAZi)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oX6L
              )}
            >
              {'Showcase on background image'}
            </div>
          </Heading>
          <ShowcaseOnBackgroundImage
            data-plasmic-name={'showcaseOnBackgroundImage'}
            data-plasmic-override={overrides.showcaseOnBackgroundImage}
            className={classNames(
              '__wab_instance',
              sty.showcaseOnBackgroundImage
            )}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__hovT3)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ba2Pq
              )}
            >
              {'Showcase on colored background'}
            </div>
          </Heading>
          <ShowcaseOnColoredBackground
            data-plasmic-name={'showcaseOnColoredBackground'}
            data-plasmic-override={overrides.showcaseOnColoredBackground}
            className={classNames(
              '__wab_instance',
              sty.showcaseOnColoredBackground
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
    'showcaseOnWhiteBackground',
    'showcaseOnSpanningColumns',
    'showcaseThreeColumnGrid',
    'showcaseGrid',
    'showcaseOnBackgroundImage',
    'showcaseOnColoredBackground',
  ],
  showcaseOnWhiteBackground: ['showcaseOnWhiteBackground'],
  showcaseOnSpanningColumns: ['showcaseOnSpanningColumns'],
  showcaseThreeColumnGrid: ['showcaseThreeColumnGrid'],
  showcaseGrid: ['showcaseGrid'],
  showcaseOnBackgroundImage: ['showcaseOnBackgroundImage'],
  showcaseOnColoredBackground: ['showcaseOnColoredBackground'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  showcaseOnWhiteBackground: typeof ShowcaseOnWhiteBackground;
  showcaseOnSpanningColumns: typeof ShowcaseOnSpanningColumns;
  showcaseThreeColumnGrid: typeof ShowcaseThreeColumnGrid;
  showcaseGrid: typeof ShowcaseGrid;
  showcaseOnBackgroundImage: typeof ShowcaseOnBackgroundImage;
  showcaseOnColoredBackground: typeof ShowcaseOnColoredBackground;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCategoryShowcases__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCategoryShowcases__VariantsArgs;
    args?: PlasmicCategoryShowcases__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCategoryShowcases__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCategoryShowcases__ArgsType,
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
          internalArgPropNames: PlasmicCategoryShowcases__ArgProps,
          internalVariantPropNames: PlasmicCategoryShowcases__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCategoryShowcases__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicCategoryShowcases';
  } else {
    func.displayName = `PlasmicCategoryShowcases.${nodeName}`;
  }
  return func;
}

export const PlasmicCategoryShowcases = Object.assign(
  // Top-level PlasmicCategoryShowcases renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    showcaseOnWhiteBackground: makeNodeComponent('showcaseOnWhiteBackground'),
    showcaseOnSpanningColumns: makeNodeComponent('showcaseOnSpanningColumns'),
    showcaseThreeColumnGrid: makeNodeComponent('showcaseThreeColumnGrid'),
    showcaseGrid: makeNodeComponent('showcaseGrid'),
    showcaseOnBackgroundImage: makeNodeComponent('showcaseOnBackgroundImage'),
    showcaseOnColoredBackground: makeNodeComponent(
      'showcaseOnColoredBackground'
    ),

    // Metadata about props expected for PlasmicCategoryShowcases
    internalVariantProps: PlasmicCategoryShowcases__VariantProps,
    internalArgProps: PlasmicCategoryShowcases__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicCategoryShowcases;
/* prettier-ignore-end */
