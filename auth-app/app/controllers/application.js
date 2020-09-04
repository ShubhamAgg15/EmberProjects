import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import firebase from 'firebase';
import _ from 'lodash';

export default class ApplicationController extends Controller {
    @service session;
    name1="Shubham";
    name2="Rahul";
    name3="Sohan";

    @action
    login() {
        let email = _.trim(this.email);
        console.log(email + ' & ' + this.password);
        firebase.auth().signInWithEmailAndPassword(email, this.password)
            .then(() => {
                console.log(this.session);
                this.transitionToRoute('protected');
            }, (error) => {
                console.log("error " + error);
            });
    }

    @action
    logout() {
        this.session.invalidate().then(() => {
            this.transitionToRoute('application');
        });
    }
}
