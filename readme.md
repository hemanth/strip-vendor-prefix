# strip-vendor-prefix [![Build Status](https://travis-ci.org/hemanth/strip-vendor-prefix.svg?branch=master)](https://travis-ci.org/hemanth/strip-vendor-prefix)

> Strips standard CSS vendor prefix.


## Install

```
$ npm install --save strip-vendor-prefix
```


## Usage

```js
const stripVendorPrefix = require('strip-vendor-prefix');

stripVendorPrefix('-webkit-flex-basis');
//=> flex-basis


stripVendorPrefix('-xyz-flex-basis');
//=> -xyz-flex-basis
```

## License

MIT © [](https://h3manth.com)
