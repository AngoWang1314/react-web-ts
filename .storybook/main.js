const path = require('path');

const getRules = (config) => {
  config.module.rules.push(
    {
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: path.resolve(__dirname, '../src/components'),
      loader: require.resolve('babel-loader'),
      options: {
        customize: require.resolve(
          'babel-preset-react-app/webpack-overrides'
        ),

        plugins: [
          [
            require.resolve('babel-plugin-named-asset-import'),
            {
              loaderMap: {
                svg: {
                  ReactComponent:
                    '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                },
              },
            },
          ],
          // 动态引入antd, jest测试也行
          [
            'import',
            {
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: 'css'
            }
          ],
        ],
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true,
        // See #6846 for context on why cacheCompression is disabled
        cacheCompression: false,
        compact: config.mode === 'production',
      },
    }
  );

  return config.module.rules;
};

module.exports = {
  stories: ['./stories/*.js'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: getRules(config),
      }
    };
  },
  babel: {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ]
  }
};
