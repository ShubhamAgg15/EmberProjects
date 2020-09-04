import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | star-rating', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('rating', 4);
    this.set('updateRating', (rating) => {
      this.set('rating', rating);
      assert.step(`Updated to rating: ${rating}`)
    });

    await render(hbs`<StarRating @maxRating=5 @rating={{this.rating}} @onUpdate={{this.updateRating}}/>`);
    assert.dom('[data-test-rr="full-star"').exists({count:4}, '4 full stars are rendered');
    assert.dom('[data-test-rr="empty-star"').exists({count:1}, '1 empty star is rendered');

    this.set('rating', 2);
    assert.dom('[data-test-rr="full-star"').exists({count:2}, '2 full stars are rendered');
    assert.dom('[data-test-rr="empty-star"').exists({count:3}, '3 empty star is rendered');

    await click('[data-test-rr="star-rating-button"]:nth-child(3)');
    assert.dom('[data-test-rr="full-star"').exists({count:3}, '3 full stars are rendered');
    assert.dom('[data-test-rr="empty-star"').exists({count:2}, '2 empty star is rendered');

    assert.verifySteps([`Updated to rating: 3`]);
  });
});
