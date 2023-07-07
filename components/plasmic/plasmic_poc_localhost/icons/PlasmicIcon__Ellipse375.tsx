// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Ellipse375IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Ellipse375Icon(props: Ellipse375IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 33 33'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={'16.5'}
        cy={'16.5'}
        r={'15.5'}
        stroke={'currentColor'}
        strokeWidth={'2'}
      ></circle>
    </svg>
  );
}

export default Ellipse375Icon;
/* prettier-ignore-end */
