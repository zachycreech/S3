module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'default-param-last': 'off',
    'import/extensions': [
      'warn',
      {
        constants: 'always',
        js: 'never',
        json: 'always',
        jsx: 'never',
        styles: 'always',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      0,
      {
        bundledDependencies: false,
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-cycle': ['error', {}],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['app/', './', '../'],
      },
    ],
    'import/prefer-default-export': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],
    'no-nested-ternary': 0,
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-shadow': 'off',
    'no-unsafe-finally': 0,
    'no-unsafe-optional-chaining': 0,
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        variables: false,
      },
    ],
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 0,
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
      },
    ],
    'react/no-unstable-nested-components': [
      1,
      {
        allowAsProps: true,
      },
    ],
    'react/require-default-props': 0,
    'sort-imports': [
      1,
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'no-restricted-syntax': 0,
  },
}
