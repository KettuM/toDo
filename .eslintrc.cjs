/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'vue/script-indent': ["error", 2]
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                indent: "off"
            }
        }
    ]
}