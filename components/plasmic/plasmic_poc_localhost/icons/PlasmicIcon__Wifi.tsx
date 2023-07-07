// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type WifiIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function WifiIcon(props: WifiIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 17 12'}
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
          'M8.5 2.588c2.467 0 4.84.967 6.627 2.702.134.134.35.132.482-.004l1.287-1.326a.37.37 0 00-.003-.518 11.953 11.953 0 00-16.786 0 .37.37 0 00-.003.518L1.39 5.286a.338.338 0 00.482.004A9.515 9.515 0 018.5 2.588zm.036 4.001a5.4 5.4 0 013.667 1.443.34.34 0 00.482-.006L13.97 6.7a.37.37 0 00-.005-.522 7.851 7.851 0 00-10.856 0 .37.37 0 00-.004.522L4.39 8.026a.34.34 0 00.482.006 5.4 5.4 0 013.664-1.443zm2.614 2.588a.36.36 0 01-.105.262l-2.223 2.29a.343.343 0 01-.494 0l-2.223-2.29a.36.36 0 01.01-.52 3.75 3.75 0 014.92 0 .36.36 0 01.115.258z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default WifiIcon;
/* prettier-ignore-end */
