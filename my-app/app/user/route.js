import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class UserRoute extends Route {
    @service auth;

    beforeModel() {
        if (!this.auth.isLogin) {
            this.transitionTo('');
        }
    }
    model() {
        return hash({
            user: this.store.findRecord('user', 1, {include:'quotes,followers,followings'})
        });
    }
}
