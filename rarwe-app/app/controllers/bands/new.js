import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BandsNewController extends Controller {
    @tracked name = '';
    @service catalog;
    @service router;

    constructor() {
        super(...arguments);
        this.router.on('routeWillChange', transition => {
            if (transition.isAborted) {
                return;
            }
            if (this.confirmedLeave) {
                return;
            }
            if (transition.from.name === 'bands.new') {
                if (this.name) {
                    let response = window.confirm('You have unsaved chagnes, are you sure ?');
                    if (response) {
                        this.confirmedLeave = true;
                    } else {
                        transition.abort();
                    }
                }
            }
        });
    }

    @action
    async saveBand() {
        this.confirmedLeave = true;
        let attributes = { name : this.name };
        let record = await this.catalog.create('band', attributes);

        this.name = "";
        this.transitionToRoute('bands.band.songs', record.id);
    }
}
