module.exports = {
    env: {
        node: true,
        es2021: true,
        jest: true,
    },
    root: true,
    ignorePatterns: [
        'dist/',
    ],
    extends: [
        'eslint:recommended',
    ],
    overrides: [
        {
            files: [
                '**/*.ts',
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                ecmaFeatures: {
                    impliedStrict: true,
                },
                project: './tsconfig.json',
                tsconfigRootDir: process.env.TSCONFIG_ROOT_DIR || __dirname,
            },
            plugins: [
                '@typescript-eslint',
                'jest',
            ],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:jest/recommended',
            ],
        },
    ],
};
