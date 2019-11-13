var QUnit = require('steal-qunit');
var getGlobal = require('./can-global');
var isBrowserWindow = require('can-is-browser-window');

QUnit.module("can-global");

QUnit.test("basics", function(assert) {
	if(isBrowserWindow()) {
		assert.ok(getGlobal() === window);
	} else {
		assert.ok(getGlobal() === global);
	}
});

if(!isBrowserWindow()) {
	QUnit.module("in Node with fake window", {
		beforeEach: function() {
			this.oldWindow = global.window;
			global.window = {};
		},
		afterEach: function() {
			global.window = this.oldWindow;
		}
	});

	QUnit.test("Gets the Node global", function(assert) {
		assert.ok(getGlobal() === global);
	});
}
