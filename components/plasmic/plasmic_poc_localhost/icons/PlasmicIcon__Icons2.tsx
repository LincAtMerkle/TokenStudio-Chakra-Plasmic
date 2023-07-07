// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from 'react';
import { classNames } from '@plasmicapp/react-web';

export type Icons2IconProps = React.ComponentProps<'svg'> & {
  title?: string;
};

export function Icons2Icon(props: Icons2IconProps) {
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
        d={
          'M12.314 6.183l-.65-.63-.39-.377c-.22-.213-.428-.414-.633-.615-1.64-1.607-3.899-2.063-5.708-1.281h0C3.119 4.062 1.857 6.056 1.9 8.288h0c.033 1.692.742 3.192 1.775 4.676h0c2.255 3.244 5.314 5.68 8.577 8.066 2.378-1.731 4.642-3.518 6.597-5.633l.661.611-.66-.61c1.658-1.795 3.024-3.61 3.582-5.859h0c.588-2.367-.418-4.832-2.333-5.984l-7.786 2.628zm0 0l.627-.653m-.627.653l.627-.653m0 0c.144-.15.271-.289.39-.419.23-.249.432-.468.67-.684h.001M12.94 5.53l1.062-1.104m0 0c1.863-1.694 4.276-1.967 6.098-.872l-6.098.872z'
        }
        stroke={'currentColor'}
        strokeWidth={'1.8'}
      ></path>
    </svg>
  );
}

export default Icons2Icon;
/* prettier-ignore-end */
