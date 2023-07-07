// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type IconmoreIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function IconmoreIcon(props: IconmoreIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 14 3'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={'1.5'} cy={'1.5'} r={'1.5'} fill={'currentColor'}></circle>

      <circle cx={'7'} cy={'1.5'} r={'1.5'} fill={'currentColor'}></circle>

      <circle cx={'12.5'} cy={'1.5'} r={'1.5'} fill={'currentColor'}></circle>
    </svg>
  );
}

export default IconmoreIcon;
/* prettier-ignore-end */
