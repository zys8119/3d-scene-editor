module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
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
        'space-before-blocks': 'error'
    }
}