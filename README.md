# zce-pages

[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> static web app workflow

## Installation

```shell
$ npm install zce-pages

# or yarn
$ yarn add zce-pages
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const zcePages = require('zce-pages')
const result = zcePages('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### zcePages(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; e <690305622@qq.com>



[travis-image]: https://img.shields.io/travis/dxxlx/zce-pages/master.svg
[travis-url]: https://travis-ci.org/dxxlx/zce-pages
[downloads-image]: https://img.shields.io/npm/dm/zce-pages.svg
[downloads-url]: https://npmjs.org/package/zce-pages
[version-image]: https://img.shields.io/npm/v/zce-pages.svg
[version-url]: https://npmjs.org/package/zce-pages
[license-image]: https://img.shields.io/github/license/dxxlx/zce-pages.svg
[license-url]: https://github.com/dxxlx/zce-pages/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/dxxlx/zce-pages.svg
[dependency-url]: https://david-dm.org/dxxlx/zce-pages
[devdependency-image]: https://img.shields.io/david/dev/dxxlx/zce-pages.svg
[devdependency-url]: https://david-dm.org/dxxlx/zce-pages?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
