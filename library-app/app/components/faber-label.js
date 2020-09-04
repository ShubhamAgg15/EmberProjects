import Component from '@glimmer/component';
import { observer } from '@ember/object';
import { cancel, later } from '@ember/runloop';

export default class FaberLabelComponent extends Component {
    tagName = "span";

    classNames = ['label label-success label-fade'];
    classNameBindings = ['isShowing:label-show'];

    isShowing = false;

    // @observer('isShowing', function() {
    //     this._runLater = later(() => this.set('isShowing', false), 3000);
    // }) isShowingChanged;

    // resetRunLater() {
    //     this.set('isShowing', false);
    //     // cancel(this._runLater);
    // }

    // willDestroy() {
    //     this.resetRunLater();
    //     this.__super(...arguments);
    // }

}
