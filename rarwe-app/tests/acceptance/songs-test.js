import { module, test } from 'qunit';
import { visit, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | songs', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should render songs in a alphabetic order', async function(assert) {
    let band = this.server.create('band', {name: 'Them Crooked Vultures'});
    this.server.create('song', {title: 'Mind Eraser, No Chaser', rating: 2, band});
    this.server.create('song', {title: 'Elephants', rating: 4, band});
    this.server.create('song', {title: 'Spinning in Daffodils', rating: 5, band});
    this.server.create('song', {title: 'New Fang', rating: 3, band});

    await visit('/');

    await click('[data-test-rr="band-link"]');
    assert.dom('[data-test-rr="song-list-item"]:first-child').hasText('Elephants');
    assert.dom('[data-test-rr="song-list-item"]:last-child').hasText('Spinning In Daffodils');

    await click('[data-test-rr="sort-by-rating-asc"]');
    assert.dom('[data-test-rr="song-list-item"]:first-child').hasText('Mind Eraser, No Chaser');
    assert.dom('[data-test-rr="song-list-item"]:last-child').hasText('Spinning In Daffodils');

    await click('[data-test-rr="sort-by-rating-desc"]');
    assert.dom('[data-test-rr="song-list-item"]:first-child').hasText('Spinning In Daffodils');
    assert.dom('[data-test-rr="song-list-item"]:last-child').hasText('Mind Eraser, No Chaser');

    await click('[data-test-rr="sort-by-title-desc"]');
    assert.dom('[data-test-rr="song-list-item"]:first-child').hasText('Spinning In Daffodils');
    assert.dom('[data-test-rr="song-list-item"]:last-child').hasText('Elephants');
  });

  test('display songs that have searched string in title', async function(assert){
    let band = this.server.create('band', {name: 'Them Crooked Vultures'});
    this.server.create('song', {title: 'Mind Eraser, No Chaser', rating: 2, band});
    this.server.create('song', {title: 'Elephants', rating: 4, band});
    this.server.create('song', {title: 'Spinning in Daffodils', rating: 5, band});
    this.server.create('song', {title: 'New Fang', rating: 3, band});
    this.server.create('song', {title: 'No One Loves Me & Neither Do I', rating: 4, band});

    await visit('/');

    await click('[data-test-rr="band-link"]');
    await fillIn('[data-test-rr="search-box"]', "ele");
    assert.dom('[data-test-rr="song-list-item"]').exists({count:1});
  });
});
