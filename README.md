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


# TODO
- Refatorar o <PokemonCard>, resultado do map pra exibir tanto na pagina inicial quanto nos favoritos, sem repetir codigo (X)
- Consertar o css do card fazendo com que o 'a' com o nome do pokemon não fique fora do card (ajustar height do pokemonCard) (X)
