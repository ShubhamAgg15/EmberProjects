import { module, test } from 'qunit';
import { visit, waitFor, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { createBand, createSong } from '../helpers/custom-helpers';

module('Acceptance | Bands', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List bands', async function(assert) {
    this.server.create('band', { name: 'Radiohead'});
    this.server.create('band', { name: 'Long Distance Calling'});
    await visit('/');

    assert.dom('[data-test-rr="band-link"]').exists({count:2}, 'All band links are generated');
    assert.dom('[data-test-rr="band-list-item"]:first-child').hasText("Radiohead", "First band link contains the band name");
    assert.dom('[data-test-rr="band-list-item"]:last-child').hasText('Long Distance Calling', 'Second band link contains the band name');
  });

  test('Create a band', async function(assert) {
    this.server.create('band', {name:'Radiohead'});

    await visit('/');
    await createBand('Caspian');

    await waitFor('[data-test-rr="no-songs-text"]');

    assert.dom('[data-test-rr="band-list-item"]').exists({count:2}, 'A new band link is rendered');
    assert.dom('[data-test-rr="band-list-item"]:last-child').hasText('Caspian', 'Second band link contains the band name');
    assert.dom('[data-test-rr="songs-nav-item"] > .active').exists('song tab is active');
  });

  test('Create a song', async function(assert) {
    this.server.create('band', {name: 'Radiohead'});

    await visit('/');
    await click('[data-test-rr="band-link"]:first-child');

    await waitFor('[data-test-rr="no-songs-text"]');
    await createSong('Radiohead Song');

    assert.dom('[data-test-rr="song-list"]').exists({count:1}, 'A new song is rendered');
    assert.dom('[data-test-rr="song-list-item"]:first-child').hasText('Radiohead Song', 'Song is rendered');
  });
});
