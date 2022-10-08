## vite-plugin-replace-module

Vite plugin for modifying imported modules.

### Installation

#### NPM

```bash
npm i -D vite-plugin-replace-module
```

#### YARN

```bash
yarn add -D vite-plugin-replace-module
```

### Usage

##### vite.config.js

```js
export default {
  plugins: [
    new VitePluginReplaceModule({
      rules: [
        {
          originModule: "npm-a",
          replaceModule: "npm-b",
        },
        {
          originModule: "npm-b",
          replaceModule: "npm-c",
          context: /node_modules\/npm-a/,
        },
      ],
    }),
  ],
}
```

### Options

#### `rules[].context`

Type: `RegExp | (context: String) => booleans`

`context` is RegExp or function, which used to determinate which modules should be modified.

`RegExp` will be applied to full module path (based on `userRequest`).

#### `rule[].originModule`

Type: `String`

The module before the replacement.

#### `rule[]replaceModule`

Type: `String`

The module after the replacement.
