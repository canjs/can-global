# can-global

[![Greenkeeper badge](https://badges.greenkeeper.io/canjs/can-global.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/canjs/can-global.png?branch=master)](https://travis-ci.org/canjs/can-global)

Returns the global that this environment provides.

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-global';
```

### CommonJS use

Use `require` to load `can-global` and everything else
needed to create a template that uses `can-global`:

```js
var plugin = require("can-global");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-global/dist/global/can-global.js'></script>
```
