import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { match, not } from '@ember/object/computed';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    @tracked
    emailAddress = '';
    responseMessage = '';

    @match('emailAddress', /^.+@.+\..+$/) isValid;
    @not('isValid') isDisabled;

    @action
    SaveInvitation() {
        var record = this.store.createRecord('invitation', { email: this.emailAddress });
        record.save().then(() => {
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.emailAddress}`);
            this.set('emailAddress', '');    
        },
        (error) => { console.log(error);}
        );
        
    }
    
    // @empty('emailAddress') isDisabled;

    // @computed('emailAddress')
    // get isDisabled() {
    //     console.log('computed method is called');
    //     return this.emailAddress == '';
    // }
}
