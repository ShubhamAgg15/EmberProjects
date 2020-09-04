import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserController extends Controller {
    deleteMode = false;

    @action
    DeleteUser() {
        this.toggleProperty('deleteMode');
    }

    @action
    ConfirmDelete() {
        var record = this.model;
        record.destroyRecord();

        this.transitionToRoute('users');
        this.set('deleteMode', false);
    }

    @action
    CancelDelete() {
        this.set('deleteMode', false);
    }
}
