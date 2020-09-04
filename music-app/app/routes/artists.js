import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ArtistsRoute extends Route {
    model() {
        return this.store.findAll('artist', { include: 'songs'});
    }

    setupController(controller, model) {
        super.setupController(controller, model);
        controller.set('newArtist', this.store.createRecord('artist'));
    }

    @action
    addArtist() {
        this.controller.newArtist.save()
            .then(() => {
                this.transitionTo('artists.songs', this.controller.newArtist.id);
                this.controller.set('newArtist', this.store.createRecord('artist'));
            });
    }

}
