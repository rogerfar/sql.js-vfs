"use strict";

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        "airbnb-base"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    ignorePatterns: [
        "/dist/",
        "/examples/",
        "/node_modules/",
        "/out/",
        "/src/shell-post.js",
        "/src/shell-pre.js",
        "/test/",
        "!/.eslintrc.js"
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "script"
    },
    rules: {
        // reason - sqlite exposes functions with underscore-naming-convention
        camelcase: "off",
        // reason - They make it easier to add new elements to arrays
        // and parameters to functions, and make commit diffs clearer
        "comma-dangle": "off",
        // reason - string-notation needed to prevent closure-minifier
        // from mangling property-name
        "dot-notation": "off",
        // reason - enforce 4-space indent
        indent: ["error", 4, { SwitchCase: 1 }],
        // reason - enforce 85-column-width limit
        "max-len": ["error", { code: 85 }],
        // reason - src/api.js uses bitwise-operators
        "no-bitwise": "off",
        "no-cond-assign": ["error", "except-parens"],
        "no-param-reassign": "off",
        "no-throw-literal": "off",
        // reason - parserOptions is set to es5 language-syntax
        "no-var": "off",
        // reason - parserOptions is set to es5 language-syntax
        "object-shorthand": "off",
        // reason - parserOptions is set to es5 language-syntax
        "prefer-arrow-callback": "off",
        // reason - parserOptions is set to es5 language-syntax
        "prefer-destructuring": "off",
        // reason - parserOptions is set to es5 language-syntax
        "prefer-spread": "off",
        // reason - parserOptions is set to es5 language-syntax
        "prefer-template": "off",
        // reason - sql.js frequently use sql-query-strings containing
        // single-quotes
        quotes: ["error", "double"],
        // reason - allow top-level "use-strict" in commonjs-modules
        strict: ["error", "safe"],
        "vars-on-top": "off",
        // reason - fs-externs.js has multiple classes
        "max-classes-per-file": ["error", 3],
        // reason - allow class methods without the this in fs-externs.js
        "class-methods-use-this": "off"
    }
};
