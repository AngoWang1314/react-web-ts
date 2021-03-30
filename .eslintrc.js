module.exports = {
    "extends": [
        "react-app",
        "react-app/jest"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "plugins": [
        "react-hooks"
    ],
    "rules": {
        "quotes": [
            2,
            "single"
        ],
        "comma-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
        ],
        "semi": [
            2,
            "always"
        ],
        "eqeqeq": [
            2,
            "allow-null"
        ],
        "no-spaced-func": 2,
        "brace-style": [
            2,
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "space-before-blocks": [
            2,
            "always"
        ],
        "default-case": 2,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
