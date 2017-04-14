import QUnit from 'steal-qunit';
import plugin from './can-global';

QUnit.module('can-global');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the can-global plugin');
});
