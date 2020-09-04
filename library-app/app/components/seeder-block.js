import Component from '@glimmer/component';
import { lte, not, or } from '@ember/object/computed';
import { action } from "@ember/object";

const MAX_VALUE = 100;

export default class SeederBlockComponent extends Component {
    counter = null;

    @lte('counter', MAX_VALUE) isCounterValid;
    @not('isCounterValid') isCounterNotValid;

    placeholder = `Max ${MAX_VALUE}`;

    generateReady = false;
    deleteReady = false;

    deleteInProgress = false;

    @or('args.generateInProgress', 'deleteInProgress', 'isCounterNotValid') generateIsDisabled;
    @or('args.generateInProgress', 'deleteInProgress') deleteIsDisabled;

    @action
    generateAction() {
        if (this.isCounterValid) {
            this.args.generateAction(this.counter);
        }
    }

    @action
    deleteAction() {
        this.args.deleteAction();
    }

}
