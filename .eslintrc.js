module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/base'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
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
    'prettier/prettier': [
        'error',
        {
          'endOfLine': 'auto',
        }
    ],
    'plugins': [
        'vue',
        '@typescript-eslint',
        'vue3-jsx'
    ],
    'rules': {
        'vue/attributes-order': 1,
        'quotes': [1, 'single'],
        'semi': [1, 'never'],
        'vue3-jsx/no-getCurrentInstance': 2,
        'vue3-jsx/prefer-effect': 2,
        'vue3-jsx/no-this-in-setup': 2,
        'vue3-jsx/prefer-render-in-setup': 2,
        'vue3-jsx/component-name': 2,
        'vue3-jsx/no-reactivity-in-render': 2,
        'vue3-jsx/no-fragment-in-return-root': 2,
        'key-spacing': ["error", { "beforeColon": true }]
    }
}