// * These tests ensure the exported interfaces under test function as expected.

import {
  run,
  runnerFactory,
  runNoRejectOnBadExit,
  runWithInheritedIo
} from 'universe+run:index.ts';

const testArgs = ['-p', String.raw`process.env.XUNIT_TESTX.replaceAll("\\n", "\n")`];
const testOptions = { env: { XUNIT_TESTX: String.raw`a\nb\nc\n1\n2\n3` } };
const testOutput = 'a\nb\nc\n1\n2\n3';

describe('::run', () => {
  it('executes a file with the given args and options with output coerced by default', async () => {
    expect.hasAssertions();

    {
      const result = await run('true');
      expect(result.exitCode).toBe(0);
    }

    {
      await expect(run('false')).rejects.toBeDefined();
      await expect(run('false', [], { reject: true })).rejects.toBeDefined();
      await expect(run('false', [], { reject: false })).resolves.toMatchObject({
        message: expect.stringContaining('failed with exit code 1')
      });
    }

    {
      const result = await run('node', [
        '-p',
        String.raw`"a\\nb\\nc\\n1\\n2\\n3".replaceAll("\\n", "\n")`
      ]);

      expect(result.stdout).toBe(testOutput);
    }

    {
      const result = await run('node', testArgs, testOptions);
      expect(result.stdout).toBe(testOutput);
    }

    {
      const result = await run('node', testArgs, {
        ...testOptions,
        coerceOutputToString: true
      });
      expect(result.stdout).toBe(testOutput);
    }

    {
      const result = await run('node', testArgs, { ...testOptions, lines: true });
      expect(result.stdout).toStrictEqual(testOutput.split('\n'));
    }

    {
      const result = await run('node', testArgs, { ...testOptions, all: true });
      expect(result.all).toBe(testOutput);
    }

    {
      const result = await run('node', testArgs, {
        ...testOptions,
        all: true,
        lines: true
      });
      expect(result.all).toStrictEqual(testOutput.split('\n'));
    }
  });
});

describe('::runWithInheritedIo', () => {
  it('executes a file with the given args and options with no output', async () => {
    expect.hasAssertions();

    const result = await runWithInheritedIo('true');
    // @ts-expect-error: testing an invariant
    expect(result.stdout).toBeUndefined();
    expect(result.exitCode).toBe(0);
  });
});

describe('::runNoRejectOnBadExit', () => {
  it('executes a file with the given args but does not reject on bad exit', async () => {
    expect.hasAssertions();

    const result = await runNoRejectOnBadExit('true');
    expect(result.exitCode).toBe(0);

    await expect(runNoRejectOnBadExit('false')).resolves.toMatchObject({
      message: expect.stringContaining('failed with exit code 1')
    });
  });

  it('ignores erroneous "reject" option', async () => {
    expect.hasAssertions();

    await expect(
      // @ts-expect-error: erroneous option
      runNoRejectOnBadExit('false', [], { reject: true })
    ).resolves.toMatchObject({
      message: expect.stringContaining('failed with exit code 1')
    });

    await expect(
      // @ts-expect-error: erroneous option
      runNoRejectOnBadExit('false', [], { reject: false })
    ).resolves.toMatchObject({
      message: expect.stringContaining('failed with exit code 1')
    });
  });
});

describe('::runnerFactory', () => {
  it('returns a factoried function that executes wrt both factory and local arguments', async () => {
    expect.hasAssertions();

    const factoriedRun = runnerFactory('node', [testArgs[0]!], testOptions);

    {
      const result = await runnerFactory('true')();
      expect(result.exitCode).toBe(0);
    }

    {
      await expect(runnerFactory('false')()).rejects.toBeDefined();
      await expect(runnerFactory('false', [], { reject: true })()).rejects.toBeDefined();
      await expect(
        runnerFactory('false', [], { reject: false })()
      ).resolves.toMatchObject({
        message: expect.stringContaining('failed with exit code 1')
      });
    }

    {
      const result = await factoriedRun([
        String.raw`"a\\nb\\nc\\n1\\n2\\n3".replaceAll("\\n", "\n")`
      ]);

      expect(result.stdout).toBe(testOutput);
    }

    {
      const result = await factoriedRun([testArgs[1]!]);
      expect(result.stdout).toBe(testOutput);
    }

    {
      const result = await factoriedRun([testArgs[1]!], {
        ...testOptions,
        coerceOutputToString: true
      });
      expect(result.stdout).toBe(testOutput);
    }

    {
      const result = await factoriedRun([testArgs[1]!], { ...testOptions, lines: true });
      expect(result.stdout).toStrictEqual(testOutput.split('\n'));
    }

    {
      const result = await factoriedRun([testArgs[1]!], { ...testOptions, all: true });
      expect(result.all).toBe(testOutput);
    }

    {
      const result = await factoriedRun([testArgs[1]!], {
        ...testOptions,
        all: true,
        lines: true
      });
      expect(result.all).toStrictEqual(testOutput.split('\n'));
    }
  });
});
