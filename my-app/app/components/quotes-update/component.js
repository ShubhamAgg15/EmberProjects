import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class QuotesUpdateComponent extends Component {
    @action
    postQuotes() {
        let store = this.args.store;
        store.findRecord('user', 1).then(user => {
            var postQuote = store.createRecord('quote', {
                text: this.quoteText,
                user: user,
                createdDate: new Date()
            });
            postQuote.save();
        });
    }
}
