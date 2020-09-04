import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandSongsRoute extends Route {
    @service catalog;

    queryParams = {
        sortBy: {
            as : 's'
        },
        searchParam: {
            as : 'q'
        }
    }

    async model() {
        let band = this.modelFor('bands.band');
        await this.catalog.fetchRelated(band, 'songs');
        return band;
    }

    // setupController(controller) {
    //     super.setupController(controller);
    //     controller.set('band', this.modelFor('bands.band'));
    // }

    resetController(controller) {
        controller.title = '';
        controller.showAddSong = true;
    }
}
