import React from 'react';
import bem from '../../utils/bem';

const b = bem('icon');

export type IconPropSize = 'xs' | 's' | 'm';

export interface IIcon {
  view?: 'alert' | 'brand' | 'ghost' | 'link' | 'primary' | 'secondary' | 'success' | 'warning';
  size?: IconPropSize;
  className?: string;
}

const Icon: React.FC<IIcon> = (props) => {
  const { view, size = 'm', children, className } = props;
  let width;

  if (size === 'xs') width = 12;
  else if (size === 's') width = 16;
  else if (size === 'm') width = 24;

  return (
    <svg
      className={b(
        {
          view,
          size,
        },
        className
      )}
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default Icon;
