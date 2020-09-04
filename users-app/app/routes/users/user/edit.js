import Route from '@ember/routing/route';

export default class UsersUserEditRoute extends Route {
    model() {
        return this.modelFor('users.user');
    }
}
