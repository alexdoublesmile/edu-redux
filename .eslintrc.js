module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
        "ecmaFeatures": {
            "jsx": true
          }
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        semi: [2, "always"],
        "space-before-function-paren": ["error", "never"],
        "multiline-ternary": ["off"],
        quotes: [
            "error",
            "double",
            { allowTemplateLiterals: true, avoidEscape: true }
        ]
    }
};
