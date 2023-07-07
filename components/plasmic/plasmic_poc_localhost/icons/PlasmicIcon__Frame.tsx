// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type FrameIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function FrameIcon(props: FrameIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 448 48'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M241.395 8.036a23.645 23.645 0 016.066 15.846c0 13.106-10.625 23.73-23.731 23.73a23.619 23.619 0 01-12.25-3.401l-3.181 2.738c-.469.404-1.138-.171-.808-.695l4.674-7.436-.004-.005.005.004 6.775-10.779a.54.54 0 00-.457-.826h-7.764a.54.54 0 01-.352-.948l22.124-19.118a18.81 18.81 0 00-8.762-2.151c-10.431 0-18.887 8.456-18.887 18.887 0 4.47 1.552 8.576 4.147 11.81l-2.655 4.332A23.648 23.648 0 01200 23.882c0-13.106 10.624-23.73 23.73-23.73 4.646 0 8.98 1.335 12.64 3.643l2.775-2.399c.469-.405 1.139.171.809.696L228.811 19.8a.54.54 0 00.457.827h8.148c.5 0 .731.621.352.948l-22.37 19.261a18.809 18.809 0 008.332 1.933c10.432 0 18.888-8.456 18.888-18.888 0-4.322-1.452-8.305-3.894-11.488l2.671-4.358z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
