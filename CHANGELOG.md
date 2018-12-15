# changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Change categories are:

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for once-stable features removed in upcoming releases.
* `Removed` for deprecated features removed in this release.
* `Fixed` for any bug fixes.
* `Security` to invite users to upgrade in case of vulnerabilities.

## [1.0.3] - 2018-12-15
### Security
- Previously tests were run with `tape-run`, which used `electron` and
  introduced quite a few security issues. With some help from @conduitry
  and the Svelte community, tests are now run using `jsdom`.

## [1.0.2] - 2018-06-01
### Added
- The readme now points to an additional REPL demo.

## [1.0.1] - 2018-06-01
### Added
- The readme now points to a demo of clicking inside and outside the panel.

## [1.0.0] - 2018-06-01
### Changed
- Updated to support Svelte 2! 🙌 This is a *breaking* change.

## [0.2.1] - 2018-03-08
### Added
- This changelog file!
### Fixed
- Forgot to build before publishing 😱

## [0.2.0] - 2018-03-08
### Added
- The sweet new `svelte` tag to the package.json file.

[1.0.2]: https://github.com/saibotsivad/svelte-panel-click/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/saibotsivad/svelte-panel-click/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/saibotsivad/svelte-panel-click/compare/v0.2.1...v1.0.0
[0.2.1]: https://github.com/saibotsivad/svelte-panel-click/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/saibotsivad/svelte-panel-click/compare/v0.1.8...v0.2.0
