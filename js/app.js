App = Ember.Application.create();

App.Router.map(function() {
  this.resource('discography');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
