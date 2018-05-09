import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('about');
  this.route('registroD');
  this.route('perfilD');
  this.route('blog');
  this.route('condiciones');
  this.route('empleos');
  this.route('politicas');
  this.route('anunciarse');
  this.route('ayuda');
});

export default Router;
