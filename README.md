# TSConfig config

These are settings for TSConfig used by Pocket.

## What it does

This setups up your Typescript tslint settings based on best practices. Check the [tsconfig.json](https://github.com/Pocket/tsconfig/blob/main/tsconfig.json) file to see what is included. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npm i -D @pocket-tools/tsconfig # or yarn install --dev @pocket-tools/tsconfig
npx install-peerdeps --dev @pocket-tools/tsconfig
```

2. You will see several dependencies were installed. Now, create (or update) a `tsconfig.json` file with the following content:

```json
{
  "extends": "@pocket-tools/tsconfig'
}
```
