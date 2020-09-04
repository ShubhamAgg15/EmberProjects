import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default class ArtistsSongsController extends Controller {
    @empty('newSong.name') isDisabled;
}
