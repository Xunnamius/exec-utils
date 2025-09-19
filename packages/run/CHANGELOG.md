# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/run[@2.0.0][3] (2025-09-01)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### 🪄 Fixes

- **packages/run:** vendor strip-final-newline and remove dependency ([0beb139][4])

### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([b3ce58d][5])
- **deps:** bump core-js from 3.41.0 to 3.45.1 ([d6b717b][6])
- **deps:** bump execa from 9.5.2 to 9.6.0 ([c92fa55][7])
- **deps:** bump rejoinder from 1.2.5 to 2.1.0 ([1a997c0][8])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([471a944][9])
- **packages/run:** update engines ([7edb489][10])

<br />

### 🏗️ Patch @-xun/run[@2.0.1][11] (2025-09-19)

#### 🪄 Fixes

- **packages/run:** update intellisense hints to accurately reflect override settings ([6a2b72a][12])

#### ⚙️ Build System

- **deps:** bump type-fest from 4.41.0 to 5.0.1 ([db45d6f][13])

<br />

## @-xun/run[@1.1.0][14] (2025-03-06)

### ✨ Features

- **packages/run:** add `elideNodeDebuggerStringsFromStderr` option ([596a4ca][15])

### 🪄 Fixes

- **packages/run:** improve `runnerFactory` intellisense ([dd1e2c7][16])

### ⚙️ Build System

- **deps:** bump rejoinder from 1.2.4 to 1.2.5 ([e950bdc][17])
- **deps:** bump type-fest from 4.34.1 to 4.37.0 ([129df48][18])

<br />

## @-xun/run[@1.0.0][19] (2025-02-16)

### ✨ Features

- **packages/run:** greatly improve exported types and debug output ([6bc3c2f][20])

<br />

### 🏗️ Patch @-xun/run[@1.0.3][21] (2025-02-22)

#### 🪄 Fixes

- **packages/run:** ensure `runWithInheritedIo` inherits all io file descriptors ([3ca5d5a][22])

<br />

### 🏗️ Patch @-xun/run[@1.0.2][23] (2025-02-18)

#### 🪄 Fixes

- **packages/run:** account for generic parameters; simplify type logic ([0673591][24])

<br />

### 🏗️ Patch @-xun/run[@1.0.1][25] (2025-02-17)

#### 🪄 Fixes

- Improve types and intellisense, ensure functionality matches documentation ([99f80c9][26])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/exec-utils/compare/@-xun/run@1.1.0...@-xun/run@2.0.0
[4]: https://github.com/Xunnamius/exec-utils/commit/0beb13984ad5fb4d85e1c2f2529a27b8ce2033b6
[5]: https://github.com/Xunnamius/exec-utils/commit/b3ce58dc2582ab5114ceb9ab8c4f989057040294
[6]: https://github.com/Xunnamius/exec-utils/commit/d6b717b3a126a51f09453ddf8c1eb8d848aacd63
[7]: https://github.com/Xunnamius/exec-utils/commit/c92fa555f2a1fdc28d0e1281a32e2e42b9df705e
[8]: https://github.com/Xunnamius/exec-utils/commit/1a997c03f4233623640aa8fbb35f9d5ecab8ebea
[9]: https://github.com/Xunnamius/exec-utils/commit/471a944a81be2024bff2b65ad52e8ae81d60e12f
[10]: https://github.com/Xunnamius/exec-utils/commit/7edb489f9139da5039c24dba1bb74df108adec2b
[11]: https://github.com/Xunnamius/exec-utils/compare/@-xun/run@2.0.0...@-xun/run@2.0.1
[12]: https://github.com/Xunnamius/exec-utils/commit/6a2b72a043a586c1914adf39bfc6fc50b89d2460
[13]: https://github.com/Xunnamius/exec-utils/commit/db45d6f4a17832363d5cbba7b52eb562a762d15b
[14]: https://github.com/Xunnamius/exec-utils/compare/@-xun/run@1.0.3...@-xun/run@1.1.0
[15]: https://github.com/Xunnamius/exec-utils/commit/596a4ca63a2b17b0a8e1d7467f14581cfd100d5d
[16]: https://github.com/Xunnamius/exec-utils/commit/dd1e2c7feb508649e5b5164f882176380432901f
[17]: https://github.com/Xunnamius/exec-utils/commit/e950bdc88246d4df68cb4e148b36441b3b936f55
[18]: https://github.com/Xunnamius/exec-utils/commit/129df486660f117039b2de4cd8ed17bd7f5a2f35
[19]: https://github.com/Xunnamius/exec-utils/compare/6bc3c2f64e318fb45aac40a5534d0b575a57f170...@-xun/run@1.0.0
[20]: https://github.com/Xunnamius/exec-utils/commit/6bc3c2f64e318fb45aac40a5534d0b575a57f170
[21]: https://github.com/Xunnamius/exec-utils/compare/@-xun/run@1.0.2...@-xun/run@1.0.3
[22]: https://github.com/Xunnamius/exec-utils/commit/3ca5d5a48edf233b2c3f06a5558c6dca408bd366
[23]: https://github.com/Xunnamius/exec-utils/compare/@-xun/run@1.0.1...@-xun/run@1.0.2
[24]: https://github.com/Xunnamius/exec-utils/commit/06735914ae278783fb4ee6a4cc1a3732191459ee
[25]: https://github.com/Xunnamius/exec-utils/compare/@-xun/run@1.0.0...@-xun/run@1.0.1
[26]: https://github.com/Xunnamius/exec-utils/commit/99f80c9423153055098aa3bf7b6f903f3ee1b65f
