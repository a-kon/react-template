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
    },
    extends: [
        'plugin:react-perf/all',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript', // https://github.com/benmosher/eslint-plugin-import
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'react-perf',
        'css-modules',
        'import',
    ],
    rules: {
        'no-extra-semi': 'error',
        'semi': ['error'],
        'arrow-body-style': ['error', 'as-needed'],
        'no-console': 'warn',
        'indent': ['error', 4],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
        'no-console': ['error', { allow: ['error'] }],
        'no-tabs': 'error',
        'quote-props': [2, 'consistent-as-needed', { keywords: false }],
        'key-spacing': [
            2,
            { mode: 'strict', beforeColon: false, afterColon: true },
        ],
        'id-length': ['error', { min: 2, properties: 'never' }],
        'max-len': ['error', { code: 130 }],
        'max-params': ['error', 5],
        'max-nested-callbacks': ['error', 5],
        'max-depth': ['error', 5],

        // TODO: Enable it ASAP
        // https://github.com/typescript-eslint/typescript-eslint/issues/2502#issuecomment-689595020
        'no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: false },
        ],
        'no-use-before-define': [0],
        '@typescript-eslint/no-use-before-define': [1],

        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    // for .reduce only
                    'acc',
                    'arr',
                    'obj',
                    'result',
                ],
            },
        ],
        'consistent-return': 'warn',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
        ],

        // react
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/jsx-key': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-perf/jsx-no-new-object-as-prop': 'warn',
        'react-perf/jsx-no-new-array-as-prop': 'warn',
        'react-perf/jsx-no-new-function-as-prop': 'warn',
        'react-perf/jsx-no-jsx-as-prop': 'warn',

        // css-modules
        'css-modules/no-unused-class': [2, { camelCase: 'dashes-only' }],
        'css-modules/no-undef-class': [2, { camelCase: 'dashes-only' }],

        // imports
        // 'import/no-internal-modules': 2, // think about it
        'import/no-dynamic-require': 2,
        'import/no-webpack-loader-syntax': 2,
        'import/no-self-import': 2,
        'import/no-cycle': 2,
        'import/no-useless-path-segments': 2,
        'import/export': 2,
        'import/no-deprecated': 2,
        'import/no-extraneous-dependencies': 2,
        'import/no-mutable-exports': 2,
        'import/no-commonjs': 2,
        'import/first': 2,
        'import/no-duplicates': 2,
        'import/extensions': [
            2,
            {
                js: 'never',
                json: 'always',
                png: 'always',
                svg: 'always',
                jpeg: 'always',
                jpg: 'always',
                css: 'always',
            },
        ],
        'import/order': [
            1,
            {
                'groups': [
                    ['builtin', 'external'],
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                ],
                'pathGroups': [
                    {
                        pattern: './assets/*',
                        group: 'sibling',
                        position: 'after',
                    },
                    {
                        pattern: './*.module.css',
                        group: 'index',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
    },
    settings: {
        // imports
        'import/extensions': ['.ts', '.tsx', '.d.ts'],
        'import/external-module-folders': [
            'node_modules',
            'node_modules/@types',
        ],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
            },
        },
    ],
};
