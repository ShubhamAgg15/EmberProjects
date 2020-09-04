import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Band from '../../models/band';
import Song from '../../models/song';

module('Unit | Service | catalog', function(hooks) {
  setupTest(hooks);

  test('service exists', function(assert) {
    let service = this.owner.lookup('service:catalog');
    assert.ok(service);
  });

  test('it can store and retrieve bands', function(assert) {
    let catalog = this.owner.lookup('service:catalog');
    catalog.add('band', new Band({ id: 1, name: 'Radiohead'}));

    assert.equal(catalog.bands.length, 1, 'Catalog has 1 band');
    assert.equal(catalog.bands[0].name, 'Radiohead', 'Catalog has band with proper name');
  });

  test('it can store and retrieve songs', function(assert) {
    let catalog = this.owner.lookup('service:catalog');
    catalog.add('song', new Song({ id: 1, title: 'Radiohead Song'}));

    assert.equal(catalog.songs.length, 1, 'Catalog has 1 song');
    assert.equal(catalog.songs[0].title, 'Radiohead Song', 'Catalog has song with proper name');
  });
});
