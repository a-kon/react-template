module.exports = {
    plugins: ['css-modules'],
    rules: {
        'css-modules/no-unused-class': ['error', {camelCase: 'dashes-only'}],
        'css-modules/no-undef-class': ['error', {camelCase: 'dashes-only'}],
    },
};
