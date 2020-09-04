import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LibrariesNewRoute extends Route {
    model() {
        return this.store.createRecord('library');
    }

    renderTemplate() {
        this.render('libraries.form', { controller: 'libraries.new'});
    }

    @action
    willTransition() {
        let model = this.controller.get('model');

        if (model.get('isNew')) {
            model.destroyRecord();
        }
    }
}
