import react from 'eslint-plugin-react'
import jest from 'eslint-plugin-jest'
import cypress from 'eslint-plugin-cypress'

export default [
  {
    files: ['**/*.js'],
    ignores: ['dist/*', 'cypress/*', 'webpack.config.js', 'eslint.config.js', '.eslintrc.*', '.babelrc', 'node_modules/*', 'cypress.config.js'],
    plugins: {
      react: react,
      jest: jest,
      cypress: cypress
    },
    "rules": {
      "indent": [
        "error",
          2
        ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "never"
      ],
      "eqeqeq": "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": [
        "error", "always"
      ],
      "arrow-spacing": [
        "error", { "before": true, "after": true }
      ],
      "no-console": "error",
      "react/prop-types": 0
    }
  }
]