// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type DividerIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function DividerIcon(props: DividerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 390 1'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path stroke={'currentColor'} strokeOpacity={'.1'} d={'M0 .5h390'}></path>
    </svg>
  );
}

export default DividerIcon;
/* prettier-ignore-end */
