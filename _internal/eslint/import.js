module.exports = {
    plugins: ['import'],
    settings: {
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
    rules: {
        'import/no-dynamic-require': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-self-import': 'error',
        'import/no-cycle': 'error',
        'import/no-useless-path-segments': 'error',
        'import/export': 'error',
        'import/no-deprecated': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-commonjs': 'error',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/extensions': [
            'error',
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
            'warn',
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
};
