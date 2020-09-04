import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default class UsersCreateRoute extends Route {
    model() {
        return EmberObject.create({});
    }

    renderTemplate() {
        this.render('users.user.edit', {controller: 'users.Create'});
    }
}
