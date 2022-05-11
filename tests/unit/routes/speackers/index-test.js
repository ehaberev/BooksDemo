import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | speackers/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:speackers/index');
    assert.ok(route);
  });
});
