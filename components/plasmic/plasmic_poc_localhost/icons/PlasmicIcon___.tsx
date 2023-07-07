// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type _IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function _Icon(props: _IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 28 28'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M17.35 0v9.717h9.703v7.642H17.35v9.694H9.702v-9.694H0V9.717h9.702V0h7.649z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default _Icon;
/* prettier-ignore-end */
