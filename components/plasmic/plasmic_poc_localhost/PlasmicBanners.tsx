// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: qJIgrPkskm

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
import { BannerWithButton } from '../../chakra/chakraPro/Application/Banner/BannerWithButton'; // plasmic-import: aUw-sqA_-N/codeComponent
import { BannerWithTwoButtonsOnAccent } from '../../chakra/chakraPro/Application/Banner/BannerWithTwoButtonsOnAccent'; // plasmic-import: dYtiLDCItAk/codeComponent
import { BannerWithTwoButtonsFloatingOnAccent } from '../../chakra/chakraPro/Application/Banner/BannerWithTwoButtonsFloatingOnAccent'; // plasmic-import: K-33e-QJIN2/codeComponent
import { BannerWithTextOnAccent } from '../../chakra/chakraPro/Application/Banner/BannerWithTextOnAccent'; // plasmic-import: wcXJjJrvsBo/codeComponent
import { BannerWithTextFloatingOnAccent } from '../../chakra/chakraPro/Application/Banner/BannerWithTextFloatingOnAccent'; // plasmic-import: 04fdUJ81yni/codeComponent
import { BannerWithButtonFloating } from '../../chakra/chakraPro/Application/Banner/BannerWithButtonFloating'; // plasmic-import: TqJg85CwVc/codeComponent
import { BannerWithFormOnAccent } from '../../chakra/chakraPro/Application/Banner/BannerWithFormOnAccent'; // plasmic-import: _McpO7JTBwY/codeComponent
import { BannerWithFormFloatingOnAccent } from '../../chakra/chakraPro/Application/Banner/BannerWithFormFloatingOnAccent'; // plasmic-import: LBeeJweHJIG/codeComponent
import { BannerWithTwoButtonsFloating } from '../../chakra/chakraPro/Application/Banner/BannerWithTwoButtonsFloating'; // plasmic-import: _uIVCSIoRs0/codeComponent
import { BannerWithTwoButtons } from '../../chakra/chakraPro/Application/Banner/BannerWithTwoButtons'; // plasmic-import: IpMaBoz9L-O/codeComponent
import { BannerWithTextFloating } from '../../chakra/chakraPro/Application/Banner/BannerWithTextFloating'; // plasmic-import: Dos_fYLdW1p/codeComponent
import { BannerWithText } from '../../chakra/chakraPro/Application/Banner/BannerWithText'; // plasmic-import: wywxmuaBofJ/codeComponent
import { BannerWithFormFloating } from '../../chakra/chakraPro/Application/Banner/BannerWithFormFloating'; // plasmic-import: M9EoEQH9HF/codeComponent
import { BannerWithForm } from '../../chakra/chakraPro/Application/Banner/BannerWithForm'; // plasmic-import: 5kfD9qT8tF/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicBanners.module.css'; // plasmic-import: qJIgrPkskm/css

export type PlasmicBanners__VariantMembers = {};
export type PlasmicBanners__VariantsArgs = {};
type VariantPropType = keyof PlasmicBanners__VariantsArgs;
export const PlasmicBanners__VariantProps = new Array<VariantPropType>();

export type PlasmicBanners__ArgsType = {};
type ArgPropType = keyof PlasmicBanners__ArgsType;
export const PlasmicBanners__ArgProps = new Array<ArgPropType>();

export type PlasmicBanners__OverridesType = {
  root?: p.Flex<'div'>;
  bannerWithButton?: p.Flex<typeof BannerWithButton>;
  bannerWithTwoButtonsOnAccent?: p.Flex<typeof BannerWithTwoButtonsOnAccent>;
  bannerWithTwoButtonsFloatingOnAccent?: p.Flex<
    typeof BannerWithTwoButtonsFloatingOnAccent
  >;
  bannerWithTextOnAccent?: p.Flex<typeof BannerWithTextOnAccent>;
  bannerWithTextFloatingOnAccent?: p.Flex<
    typeof BannerWithTextFloatingOnAccent
  >;
  text?: p.Flex<'div'>;
  bannerWithFormOnAccent?: p.Flex<typeof BannerWithFormOnAccent>;
  bannerWithFormFloatingOnAccent?: p.Flex<
    typeof BannerWithFormFloatingOnAccent
  >;
  bannerWithTwoButtonsFloating?: p.Flex<typeof BannerWithTwoButtonsFloating>;
  bannerWithTwoButtons?: p.Flex<typeof BannerWithTwoButtons>;
  bannerWithTextFloating?: p.Flex<typeof BannerWithTextFloating>;
  bannerWithText?: p.Flex<typeof BannerWithText>;
  bannerWithFormFloating?: p.Flex<typeof BannerWithFormFloating>;
  bannerWithForm?: p.Flex<typeof BannerWithForm>;
};

