## Solving Error:
Warning: Prop `className` did not match. Server: "sc-gKsewC" Client: "sc-dlfnbm"

npm i babel-plugin-styled-components

create file .babelrc with:
{
  "env": {
    "development": {
      "presets": ["next/babel"],
      "plugins": [
        [
          "babel-plugin-styled-components",
          { "ssr": true, "displayName": true, "preprocess": false }
        ]
      ]
    },
    "production": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          { "ssr": true, "displayName": true, "preprocess": false }
        ]
      ],
      "presets": ["next/babel"]
    },
    "test": {
      "presets": ["next/babel"]
    }
  },
  "plugins": [
    [
      "babel-plugin-styled-components",
      { "ssr": true, "displayName": true, "preprocess": false }
    ]
  ]
}
