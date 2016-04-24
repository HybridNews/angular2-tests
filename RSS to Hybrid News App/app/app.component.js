(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<div class="container-fluid">container</div><h1>My First Angular 2 App<button type="button" class="btn btn-primary btn-sm">Test</button></h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));