module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "airbnb",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react-hooks",
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "import/prefer-default-export": "off",
      "camelcase": "off",
      "@typescript-eslint/ban-types": "off",
      "no-use-before-define": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
     ]
    },"settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
};
