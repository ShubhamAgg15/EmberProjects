import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Band from '../../models/band';
import Service from '@ember/service';

module('Integration | Component | band-navigation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const routerStub = Service.extend({
      isActive: (routeName, band) => {
        return routeName === 'bands.band.detail' ? band.description != '' : band.description == '';
      }
    });
    this.owner.register('service:router', routerStub);
    
    let band = new Band({id:1, name:'Radiohead', songs: [], description: 'radiohead band'});
    this.set('band', band);
    await render(hbs`<BandNavigation @band={{this.band}}/>`);

    assert.dom('[data-test-rr="detail-nav-item"]').hasClass("border-purple-400");
    assert.dom('[data-test-rr="songs-nav-item"]').lacksClass("border-purple-400");
  });
});
