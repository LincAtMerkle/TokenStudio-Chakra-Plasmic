// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group4IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 22 23'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M2.979 6.3H19.02a1.1 1.1 0 011.098 1.031l.717 11.476a3.1 3.1 0 01-3.094 3.293H4.258a3.1 3.1 0 01-3.094-3.293L1.88 7.33A1.1 1.1 0 012.979 6.3z'
        }
        stroke={'currentColor'}
        strokeWidth={'1.8'}
      ></path>

      <path
        d={'M14.3 9.9a3.3 3.3 0 01-6.6 0m6.6-3.95V4.3a3.3 3.3 0 00-6.6 0v1.65'}
        stroke={'currentColor'}
        strokeWidth={'1.8'}
        strokeLinecap={'round'}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
