# TSConfig config

These are settings for TSConfig used by Pocket.

## What it does

This setups up your Typescript tslint settings based on best practices. Check the [tsconfig.json](https://github.com/Pocket/tsconfig/blob/main/tsconfig.json) file to see what is included. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npm i -D @pocket-tools/tsconfig # or yarn install --dev @pocket-tools/tsconfig
```

2. You will see several dependencies were installed. Now, create (or update) a `tsconfig.json` file with the following content:

If you don't already have one the NPM post install script will create it for you.

```json
{
  "extends": "@pocket-tools/tsconfig",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "exclude": [
    "node_modules/",
    "dist/"
  ],
  "include": [
    "src/**/*.ts",
    "src/config"
  ]
}
```

Concepts are used from <https://github.com/Chatie/tsconfig>
