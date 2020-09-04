import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default class ArtistsController extends Controller {
    @empty('newArtist.name') isDisabled;
}
