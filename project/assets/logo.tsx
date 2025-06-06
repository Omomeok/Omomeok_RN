import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function Logo({
  width = 80,
  height = 80,
  color = '#2D7DF6',
}: LogoProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 80 80" fill="none">
      <Path
        d="M40 12C24.536 12 12 24.536 12 40C12 55.464 24.536 68 40 68C55.464 68 68 55.464 68 40C68 24.536 55.464 12 40 12Z"
        fill={color}
        fillOpacity="0.1"
      />
      <Path d="M50 30.5L30 40L50 49.5V30.5Z" fill={color} />
      <Path
        d="M28 28.5V51.5C28 52.8807 29.1193 54 30.5 54H59.5C60.8807 54 62 52.8807 62 51.5V28.5C62 27.1193 60.8807 26 59.5 26H30.5C29.1193 26 28 27.1193 28 28.5Z"
        stroke={color}
        strokeWidth="4"
      />
    </Svg>
  );
}
