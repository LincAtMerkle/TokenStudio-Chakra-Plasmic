// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icons9IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icons9Icon(props: Icons9IconProps) {
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

      <circle
        cx={'10'}
        cy={'10'}
        r={'8.1'}
        stroke={'currentColor'}
        strokeWidth={'1.8'}
      ></circle>

      <path
        d={'M22 22l-6-6'}
        stroke={'currentColor'}
        strokeWidth={'1.8'}
        strokeLinecap={'round'}
      ></path>
    </svg>
  );
}

export default Icons9Icon;
/* prettier-ignore-end */
