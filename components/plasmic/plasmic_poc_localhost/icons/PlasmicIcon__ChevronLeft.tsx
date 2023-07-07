// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type ChevronLeftIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function ChevronLeftIcon(props: ChevronLeftIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 24'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={'url(#of7-r1JqY3a)'}>
        <path
          d={'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z'}
          fill={'currentColor'}
        ></path>
      </g>

      <defs>
        <clipPath id={'of7-r1JqY3a'}>
          <path fill={'currentColor'} d={'M0 0h24v24H0z'}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ChevronLeftIcon;
/* prettier-ignore-end */
