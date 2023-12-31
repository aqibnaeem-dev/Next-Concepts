module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: '6',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {},
}
