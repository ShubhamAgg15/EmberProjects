import Route from '@ember/routing/route';

export default class UserIndexRoute extends Route {
    model() {        
        return this.modelFor('user').user.get('quotes');
    }
}
