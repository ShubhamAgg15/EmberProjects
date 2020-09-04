import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsRoute extends Route {
    @service catalog;

    async model() {
        return await this.catalog.fetchAll('bands');
    }
}
