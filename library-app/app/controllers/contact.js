import Controller from '@ember/controller';
import { action } from '@ember/object';
import { gt, match } from '@ember/object/computed';
import { computed } from '@ember/object';

export default class ContactController extends Controller {
    msg = '';
    emailAddress = '';
    responseMsg = '';

    @gt('msg.length', 5) isMsgValid;
    @match('emailAddress', /^.+@.+\..+$/) isEmailValid;

    @computed('isMsgValid', 'isEmailValid')
    get isDisabled() {
        return !(this.isMsgValid && this.isEmailValid);
    }

    @action
    SendMessage() {
        this.store.createRecord('contact', {
            msg: this.msg,
            email: this.emailAddress
        }).save().then(() => {
            this.set('msg', '');
            this.set('emailAddress', '');
            this.set('responseMsg', 'We got your message and we’ll get in touch soon.');    
        });
    }
}
