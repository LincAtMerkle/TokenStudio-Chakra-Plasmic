// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type FactIconIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function FactIconIcon(props: FactIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 34 34'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M17 8.2c5.857 0 11.08 3.408 13.63 8.8-2.55 5.392-7.773 8.8-13.63 8.8-5.857 0-11.08-3.408-13.63-8.8C5.92 11.608 11.142 8.2 17 8.2zM17 5C9.273 5 2.674 9.976 0 17c2.674 7.024 9.273 12 17 12s14.326-4.976 17-12C31.326 9.976 24.727 5 17 5zm0 8c2.133 0 3.864 1.792 3.864 4S19.133 21 17 21s-3.864-1.792-3.864-4 1.731-4 3.864-4zm0-3.2c-3.833 0-6.954 3.232-6.954 7.2s3.121 7.2 6.954 7.2c3.833 0 6.954-3.232 6.954-7.2S20.834 9.8 17 9.8z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default FactIconIcon;
/* prettier-ignore-end */
