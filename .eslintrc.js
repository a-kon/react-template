/* eslint-disable import/no-commonjs */
module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            restParams: true,
            legacyDecorators: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: ['./tsconfig.eslint.json'], // Specify it only for TypeScript files
    },
    extends: [
        'plugin:react-perf/all',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript', // https://github.com/benmosher/eslint-plugin-import

        './_internal/eslint/base.js',
        './_internal/eslint/css.js',
        './_internal/eslint/hooks.js',
        './_internal/eslint/import.js',
        './_internal/eslint/perf.js',
        './_internal/eslint/react.js',
        './_internal/eslint/typescript.js',
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'react-perf',
        'css-modules',
        'import',
    ],
    settings: {
        react: {version: 'detect'},
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: {
                '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            },
        },
    ],
};
