// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Polygon1IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Polygon1Icon(props: Polygon1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 8 7'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M3.327.26a.546.546 0 01.93 0L7.51 5.72c.206.347-.052.78-.465.78H.538c-.414 0-.672-.433-.465-.78L3.327.26z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Polygon1Icon;
/* prettier-ignore-end */
