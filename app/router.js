import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speackers', {path: '/speackers'}, function(){
    this.route('edit',{ path: '/:id/edit'});
    
  });
  this.route('books', {path: '/books'}, function(){
    
    this.route('edit',{ path: '/:id/edit'});
    this.route('index',  {path: '/books'})
  });


  this.route('speackers-create', {path: '/speackers/create'});
  this.route('books-create');
  this.route('error', { path: '/:error'});
  this.route('404', {path: '*path'});
  
});

export default Router;