export interface DefaultBannersProps {}

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

function PlasmicBanners__RenderFunc(props: {
  variants: PlasmicBanners__VariantsArgs;
  args: PlasmicBanners__ArgsType;
  overrides: PlasmicBanners__OverridesType;
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
          <BannerWithButton
            data-plasmic-name={'bannerWithButton'}
            data-plasmic-override={overrides.bannerWithButton}
            className={classNames('__wab_instance', sty.bannerWithButton)}
          />

          <BannerWithTwoButtonsOnAccent
            data-plasmic-name={'bannerWithTwoButtonsOnAccent'}
            data-plasmic-override={overrides.bannerWithTwoButtonsOnAccent}
            className={classNames(
              '__wab_instance',
              sty.bannerWithTwoButtonsOnAccent
            )}
          />

          <BannerWithTwoButtonsFloatingOnAccent
            data-plasmic-name={'bannerWithTwoButtonsFloatingOnAccent'}
            data-plasmic-override={
              overrides.bannerWithTwoButtonsFloatingOnAccent
            }
            className={classNames(
              '__wab_instance',
              sty.bannerWithTwoButtonsFloatingOnAccent
            )}
          />

          <BannerWithTextOnAccent
            data-plasmic-name={'bannerWithTextOnAccent'}
            data-plasmic-override={overrides.bannerWithTextOnAccent}
            className={classNames('__wab_instance', sty.bannerWithTextOnAccent)}
          />

          <BannerWithTextFloatingOnAccent
            data-plasmic-name={'bannerWithTextFloatingOnAccent'}
            data-plasmic-override={overrides.bannerWithTextFloatingOnAccent}
            className={classNames(
              '__wab_instance',
              sty.bannerWithTextFloatingOnAccent
            )}
          />

          <BannerWithButtonFloating
            className={classNames(
              '__wab_instance',
              sty.bannerWithButtonFloating__z72Ne
            )}
          />

          <div
            data-plasmic-name={'text'}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {'Banner with button on accent'}
          </div>
          <BannerWithFormOnAccent
            data-plasmic-name={'bannerWithFormOnAccent'}
            data-plasmic-override={overrides.bannerWithFormOnAccent}
            className={classNames('__wab_instance', sty.bannerWithFormOnAccent)}
          />

          <BannerWithFormFloatingOnAccent
            data-plasmic-name={'bannerWithFormFloatingOnAccent'}
            data-plasmic-override={overrides.bannerWithFormFloatingOnAccent}
            className={classNames(
              '__wab_instance',
              sty.bannerWithFormFloatingOnAccent
            )}
          />

          <BannerWithTwoButtonsFloating
            data-plasmic-name={'bannerWithTwoButtonsFloating'}
            data-plasmic-override={overrides.bannerWithTwoButtonsFloating}
            className={classNames(
              '__wab_instance',
              sty.bannerWithTwoButtonsFloating
            )}
          />

          <BannerWithTwoButtons
            data-plasmic-name={'bannerWithTwoButtons'}
            data-plasmic-override={overrides.bannerWithTwoButtons}
            className={classNames('__wab_instance', sty.bannerWithTwoButtons)}
          />

          <BannerWithTextFloating
            data-plasmic-name={'bannerWithTextFloating'}
            data-plasmic-override={overrides.bannerWithTextFloating}
            className={classNames('__wab_instance', sty.bannerWithTextFloating)}
          />

          <BannerWithText
            data-plasmic-name={'bannerWithText'}
            data-plasmic-override={overrides.bannerWithText}
            className={classNames('__wab_instance', sty.bannerWithText)}
          />

          <BannerWithFormFloating
            data-plasmic-name={'bannerWithFormFloating'}
            data-plasmic-override={overrides.bannerWithFormFloating}
            className={classNames('__wab_instance', sty.bannerWithFormFloating)}
          />

          <BannerWithForm
            data-plasmic-name={'bannerWithForm'}
            data-plasmic-override={overrides.bannerWithForm}
            className={classNames('__wab_instance', sty.bannerWithForm)}
          />

          <BannerWithButtonFloating
            className={classNames(
              '__wab_instance',
              sty.bannerWithButtonFloating__xlm0E
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
    'bannerWithButton',
    'bannerWithTwoButtonsOnAccent',
    'bannerWithTwoButtonsFloatingOnAccent',
    'bannerWithTextOnAccent',
    'bannerWithTextFloatingOnAccent',
    'text',
    'bannerWithFormOnAccent',
    'bannerWithFormFloatingOnAccent',
    'bannerWithTwoButtonsFloating',
    'bannerWithTwoButtons',
    'bannerWithTextFloating',
    'bannerWithText',
    'bannerWithFormFloating',
    'bannerWithForm',
  ],
  bannerWithButton: ['bannerWithButton'],
  bannerWithTwoButtonsOnAccent: ['bannerWithTwoButtonsOnAccent'],
  bannerWithTwoButtonsFloatingOnAccent: [
    'bannerWithTwoButtonsFloatingOnAccent',
  ],
  bannerWithTextOnAccent: ['bannerWithTextOnAccent'],
  bannerWithTextFloatingOnAccent: ['bannerWithTextFloatingOnAccent'],
  text: ['text'],
  bannerWithFormOnAccent: ['bannerWithFormOnAccent'],
  bannerWithFormFloatingOnAccent: ['bannerWithFormFloatingOnAccent'],
  bannerWithTwoButtonsFloating: ['bannerWithTwoButtonsFloating'],
  bannerWithTwoButtons: ['bannerWithTwoButtons'],
  bannerWithTextFloating: ['bannerWithTextFloating'],
  bannerWithText: ['bannerWithText'],
  bannerWithFormFloating: ['bannerWithFormFloating'],
  bannerWithForm: ['bannerWithForm'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  bannerWithButton: typeof BannerWithButton;
  bannerWithTwoButtonsOnAccent: typeof BannerWithTwoButtonsOnAccent;
  bannerWithTwoButtonsFloatingOnAccent: typeof BannerWithTwoButtonsFloatingOnAccent;
  bannerWithTextOnAccent: typeof BannerWithTextOnAccent;
  bannerWithTextFloatingOnAccent: typeof BannerWithTextFloatingOnAccent;
  text: 'div';
  bannerWithFormOnAccent: typeof BannerWithFormOnAccent;
  bannerWithFormFloatingOnAccent: typeof BannerWithFormFloatingOnAccent;
  bannerWithTwoButtonsFloating: typeof BannerWithTwoButtonsFloating;
  bannerWithTwoButtons: typeof BannerWithTwoButtons;
  bannerWithTextFloating: typeof BannerWithTextFloating;
  bannerWithText: typeof BannerWithText;
  bannerWithFormFloating: typeof BannerWithFormFloating;
  bannerWithForm: typeof BannerWithForm;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBanners__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBanners__VariantsArgs;
    args?: PlasmicBanners__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBanners__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBanners__ArgsType,
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
          internalArgPropNames: PlasmicBanners__ArgProps,
          internalVariantPropNames: PlasmicBanners__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicBanners__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicBanners';
  } else {
    func.displayName = `PlasmicBanners.${nodeName}`;
  }
  return func;
}

export const PlasmicBanners = Object.assign(
  // Top-level PlasmicBanners renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    bannerWithButton: makeNodeComponent('bannerWithButton'),
    bannerWithTwoButtonsOnAccent: makeNodeComponent(
      'bannerWithTwoButtonsOnAccent'
    ),
    bannerWithTwoButtonsFloatingOnAccent: makeNodeComponent(
      'bannerWithTwoButtonsFloatingOnAccent'
    ),
    bannerWithTextOnAccent: makeNodeComponent('bannerWithTextOnAccent'),
    bannerWithTextFloatingOnAccent: makeNodeComponent(
      'bannerWithTextFloatingOnAccent'
    ),
    text: makeNodeComponent('text'),
    bannerWithFormOnAccent: makeNodeComponent('bannerWithFormOnAccent'),
    bannerWithFormFloatingOnAccent: makeNodeComponent(
      'bannerWithFormFloatingOnAccent'
    ),
    bannerWithTwoButtonsFloating: makeNodeComponent(
      'bannerWithTwoButtonsFloating'
    ),
    bannerWithTwoButtons: makeNodeComponent('bannerWithTwoButtons'),
    bannerWithTextFloating: makeNodeComponent('bannerWithTextFloating'),
    bannerWithText: makeNodeComponent('bannerWithText'),
    bannerWithFormFloating: makeNodeComponent('bannerWithFormFloating'),
    bannerWithForm: makeNodeComponent('bannerWithForm'),

    // Metadata about props expected for PlasmicBanners
    internalVariantProps: PlasmicBanners__VariantProps,
    internalArgProps: PlasmicBanners__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicBanners;
/* prettier-ignore-end */
