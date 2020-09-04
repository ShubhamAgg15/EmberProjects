import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | artists/songs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:artists/songs');
    assert.ok(route);
  });
});
