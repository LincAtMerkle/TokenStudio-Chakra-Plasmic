// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Frame2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Frame2Icon(props: Frame2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 14 14'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={'M7 8.4a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8z'}
        fill={'currentColor'}
      ></path>

      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M.32 7a7.003 7.003 0 0113.36 0A7.003 7.003 0 01.32 7zM9.8 7a2.8 2.8 0 11-5.6 0 2.8 2.8 0 015.6 0z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */
