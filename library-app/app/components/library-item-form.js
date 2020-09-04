import Component from '@glimmer/component';
import { empty, or } from '@ember/object/computed';
import { action } from '@ember/object';

export default class LibraryItemFormComponent extends Component {
    @empty('args.item.name') isNameEmpty;
    @empty('args.item.address') isAddressEmpty;
    @empty('args.item.phone') isPhoneEmpty;

    @or('isNameEmpty', 'isAddressEmpty', 'isPhoneEmpty') isDisabled;

    @action
    btnClicked() {
        this.args.action(this.args.item);
    }
}
