import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
    @service auth;

    emptyString = "";

    @tracked
    error = this.emptyString;

    @action
    login() {
        this.error = this.emptyString;
        if (this.email == "john" && this.password == "pass") {
            this.auth.isLogin = true;
            this.auth.userName = this.email;
            this.transitionToRoute('home');
        } else {
            this.error = "Invalid username/password";
        }
    }
}
