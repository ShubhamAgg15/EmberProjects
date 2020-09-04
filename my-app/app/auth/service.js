import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AuthService extends Service {
    @tracked
    isLogin;

    @tracked
    userName;
}
