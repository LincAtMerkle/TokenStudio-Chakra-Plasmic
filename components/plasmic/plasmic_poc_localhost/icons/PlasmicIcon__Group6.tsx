// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group6IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 10 10'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={
          'M6 1a1 1 0 00-2 0v3H1a1 1 0 000 2h3v3a1 1 0 102 0V6h3a1 1 0 100-2H6V1z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
