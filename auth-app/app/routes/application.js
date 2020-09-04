import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service intl;

    beforeModel() {
        console.log(navigator);
        this.intl.setLocale([navigator.language]);
    }
}
