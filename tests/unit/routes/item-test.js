import { module, test } from 'qunit';
import { setupTest } from 'batman-m/tests/helpers';

module('Unit | Route | ITEM', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:item');
    assert.ok(route);
  });
});