// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nV7sRTPBx6ecWzFNNAWeQg
// Component: -tKq2UCKd-

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
import { NotificationWithTwoLinksAndIcon } from '../../chakra/chakraPro/Aplication/Notifications/NotificationWithTwoLinksAndIcon'; // plasmic-import: 1suj14Z7ses/codeComponent
import { NotificationWithTwoLinks } from '../../chakra/chakraPro/Aplication/Notifications/NotificationWithTwoLinks'; // plasmic-import: odOeVF8q4XU/codeComponent
import { NotificationWithAvatar } from '../../chakra/chakraPro/Aplication/Notifications/NotificationWithAvatar'; // plasmic-import: AK1_Q4jt921/codeComponent
import { NotificationWithSplitButtonsAndIcon } from '../../chakra/chakraPro/Aplication/Notifications/NotificationWithSplitButtonsAndIcon'; // plasmic-import: Ei7fHEjLdZq/codeComponent
import { NotificationWithSplitButtons } from '../../chakra/chakraPro/Aplication/Notifications/NotificationWithSplitButtons'; // plasmic-import: 8GwAnWvln4r/codeComponent

import '@plasmicapp/react-web/lib/plasmic.css';

import projectcss from './plasmic_plasmic_poc_localhost.module.css'; // plasmic-import: nV7sRTPBx6ecWzFNNAWeQg/projectcss
import sty from './PlasmicNotifications.module.css'; // plasmic-import: -tKq2UCKd-/css

export type PlasmicNotifications__VariantMembers = {};
export type PlasmicNotifications__VariantsArgs = {};
type VariantPropType = keyof PlasmicNotifications__VariantsArgs;
export const PlasmicNotifications__VariantProps = new Array<VariantPropType>();

export type PlasmicNotifications__ArgsType = {};
type ArgPropType = keyof PlasmicNotifications__ArgsType;
export const PlasmicNotifications__ArgProps = new Array<ArgPropType>();

export type PlasmicNotifications__OverridesType = {
  root?: p.Flex<'div'>;
  notificationWithTwoLinksAndIcon?: p.Flex<
    typeof NotificationWithTwoLinksAndIcon
  >;
  notificationWithTwoLinks?: p.Flex<typeof NotificationWithTwoLinks>;
  notificationWithAvatar?: p.Flex<typeof NotificationWithAvatar>;
  notificationWithSplitButtonsAndIcon?: p.Flex<
    typeof NotificationWithSplitButtonsAndIcon
  >;
  notificationWithSplitButtons?: p.Flex<typeof NotificationWithSplitButtons>;
};

export interface DefaultNotificationsProps {}

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

function PlasmicNotifications__RenderFunc(props: {
  variants: PlasmicNotifications__VariantsArgs;
  args: PlasmicNotifications__ArgsType;
  overrides: PlasmicNotifications__OverridesType;
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
            className={classNames('__wab_instance', sty.chakraUiHeading__hbkh5)}
            noOfLines={1 as const}
            size={'4xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cu91U
              )}
            >
              {'Notifications'}
            </div>
          </Heading>
          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__bUTbb)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__iniA6
              )}
            >
              {'Notification with two links and icon'}
            </div>
          </Heading>
          <NotificationWithTwoLinksAndIcon
            data-plasmic-name={'notificationWithTwoLinksAndIcon'}
            data-plasmic-override={overrides.notificationWithTwoLinksAndIcon}
            className={classNames(
              '__wab_instance',
              sty.notificationWithTwoLinksAndIcon
            )}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__iwiAl)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qJHju
              )}
            >
              {'Notification with two links'}
            </div>
          </Heading>
          <NotificationWithTwoLinks
            data-plasmic-name={'notificationWithTwoLinks'}
            data-plasmic-override={overrides.notificationWithTwoLinks}
            className={classNames(
              '__wab_instance',
              sty.notificationWithTwoLinks
            )}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__fBs7J)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nJ9TM
              )}
            >
              {'Notification with avatar'}
            </div>
          </Heading>
          <NotificationWithAvatar
            data-plasmic-name={'notificationWithAvatar'}
            data-plasmic-override={overrides.notificationWithAvatar}
            className={classNames('__wab_instance', sty.notificationWithAvatar)}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__ryCOq)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__q35Of
              )}
            >
              {'Notification with split buttons and icon'}
            </div>
          </Heading>
          <NotificationWithSplitButtonsAndIcon
            data-plasmic-name={'notificationWithSplitButtonsAndIcon'}
            data-plasmic-override={
              overrides.notificationWithSplitButtonsAndIcon
            }
            className={classNames(
              '__wab_instance',
              sty.notificationWithSplitButtonsAndIcon
            )}
          />

          <Heading
            className={classNames('__wab_instance', sty.chakraUiHeading__kQAhA)}
            noOfLines={1 as const}
            size={'xl' as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bTonG
              )}
            >
              {'Notification with split buttons'}
            </div>
          </Heading>
          <NotificationWithSplitButtons
            data-plasmic-name={'notificationWithSplitButtons'}
            data-plasmic-override={overrides.notificationWithSplitButtons}
            className={classNames(
              '__wab_instance',
              sty.notificationWithSplitButtons
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
    'notificationWithTwoLinksAndIcon',
    'notificationWithTwoLinks',
    'notificationWithAvatar',
    'notificationWithSplitButtonsAndIcon',
    'notificationWithSplitButtons',
  ],
  notificationWithTwoLinksAndIcon: ['notificationWithTwoLinksAndIcon'],
  notificationWithTwoLinks: ['notificationWithTwoLinks'],
  notificationWithAvatar: ['notificationWithAvatar'],
  notificationWithSplitButtonsAndIcon: ['notificationWithSplitButtonsAndIcon'],
  notificationWithSplitButtons: ['notificationWithSplitButtons'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  notificationWithTwoLinksAndIcon: typeof NotificationWithTwoLinksAndIcon;
  notificationWithTwoLinks: typeof NotificationWithTwoLinks;
  notificationWithAvatar: typeof NotificationWithAvatar;
  notificationWithSplitButtonsAndIcon: typeof NotificationWithSplitButtonsAndIcon;
  notificationWithSplitButtons: typeof NotificationWithSplitButtons;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNotifications__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNotifications__VariantsArgs;
    args?: PlasmicNotifications__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNotifications__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNotifications__ArgsType,
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
          internalArgPropNames: PlasmicNotifications__ArgProps,
          internalVariantPropNames: PlasmicNotifications__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicNotifications__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicNotifications';
  } else {
    func.displayName = `PlasmicNotifications.${nodeName}`;
  }
  return func;
}

export const PlasmicNotifications = Object.assign(
  // Top-level PlasmicNotifications renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    notificationWithTwoLinksAndIcon: makeNodeComponent(
      'notificationWithTwoLinksAndIcon'
    ),
    notificationWithTwoLinks: makeNodeComponent('notificationWithTwoLinks'),
    notificationWithAvatar: makeNodeComponent('notificationWithAvatar'),
    notificationWithSplitButtonsAndIcon: makeNodeComponent(
      'notificationWithSplitButtonsAndIcon'
    ),
    notificationWithSplitButtons: makeNodeComponent(
      'notificationWithSplitButtons'
    ),

    // Metadata about props expected for PlasmicNotifications
    internalVariantProps: PlasmicNotifications__VariantProps,
    internalArgProps: PlasmicNotifications__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  }
);

export default PlasmicNotifications;
/* prettier-ignore-end */
