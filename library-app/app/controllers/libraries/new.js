import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LibrariesNewController extends Controller {
    title = "Create new library";
    btnLabel = "Add";

    @action
    SaveLibrary(library) {
        library.save().then(() => this.transitionToRoute('libraries'));
    }
}
