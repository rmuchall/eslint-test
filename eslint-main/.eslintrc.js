module.exports = {
    root: true,
    env: {
        "node": true,
        "commonjs": true,
        "es2017": true
    },
    globals: {
        process: false
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json"
    },
    plugins: [
        "@typescript-eslint"
    ],
    ignorePatterns: [
        ".eslintrc.js"
    ],
    rules: {
        // Style
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
};
