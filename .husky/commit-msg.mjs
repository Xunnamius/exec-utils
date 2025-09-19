import { createGenericLogger } from 'rejoinder';

import { runWithInheritedIo } from '@-xun/run';

const log = createGenericLogger({ namespace: 'husky-hook:commit-msg' });

if (process.env.GIT_REFLOG_ACTION?.startsWith('rebase')) {
  log.warn('skipped commit-msg hook due to rebase');
} else {
  const isInSimpleVerificationMode = !!process.env.GAC_VERIFY_SIMPLE;

  try {
    await runWithInheritedIo('npx', ['commitlint', '-e'], {
      env: { NODE_NO_WARNINGS: '1' }
    });

    if (!isInSimpleVerificationMode) {
      await runWithInheritedIo('npm', ['run', 'test:packages:all:unit']);
    }
  } catch {
    process.exitCode = 1;
  }

  // TODO: bring back spellchecker
}
