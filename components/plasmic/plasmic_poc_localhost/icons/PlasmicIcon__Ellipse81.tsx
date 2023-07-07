// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Ellipse81IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Ellipse81Icon(props: Ellipse81IconProps) {
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

      <g filter={'url(#cchQ2Y23Bqa)'}>
        <circle
          cx={'12'}
          cy={'12'}
          r={'12'}
          fill={'currentColor'}
          fillOpacity={'.5'}
        ></circle>
      </g>

      <defs>
        <filter
          id={'cchQ2Y23Bqa'}
          x={'-4'}
          y={'-4'}
          width={'32'}
          height={'32'}
          filterUnits={'userSpaceOnUse'}
          colorInterpolationFilters={'sRGB'}
        >
          <feFlood floodOpacity={'0'} result={'BackgroundImageFix'}></feFlood>

          <feGaussianBlur
            in={'BackgroundImageFix'}
            stdDeviation={'2'}
          ></feGaussianBlur>

          <feComposite
            in2={'SourceAlpha'}
            operator={'in'}
            result={'effect1_backgroundBlur_1693_36198'}
          ></feComposite>

          <feBlend
            in={'SourceGraphic'}
            in2={'effect1_backgroundBlur_1693_36198'}
            result={'shape'}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse81Icon;
/* prettier-ignore-end */
