import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class BandListComponent extends Component {
    @service router;

    get bands() {
        let items = this.args.bands.map(band => {
            return {
                band,
                isActive : this.router.isActive('bands.band', band)    
            }
        });
        return items;
    }
}
