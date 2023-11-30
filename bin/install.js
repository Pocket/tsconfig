#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import { packageUp } from 'package-up';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TSCONFIG_JSON_CONTENT = `{
  "extends": "@pocket-tools/tsconfig",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
  },
  "exclude": [
    "node_modules/",
    "dist/"
  ],
  "include": [
    "src/**/*.ts", 
    "src/config"
  ],
}
`;

async function main() {
  const cwd = path.join(__dirname, '..', '..');
  const pkg = await packageUp({ cwd });
  if (!pkg) {
    return 0;
  }
  const pkgDir = path.dirname(pkg);

  const tsconfigFile = path.join(pkgDir, 'tsconfig.json');

  if (!fs.existsSync(tsconfigFile)) {
    console.info(`@pocket-tools/tsconfig: auto generated ${tsconfigFile}`);
    fs.writeFileSync(tsconfigFile, TSCONFIG_JSON_CONTENT);
  }
  return 0;
}

main()
  .then(process.exit)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
