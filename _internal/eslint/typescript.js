module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        // type linting
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'off',
    },
    overrides: [
        {
            files: ['*.spec.ts', '*.stories.tsx'],
            rules: {},
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/no-unsafe-call': 0,
                '@typescript-eslint/no-unsafe-assignment': 0,
                '@typescript-eslint/no-unsafe-member-access': 0,
                '@typescript-eslint/no-unsafe-return': 0,
                '@typescript-eslint/no-implicit-any-catch': 0,
            },
        },
    ],
};
