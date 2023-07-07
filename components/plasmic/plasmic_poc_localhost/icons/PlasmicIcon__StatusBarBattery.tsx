// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type StatusBarBatteryIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function StatusBarBatteryIcon(props: StatusBarBatteryIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 28 13'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={'.35'}
        d={
          'M4 .5h17A3.5 3.5 0 0124.5 4v5a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 9V4A3.5 3.5 0 014 .5z'
        }
        stroke={'currentColor'}
      ></path>

      <path
        opacity={'.4'}
        d={'M26 5v4.22A2.29 2.29 0 0026 5'}
        fill={'currentColor'}
      ></path>

      <path
        d={'M2 4a2 2 0 012-2h17a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V4z'}
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default StatusBarBatteryIcon;
/* prettier-ignore-end */
