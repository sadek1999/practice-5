

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals'

export default tseslint.config(
    {
        ignores: ["**/node_modules/", ".dist/"],
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    },{
        rules: {
          
            "prefer-const": "error",
            "no-unused-ver":"error",
            "un-unused-expressions":"error",
            "no-console":"warn",
            "no-undef":"error"

        }
    },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);