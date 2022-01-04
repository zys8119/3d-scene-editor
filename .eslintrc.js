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
        'indent': ['error', 4],
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
        'no-undef': 0
    }
}