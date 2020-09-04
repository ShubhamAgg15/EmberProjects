import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersCreateController extends Controller {
    @action
    SaveChanges() {
        let user = this.model;
        var record = this.store.createRecord('user', {
            name: user.name,
            avatarUrl: user.avatarUrl,
            bio: user.bio,
            email: user.email,
            creationDate: new Date()
        });
        record.save();

        this.transitionToRoute('users');
    }
}
