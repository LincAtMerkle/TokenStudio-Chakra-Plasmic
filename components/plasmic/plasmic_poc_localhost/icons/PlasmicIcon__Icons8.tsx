// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icons8IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icons8Icon(props: Icons8IconProps) {
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
        fillRule={'evenodd'}
        clipRule={'evenodd'}
        d={'M22 11.536V22h-6v-5a4 4 0 00-8 0v5H2V11.536L12 2l10 9.536z'}
        fill={'currentColor'}
      ></path>

      <path
        d={
          'M22 22v.5h.5V22H22zm0-10.464h.5v-.214l-.155-.148-.345.362zM16 22h-.5v.5h.5V22zm-8 0v.5h.5V22H8zm-6 0h-.5v.5H2V22zm0-10.464l-.345-.362-.155.148v.214H2zM12 2l.345-.362L12 1.31l-.345.33L12 2zm10.5 20V11.536h-1V22h1zm-6.5.5h6v-1h-6v1zm.5-.5v-5h-1v5h1zm0-5a4.5 4.5 0 00-4.5-4.5v1a3.5 3.5 0 013.5 3.5h1zM12 12.5A4.5 4.5 0 007.5 17h1a3.5 3.5 0 013.5-3.5v-1zM7.5 17v5h1v-5h-1zM2 22.5h6v-1H2v1zm-.5-10.964V22h1V11.536h-1zm10.155-9.898l-10 9.536.69.724 10-9.536-.69-.724zm10.69 9.536l-10-9.536-.69.724 10 9.536.69-.724z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default Icons8Icon;
/* prettier-ignore-end */
