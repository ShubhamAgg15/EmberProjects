import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LibrariesEditController extends Controller {
    title = "Edit library";
    btnLabel = "Save Changes";

    @action
    SaveLibrary(library) {
        library.save().then(() => this.transitionToRoute('libraries'));
    }
}
