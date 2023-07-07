// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type NotchIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function NotchIcon(props: NotchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 172 32'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M0 0h172a6 6 0 00-6 6v.713c0 2.495 0 3.743-.098 4.794-1.013 10.816-9.579 19.382-20.395 20.395-1.051.098-2.299.098-4.794.098H31.287c-2.495 0-3.743 0-4.794-.098C15.677 30.889 7.11 22.323 6.098 11.507 6 10.456 6 9.208 6 6.713V6a6 6 0 00-6-6z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default NotchIcon;
/* prettier-ignore-end */
