// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Group8IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 12 12'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={'5.895'}
        cy={'3.158'}
        r={'3.158'}
        fill={'currentColor'}
      ></circle>

      <path
        d={
          'M.458 10.038a4 4 0 013.895-3.09h3.083a4 4 0 013.896 3.09L11.789 12H0l.458-1.962z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
