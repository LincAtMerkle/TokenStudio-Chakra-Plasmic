// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Frame6IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Frame6Icon(props: Frame6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 20 20'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={'M10 12a2 2 0 100-4 2 2 0 000 4z'} fill={'currentColor'}></path>

      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Frame6Icon;
/* prettier-ignore-end */
