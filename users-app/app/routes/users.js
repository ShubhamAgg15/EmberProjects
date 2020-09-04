import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
    model() {
        return {
            users: this.store.findAll('user')
        }
    }
}