// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type IconMobileSignalIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function IconMobileSignalIcon(props: IconMobileSignalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 18 12'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M10 3a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1h-1a1 1 0 01-1-1V3zm5-2a1 1 0 011-1h1a1 1 0 011 1v10a1 1 0 01-1 1h-1a1 1 0 01-1-1V1zM5 6.5a1 1 0 011-1h1a1 1 0 011 1V11a1 1 0 01-1 1H6a1 1 0 01-1-1V6.5zM0 9a1 1 0 011-1h1a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1V9z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default IconMobileSignalIcon;
/* prettier-ignore-end */
