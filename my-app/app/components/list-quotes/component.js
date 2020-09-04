import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';

export default class ListQuotesComponent extends Component {
    quotes = this.args.quotes;

    sortedString = ['id:desc'];
    @sort('quotes', 'sortedString') sortedQuotes;
}
