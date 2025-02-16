// @ts-check
'use strict';

const { deepMergeConfig } = require('@-xun/symbiote/assets');

const {
  assertEnvironment,
  moduleExport
} = require('@-xun/symbiote/assets/babel.config.cjs');

const { createDebugLogger } = require('rejoinder');

const debug = createDebugLogger({ namespace: 'symbiote:config:babel' });

module.exports = deepMergeConfig(
  moduleExport({
    derivedAliases: getBabelAliases(),
    ...assertEnvironment({ projectRoot: __dirname })
  }),
  {
    // Any custom configs here will be deep merged with moduleExport's result
  }
);

debug('exported config: %O', module.exports);

function getBabelAliases() {
  // ! These aliases are auto-generated by symbiote. Instead of modifying them
  // ! directly, consider regenerating aliases across the entire project with:
  // ! `npx symbiote project renovate --regenerate-assets --assets-preset ...`
  return {
    '^multiverse\\+run:(.+)$': './packages/run/src/$1',
    '^multiverse\\+run$': './packages/run/src/index.js',
    '^rootverse\\+run:(.+)$': './packages/run/$1',
    '^rootverse:(.+)$': './$1',
    '^universe\\+run:(.+)$': './packages/run/src/$1',
    '^universe\\+run$': './packages/run/src/index.js',
    '^universe:(.+)$': './src/$1',
    '^universe$': './src/index.js',
    '^testverse\\+run:(.+)$': './packages/run/test/$1',
    '^testverse:(.+)$': './test/$1',
    '^typeverse:(.+)$': './types/$1'
  };
}
