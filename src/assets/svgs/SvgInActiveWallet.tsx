import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SvgInActiveWallet = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill="#A7A3B3"
      fillRule="evenodd"
      d="M23.2 8.22h4.539v-.688c-.71-2.647-2.517-2.63-4.75-2.607l-.72.007H5.3a.705.705 0 1 1 0-1.411h16.97c.5 0 .607 0 .708-.003 1.91-.02 3.578-.037 4.762 1.08v-.322c0-.79-.323-1.505-.844-2.026a2.861 2.861 0 0 0-2.026-.844H5.12c-.789 0-1.504.324-2.025.844a2.862 2.862 0 0 0-.844 2.026v16.441c0 .79.324 1.505.844 2.026.52.52 1.239.843 2.026.843h19.747c.79 0 1.505-.323 2.026-.843.52-.521.843-1.239.843-2.026v-2.334h-4.54c-1.369 0-2.615-.56-3.515-1.46-.9-.901-1.46-2.147-1.46-3.516v-.215c0-1.37.56-2.615 1.46-3.516a4.987 4.987 0 0 1 3.518-1.455Zm5.948.028c.51.076.967.318 1.315.668.429.43.693 1.022.693 1.673v5.33a2.472 2.472 0 0 1-2.008 2.425v2.375a4.267 4.267 0 0 1-1.256 3.023 4.267 4.267 0 0 1-3.023 1.255H5.12a4.267 4.267 0 0 1-3.022-1.255 4.257 4.257 0 0 1-1.255-3.02V4.278c0-1.177.48-2.248 1.255-3.022A4.267 4.267 0 0 1 5.12 0h19.747c1.177 0 2.248.481 3.022 1.256a4.267 4.267 0 0 1 1.256 3.022v3.97h.003Zm-6.56 3.128a1.808 1.808 0 1 1 0 3.616 1.808 1.808 0 0 1 0-3.616Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgInActiveWallet;
