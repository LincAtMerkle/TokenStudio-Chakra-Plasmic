// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: rK1ZsG8FX1

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
import { CardHeaderAccentWithContextMenu } from '../../chakra/chakraPro/Card Headers/CardHeaderAccentWithContextMenu'; // plasmic-import: zd7PAeWBMur/codeComponent
import { CardHeaderWithButton } from '../../chakra/chakraPro/Card Headers/CardHeaderWithButton'; // plasmic-import: pOowrhChKRj/codeComponent
import { CardHeaderAccentWithAvatar } from '../../chakra/chakraPro/Card Headers/CardHeaderAccentWithAvatar'; // plasmic-import: LwWhKUfIrKx/codeComponent
import { CardHeaderAccentWithDescription } from '../../chakra/chakraPro/Card Headers/CardHeaderAccentWithDescription'; // plasmic-import: uG9TikrgXpB/codeComponent
import { CardHeaderAccentWithButton } from '../../chakra/chakraPro/Card Headers/CardHeaderAccentWithButton'; // plasmic-import: ie8BKUFQIyv/codeComponent
import { CardHeaderWithDescription } from '../../chakra/chakraPro/Card Headers/CardHeaderWithDescription'; // plasmic-import: tLShuTFr9wf/codeComponent
import { CardHeaderWithAvatar } from '../../chakra/chakraPro/Card Headers/CardHeaderWithAvatar'; // plasmic-import: 7Lhl2H5NRhH/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicCardHeaders.module.css'; // plasmic-import: rK1ZsG8FX1/css

export type PlasmicCardHeaders__VariantMembers = {};
export type PlasmicCardHeaders__VariantsArgs = {};
type VariantPropType = keyof PlasmicCardHeaders__VariantsArgs;
export const PlasmicCardHeaders__VariantProps = new Array<VariantPropType>();

export type PlasmicCardHeaders__ArgsType = {};
type ArgPropType = keyof PlasmicCardHeaders__ArgsType;
export const PlasmicCardHeaders__ArgProps = new Array<ArgPropType>();

export type PlasmicCardHeaders__OverridesType = {
  root?: p.Flex<'div'>;
  cardHeaderWithButton?: p.Flex<typeof CardHeaderWithButton>;
  cardHeaderAccentWithAvatar?: p.Flex<typeof CardHeaderAccentWithAvatar>;
  cardHeaderAccentWithDescription?: p.Flex<
    typeof CardHeaderAccentWithDescription
  >;
  cardHeaderAccentWithButton?: p.Flex<typeof CardHeaderAccentWithButton>;
  cardHeaderWithDescription?: p.Flex<typeof CardHeaderWithDescription>;
  cardHeaderWithAvatar?: p.Flex<typeof CardHeaderWithAvatar>;
};

export interface DefaultCardHeadersProps {}

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

function PlasmicCardHeaders__RenderFunc(props: {
  variants: PlasmicCardHeaders__VariantsArgs;
  args: PlasmicCardHeaders__ArgsType;
  overrides: PlasmicCardHeaders__OverridesType;
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
          <CardHeaderAccentWithContextMenu
            className={classNames(
              '__wab_instance',
              sty.cardHeaderAccentWithContextMenu__q1Cz
            )}
          />

          <CardHeaderWithButton
            data-plasmic-name={'cardHeaderWithButton'}
            data-plasmic-override={overrides.cardHeaderWithButton}
            className={classNames('__wab_instance', sty.cardHeaderWithButton)}
          />

          <CardHeaderAccentWithAvatar
            data-plasmic-name={'cardHeaderAccentWithAvatar'}
            data-plasmic-override={overrides.cardHeaderAccentWithAvatar}
            className={classNames(
              '__wab_instance',
              sty.cardHeaderAccentWithAvatar
            )}
          />

          <CardHeaderAccentWithContextMenu
            className={classNames(
              '__wab_instance',
              sty.cardHeaderAccentWithContextMenu__bun8P
            )}
          />

          <CardHeaderAccentWithDescription
            data-plasmic-name={'cardHeaderAccentWithDescription'}
            data-plasmic-override={overrides.cardHeaderAccentWithDescription}
            className={classNames(
              '__wab_instance',
              sty.cardHeaderAccentWithDescription
            )}
          />

          <CardHeaderAccentWithButton
            data-plasmic-name={'cardHeaderAccentWithButton'}
            data-plasmic-override={overrides.cardHeaderAccentWithButton}
            className={classNames(
              '__wab_instance',
              sty.cardHeaderAccentWithButton
            )}
          />

          <CardHeaderWithDescription
            data-plasmic-name={'cardHeaderWithDescription'}
            data-plasmic-override={overrides.cardHeaderWithDescription}
            className={classNames(
              '__wab_instance',
              sty.cardHeaderWithDescription
            )}
          />

          <CardHeaderWithAvatar
            data-plasmic-name={'cardHeaderWithAvatar'}
            data-plasmic-override={overrides.cardHeaderWithAvatar}
            className={classNames('__wab_instance', sty.cardHeaderWithAvatar)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'cardHeaderWithButton',
    'cardHeaderAccentWithAvatar',
    'cardHeaderAccentWithDescription',
    'cardHeaderAccentWithButton',
    'cardHeaderWithDescription',
    'cardHeaderWithAvatar',
  ],
  cardHeaderWithButton: ['cardHeaderWithButton'],
  cardHeaderAccentWithAvatar: ['cardHeaderAccentWithAvatar'],
  cardHeaderAccentWithDescription: ['cardHeaderAccentWithDescription'],
  cardHeaderAccentWithButton: ['cardHeaderAccentWithButton'],
  cardHeaderWithDescription: ['cardHeaderWithDescription'],
  cardHeaderWithAvatar: ['cardHeaderWithAvatar'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  cardHeaderWithButton: typeof CardHeaderWithButton;
  cardHeaderAccentWithAvatar: typeof CardHeaderAccentWithAvatar;
  cardHeaderAccentWithDescription: typeof CardHeaderAccentWithDescription;
  cardHeaderAccentWithButton: typeof CardHeaderAccentWithButton;
  cardHeaderWithDescription: typeof CardHeaderWithDescription;
  cardHeaderWithAvatar: typeof CardHeaderWithAvatar;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCardHeaders__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCardHeaders__VariantsArgs;
    args?: PlasmicCardHeaders__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCardHeaders__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCardHeaders__ArgsType,
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
          internalArgPropNames: PlasmicCardHeaders__ArgProps,
          internalVariantPropNames: PlasmicCardHeaders__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCardHeaders__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicCardHeaders';
  } else {
    func.displayName = `PlasmicCardHeaders.${nodeName}`;
  }
  return func;
}

export const PlasmicCardHeaders = Object.assign(
  // Top-level PlasmicCardHeaders renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    cardHeaderWithButton: makeNodeComponent('cardHeaderWithButton'),
    cardHeaderAccentWithAvatar: makeNodeComponent('cardHeaderAccentWithAvatar'),
    cardHeaderAccentWithDescription: makeNodeComponent(
      'cardHeaderAccentWithDescription'
    ),
    cardHeaderAccentWithButton: makeNodeComponent('cardHeaderAccentWithButton'),
    cardHeaderWithDescription: makeNodeComponent('cardHeaderWithDescription'),
    cardHeaderWithAvatar: makeNodeComponent('cardHeaderWithAvatar'),

    // Metadata about props expected for PlasmicCardHeaders
    internalVariantProps: PlasmicCardHeaders__VariantProps,
    internalArgProps: PlasmicCardHeaders__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicCardHeaders;
/* prettier-ignore-end */
