import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LibrariesIndexController extends Controller {
    @action
    DeleteLibrary(library) {
        library.destroyRecord();
    }
}
