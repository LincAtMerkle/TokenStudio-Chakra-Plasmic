// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Frame4IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Frame4Icon(props: Frame4IconProps) {
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

      <path
        d={
          'M20 3.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.805-2.27 8.22 8.22 0 01-2.606.996 4.096 4.096 0 00-2.995-1.296c-2.65 0-4.596 2.472-3.998 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 01.804 7.59c-.044 1.9 1.318 3.68 3.291 4.074a4.114 4.114 0 01-1.853.07 4.106 4.106 0 003.833 2.85A8.25 8.25 0 010 16.283a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.353 8.353 0 0020 3.798z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Frame4Icon;
/* prettier-ignore-end */
