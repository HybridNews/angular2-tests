(function (app) {
    app.AppComponent =
      ng.core.Component({
          selector: 'articles-list',
          templateUrl: 'app/components/articles-list/articles-list.template.html'
      })
      .Class({
          constructor: function () { }
      });
})(window.app || (window.app = {}));