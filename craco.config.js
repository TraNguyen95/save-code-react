/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#13C2C2',
                            '@link-color': '#597EF7',
                            '@border-radius-base': '5px',
                            '@border-color-base': '#d9d9d9',
                            '@font-size-base': '14px', // major text font size
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: './tsconfig.path.json',
            },
        },
        {
            plugin: sassResourcesLoader,
            options: {
                resources: './src/styles/base/_mixin.scss',
            },
        },
    ],
};
