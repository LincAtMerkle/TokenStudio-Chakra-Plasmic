// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icons7IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icons7Icon(props: Icons7IconProps) {
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

      <path
        d={
          'M3.9 21.078V1.9h16.2v19.178l-7.524-6.27a.9.9 0 00-1.152 0L3.9 21.079z'
        }
        stroke={'currentColor'}
        strokeWidth={'1.8'}
        strokeLinejoin={'round'}
      ></path>
    </svg>
  );
}

export default Icons7Icon;
/* prettier-ignore-end */
