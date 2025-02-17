// * These tests ensure the exported types under test function as expected.

import { describe, expect, it } from 'tstyche';

import {
  run,
  runnerFactory,
  runNoRejectOnBadExit,
  runWithInheritedIo
} from 'universe+run:index.ts';

describe('::run', () => {
  it('should be rejectable', async () => {
    const params: NonNullable<Parameters<typeof run>[2]> = {};
    expect(params).type.toBeAssignableWith<{ reject: true }>();
    expect(params).type.toBeAssignableWith<{ reject: false }>();
  });

  it('correctly types various option combinations of: lines, all, coerceOutputToString', async () => {
    expect((await run('file', ['args'])).stdout).type.toBe<string>();
    expect((await run('file', ['args'])).stderr).type.toBe<string>();
    expect((await run('file', ['args'])).all).type.toBe<undefined>();
    expect((await run('file', ['args'], { all: false })).all).type.toBe<undefined>();
    expect((await run('file', ['args'], { all: true })).all).type.toBe<string>();

    expect((await run('file', ['args'], {})).stdout).type.toBe<string>();
    expect((await run('file', ['args'], {})).stderr).type.toBe<string>();
    expect((await run('file', ['args'], {})).all).type.toBe<undefined>();

    expect(
      (await run('file', ['args'], { coerceOutputToString: true })).stdout
    ).type.toBe<string>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: true })).stderr
    ).type.toBe<string>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: true })).all
    ).type.toBe<undefined>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: true, all: false })).all
    ).type.toBe<undefined>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: true, all: true })).all
    ).type.toBe<string>();

    expect(
      (await run('file', ['args'], { coerceOutputToString: false })).stdout
    ).type.toBeAssignableWith<string | string[]>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: false })).stderr
    ).type.toBeAssignableWith<string | string[]>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: false })).all
    ).type.toBe<undefined>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: false, all: false })).all
    ).type.toBe<undefined>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: false, all: true })).all
    ).type.toBeAssignableWith<string | string[]>();

    expect((await run('file', ['args'], { lines: false })).stdout).type.toBe<string>();
    expect((await run('file', ['args'], { lines: false })).stderr).type.toBe<string>();
    expect((await run('file', ['args'], { lines: false })).all).type.toBe<undefined>();
    expect(
      (await run('file', ['args'], { lines: false, all: false })).all
    ).type.toBe<undefined>();
    expect(
      (await run('file', ['args'], { lines: false, all: true })).all
    ).type.toBe<string>();

    expect((await run('file', ['args'], { lines: true })).stdout).type.toBe<string[]>();
    expect((await run('file', ['args'], { lines: true })).stderr).type.toBe<string[]>();
    expect((await run('file', ['args'], { lines: true })).all).type.toBe<undefined>();
    expect(
      (await run('file', ['args'], { lines: true, all: false })).all
    ).type.toBe<undefined>();
    expect((await run('file', ['args'], { lines: true, all: true })).all).type.toBe<
      string[]
    >();

    expect(
      (await run('file', ['args'], { coerceOutputToString: true, lines: true })).stdout
    ).type.toBe<string[]>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: true, lines: true })).stderr
    ).type.toBe<string[]>();
    expect(
      (await run('file', ['args'], { coerceOutputToString: true, lines: true })).all
    ).type.toBe<undefined>();
    expect(
      (
        await run('file', ['args'], {
          coerceOutputToString: true,
          lines: true,
          all: false
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await run('file', ['args'], {
          coerceOutputToString: true,
          lines: true,
          all: true
        })
      ).all
    ).type.toBe<string[]>();
  });
});

describe('::runWithInheritedIo', () => {
  it('should be rejectable', async () => {
    const params: NonNullable<Parameters<typeof runWithInheritedIo>[2]> = {};
    expect(params).type.toBeAssignableWith<{ reject: true }>();
    expect(params).type.toBeAssignableWith<{ reject: false }>();
  });

  it('disallows meaningless options', async () => {
    const params: NonNullable<Parameters<typeof runWithInheritedIo>[2]> = {};
    expect(params).type.not.toHaveProperty('all');
    expect(params).type.not.toHaveProperty('stdout');
    expect(params).type.not.toHaveProperty('stderr');
    expect(params).type.not.toHaveProperty('stdio');
    expect(params).type.not.toHaveProperty('lines');
    expect(params).type.not.toHaveProperty('coerceOutputToString');
  });

  it('should omit properties that are never available from return type', async () => {
    expect(await runWithInheritedIo('file', ['args'])).type.not.toHaveProperty('all');
    expect(await runWithInheritedIo('file', ['args'])).type.not.toHaveProperty('stdout');
    expect(await runWithInheritedIo('file', ['args'])).type.not.toHaveProperty('stderr');
    expect(await runWithInheritedIo('file', ['args'])).type.not.toHaveProperty('stdio');
  });
});

