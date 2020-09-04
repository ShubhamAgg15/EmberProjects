import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AuthorsRoute extends Route {
    model() {
        return this.store.findAll('author');
    }

    @action
    editAuthor(author) {
        author.set('isEditing', true);
    }

    @action
    saveAuthor(author) {
        author.save();
        author.set('isEditing', false);
    }

    @action
    cancelEditAuthor(author) {
        author.rollbackAttributes();
        author.set('isEditing', false);
    }
}
