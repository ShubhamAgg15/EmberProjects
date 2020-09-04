import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Band from '../../models/band';
import Service from '@ember/service';

module('Integration | Component | band-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const routerStub = Service.extend({
      isActive: () => {
        return false;
      }
    });
    this.owner.register('service:router', routerStub);

    let bands = [
      new Band({id:1, name:'Radiohead'}),
      new Band({id:2, name:'Caspian'})
    ];
    this.set('bands', bands);

    await render(hbs`<BandList @bands={{this.bands}}/>`);
    assert.dom('[data-test-rr="band-link"]').exists({count:2});
  });
});