describe('::runNoRejectOnBadExit', () => {
  it('should not be rejectable', async () => {
    const params: NonNullable<Parameters<typeof runNoRejectOnBadExit>[2]> = {};
    expect(params).type.not.toBeAssignableWith<{ reject: true }>();
    expect(params).type.not.toBeAssignableWith<{ reject: false }>();
  });

  it('correctly types various option combinations of: lines, all, coerceOutputToString', async () => {
    expect((await runNoRejectOnBadExit('file', ['args'])).stdout).type.toBe<string>();
    expect((await runNoRejectOnBadExit('file', ['args'])).stderr).type.toBe<string>();
    expect((await runNoRejectOnBadExit('file', ['args'])).all).type.toBe<undefined>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { all: false })).all
    ).type.toBe<undefined>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { all: true })).all
    ).type.toBe<string>();

    expect(
      (await runNoRejectOnBadExit('file', ['args'], {})).stdout
    ).type.toBe<string>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], {})).stderr
    ).type.toBe<string>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], {})).all
    ).type.toBe<undefined>();

    expect(
      (await runNoRejectOnBadExit('file', ['args'], { coerceOutputToString: true }))
        .stdout
    ).type.toBe<string>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { coerceOutputToString: true }))
        .stderr
    ).type.toBe<string>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { coerceOutputToString: true })).all
    ).type.toBe<undefined>();
    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: true,
          all: false
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: true,
          all: true
        })
      ).all
    ).type.toBe<string>();

    expect(
      (await runNoRejectOnBadExit('file', ['args'], { coerceOutputToString: false }))
        .stdout
    ).type.toBeAssignableWith<string | string[]>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { coerceOutputToString: false }))
        .stderr
    ).type.toBeAssignableWith<string | string[]>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { coerceOutputToString: false })).all
    ).type.toBe<undefined>();
    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: false,
          all: false
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: false,
          all: true
        })
      ).all
    ).type.toBeAssignableWith<string | string[]>();

    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: false })).stdout
    ).type.toBe<string>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: false })).stderr
    ).type.toBe<string>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: false })).all
    ).type.toBe<undefined>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: false, all: false })).all
    ).type.toBe<undefined>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: false, all: true })).all
    ).type.toBe<string>();

    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: true })).stdout
    ).type.toBe<string[]>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: true })).stderr
    ).type.toBe<string[]>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: true })).all
    ).type.toBe<undefined>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: true, all: false })).all
    ).type.toBe<undefined>();
    expect(
      (await runNoRejectOnBadExit('file', ['args'], { lines: true, all: true })).all
    ).type.toBe<string[]>();

    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: true,
          lines: true
        })
      ).stdout
    ).type.toBe<string[]>();
    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: true,
          lines: true
        })
      ).stderr
    ).type.toBe<string[]>();
    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: true,
          lines: true
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: true,
          lines: true,
          all: false
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runNoRejectOnBadExit('file', ['args'], {
          coerceOutputToString: true,
          lines: true,
          all: true
        })
      ).all
    ).type.toBe<string[]>();
  });
});

