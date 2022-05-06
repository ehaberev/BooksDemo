import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speackers', {path: '/speackers'}, function(){
    this.route('edit',{ path: '/:id'})
  });  
  this.route('books', {path: '/books'}, function(){
    this.route('edit',{ path: '/:id'})
  });
  this.route('404', {path: '*path'});
});

export default Router;
