import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home');
  this.route('user', {path:'profile'}, function() {
    this.route('follower');
    this.route('following');
  });
});