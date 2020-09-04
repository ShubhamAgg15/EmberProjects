import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserEditController extends Controller {
    @action
    SaveChanges() {
        var record = this.model;
        record.save();

        this.transitionToRoute('users.user', this.model.id);
    }
}
