import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class UserFollowerRoute extends Route {
    model() {
        return hash({
            users: this.store.findAll('user')
        });
    }
}
