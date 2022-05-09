module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/base'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly'
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'vue',
        '@typescript-eslint',
        'vue3-jsx'
    ],
    rules: {
        'vue/attributes-order': 1,
        'quotes': [1, 'single'],
        'semi': [1, 'never'],
        'vue/multi-word-component-names': 0,
        'keyword-spacing': ['error', { before: true, after: true }],
        'arrow-spacing': ['error', { before: true, after: true }],
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': 'error',
        'no-unused-vars': 0,
        'space-infix-ops': 2,
        'no-var': 2,
        'prefer-const': 2,
        'object-shorthand': 2,
        'no-trailing-spaces': 2,
        'no-undef': 0,
        'space-unary-ops': 1,
        'no-irregular-whitespace': 1,
        'no-multi-spaces': 1,
        'comma-spacing': [1, { 'before': false, 'after': true }],
        'no-whitespace-before-property': 1,
        'vue/no-lone-template': 1,
        'vue/this-in-template': 1,
        'vue/block-tag-newline': 1,
        'vue/no-child-content': 1,
        'vue/no-multiple-objects-in-class': 1,
        'vue/padding-line-between-blocks': 1,
        'vue/array-bracket-spacing': 2,
        'vue/arrow-spacing': ['error', { before: true, after: true }],
        'vue/brace-style': 2,
        'vue/comma-spacing': 2,
        'vue/no-extra-parens': 2,
        'vue/template-curly-spacing': 2,
        'vue/html-quotes': ['error', 'double', { 'avoidEscape': false }],
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }],
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 6
            },
            'multiline': {
                'max': 1
            }
        }],
        'vue/first-attribute-linebreak': ['error', {
            'singleline': 'ignore',
            'multiline': 'below'
        }],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
        }],
        'vue/html-self-closing': 2,
        'vue/no-multi-spaces': 2
    }
}