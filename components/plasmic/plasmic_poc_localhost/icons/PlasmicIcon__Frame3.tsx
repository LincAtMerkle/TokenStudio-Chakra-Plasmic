// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Frame3IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Frame3Icon(props: Frame3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 12 11'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={'M1.5 6l3 3 6-8'}
        stroke={'currentColor'}
        strokeWidth={'2'}
        strokeDasharray={'16 16'}
      ></path>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */
