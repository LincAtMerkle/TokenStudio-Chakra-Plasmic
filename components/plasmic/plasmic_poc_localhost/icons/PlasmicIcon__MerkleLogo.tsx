// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type MerkleLogoIconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function MerkleLogoIcon(props: MerkleLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 126 16'}
      height={'1em'}
      width={'1em'}
      className={classNames('plasmic-default__svg', className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          'M28.59 15.68h-3.33v-9.3l-4.997 5.007-4.997-5.007v9.3h-3.332V0h1.771l6.6 6.612L26.817 0h1.772v15.68zM8.602 7.06H0l8.602 8.62V7.06zm39.593 8.62H32.976V0h14.577v3.229H36.32v2.583h7.373v3.143H36.32v3.582h11.875v3.143zm16.452-6.645a4.764 4.764 0 002.358-1.712 4.73 4.73 0 00.856-2.741c0-1.499-.514-2.655-1.542-3.469C65.377.385 64.18 0 62.638 0H52.193v15.68h3.296V9.207h5.44L65.1 15.68h3.718l-4.17-6.645zm-.438-3.543c-.182.25-.439.437-.732.533-.205.04-.414.058-.622.054h-7.366V3.213h7.362c.48 0 .854.12 1.147.347.32.253.48.613.48 1.08.002.306-.091.604-.267.854l-.002-.002zM88.725 15.68h-3.9l-5.856-7.887-2.358 2.013v5.874h-3.343V0h3.343v5.824L83.513 0h4.628L81.37 5.738l7.356 9.942zm17.848 0H92.531V0h3.34v12.537h10.702v3.143zm18.823 0h-15.22V0h14.576v3.229h-11.275v2.583h7.375v3.143h-7.375v3.582h11.919v3.143z'
        }
        fill={'currentColor'}
      ></path>
    </svg>
  );
}

export default MerkleLogoIcon;
/* prettier-ignore-end */
