module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },

    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        // 0 is disabled, 1 is warned, 2 is allowed
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'object-curly-spacing': [0],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
        'import/no-unresolved': [0],
        'import/prefer-default-export': [0],
        'react/require-default-props': [0],
        'no-unused-vars': [0],
        'react/react-in-jsx-scope': [0],
        'react/jsx-props-no-spreading': [1],
        'react/function-component-definition': [0],
        'no-shadow': [0],
        'import/extensions': [0],
        'import/no-extraneous-dependencies': [1],
        'no-underscore-dangle': [0],
        'i18next/no-literal-string': ['error', {markupOnly: true}],
        semi: [0],
    },
    globals: {
        __IS_DEV__: true,
    },
};
