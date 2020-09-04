import Route from '@ember/routing/route';

export default class AdminInvitationsRoute extends Route {
    model() {
        return {
            invitations: this.store.findAll('invitation')
        }
    }
}