describe('::runnerFactory', () => {
  it('correctly types various option combinations of: lines, all, coerceOutputToString', async () => {
    expect((await runnerFactory('file', ['args'])()).stdout).type.toBe<string>();
    expect((await runnerFactory('file', ['args'])()).stderr).type.toBe<string>();
    expect((await runnerFactory('file', ['args'])()).all).type.toBe<undefined>();
    expect(
      (await runnerFactory('file', ['args'], { all: false })()).all
    ).type.toBe<undefined>();
    expect(
      (await runnerFactory('file', ['args'], { all: true })()).all
    ).type.toBe<string>();

    expect((await runnerFactory('file', ['args'], {})()).stdout).type.toBe<string>();
    expect((await runnerFactory('file', ['args'], {})()).stderr).type.toBe<string>();
    expect((await runnerFactory('file', ['args'], {})()).all).type.toBe<undefined>();

    expect(
      (await runnerFactory('file', ['args'], { coerceOutputToString: true })()).stdout
    ).type.toBe<string>();
    expect(
      (await runnerFactory('file', ['args'], { coerceOutputToString: true })()).stderr
    ).type.toBe<string>();
    expect(
      (await runnerFactory('file', ['args'], { coerceOutputToString: true })()).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          all: false
        })()
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          all: true
        })()
      ).all
    ).type.toBe<string>();

    expect(
      (await runnerFactory('file', ['args'], { coerceOutputToString: false })()).stdout
    ).type.toBeAssignableWith<string | string[]>();
    expect(
      (await runnerFactory('file', ['args'], { coerceOutputToString: false })()).stderr
    ).type.toBeAssignableWith<string | string[]>();
    expect(
      (await runnerFactory('file', ['args'], { coerceOutputToString: false })()).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: false,
          all: false
        })()
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: false,
          all: true
        })()
      ).all
    ).type.toBeAssignableWith<string | string[]>();

    expect(
      (await runnerFactory('file', ['args'], { lines: false })()).stdout
    ).type.toBe<string>();
    expect(
      (await runnerFactory('file', ['args'], { lines: false })()).stderr
    ).type.toBe<string>();
    expect(
      (await runnerFactory('file', ['args'], { lines: false })()).all
    ).type.toBe<undefined>();
    expect(
      (await runnerFactory('file', ['args'], { lines: false, all: false })()).all
    ).type.toBe<undefined>();
    expect(
      (await runnerFactory('file', ['args'], { lines: false, all: true })()).all
    ).type.toBe<string>();

    expect((await runnerFactory('file', ['args'], { lines: true })()).stdout).type.toBe<
      string[]
    >();
    expect((await runnerFactory('file', ['args'], { lines: true })()).stderr).type.toBe<
      string[]
    >();
    expect(
      (await runnerFactory('file', ['args'], { lines: true })()).all
    ).type.toBe<undefined>();
    expect(
      (await runnerFactory('file', ['args'], { lines: true, all: false })()).all
    ).type.toBe<undefined>();
    expect(
      (await runnerFactory('file', ['args'], { lines: true, all: true })()).all
    ).type.toBe<string[]>();

    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          lines: true
        })()
      ).stdout
    ).type.toBe<string[]>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          lines: true
        })()
      ).stderr
    ).type.toBe<string[]>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          lines: true
        })()
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          lines: true,
          all: false
        })()
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          lines: true,
          all: true
        })()
      ).all
    ).type.toBe<string[]>();
  });

  it('allows factoried function to overwrite initial factory options', async () => {
    expect(
      (await runnerFactory('file', ['args'])([], { coerceOutputToString: false })).stdout
    ).type.toBeAssignableWith<string | string[]>();
    expect(
      (await runnerFactory('file', ['args'])([], { coerceOutputToString: false })).stderr
    ).type.toBeAssignableWith<string | string[]>();
    expect(
      (await runnerFactory('file', ['args'])([], { coerceOutputToString: false })).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], { all: false })([], {
          coerceOutputToString: false
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], { all: true })([], {
          coerceOutputToString: false
        })
      ).all
    ).type.toBeAssignableWith<string | string[]>();

    expect(
      (await runnerFactory('file', ['args'], { lines: false })([], { lines: true }))
        .stdout
    ).type.toBe<string[]>();
    expect(
      (await runnerFactory('file', ['args'], { lines: false })([], { lines: true }))
        .stderr
    ).type.toBe<string[]>();
    expect(
      (await runnerFactory('file', ['args'], { lines: false })([], { lines: true })).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], { lines: false, all: false })([], {
          lines: true
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], { lines: false, all: true })([], {
          lines: true
        })
      ).all
    ).type.toBe<string[]>();

    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true
        })([], {
          lines: true
        })
      ).stdout
    ).type.toBe<string[]>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true
        })([], {
          lines: true
        })
      ).stderr
    ).type.toBe<string[]>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true
        })([], {
          lines: true
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          all: false
        })([], {
          lines: true
        })
      ).all
    ).type.toBe<undefined>();
    expect(
      (
        await runnerFactory('file', ['args'], {
          coerceOutputToString: true,
          all: true
        })([], {
          lines: true
        })
      ).all
    ).type.toBe<string[]>();
  });
});
