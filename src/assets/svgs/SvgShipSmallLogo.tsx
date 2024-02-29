import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgShipSmallLogo = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={36}
    fill="none"
    {...props}>
    <Path
      fill="#2F50C1"
      d="M36.114 0c0 3.311-1.344 6.31-3.518 8.484a11.956 11.956 0 0 1-8.28 3.513H0L12.055 0h24.059ZM36.15 23.91 24.002 36H.543v-.025l-.007-.004v-.042c0-.418.093-3.333 1.845-6.13.893-1.424 2.195-2.818 4.154-3.896 1.794-.986 5.579-1.904 8.694-1.887l-.093 3.98 4.704-4.494-4.496-4.706-.015.645-.079 3.382a18.665 18.665 0 0 0-4.21.32l-9.975-9.937h24.331L36.15 23.91Z"
    />
  </Svg>
);
export default SvgShipSmallLogo;
