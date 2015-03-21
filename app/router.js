import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("posts",function(){
    this.resource('post', { path: ':id' });
  });
  this.resource("about");
  this.resource("contact", function(){
    this.resource("phone");
    this.resource("email");
  });



});

export default Router;

