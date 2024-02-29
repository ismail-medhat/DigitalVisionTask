module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        alias: {
          '@tests': './__tests__',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@common': './src/common',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@store': './src/store',
          '@types': './src/types',
          '@service': './src/service',
        },
      },
    ],
  ],
};
