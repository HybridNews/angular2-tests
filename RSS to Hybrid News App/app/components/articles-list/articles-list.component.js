(function (app) {
    app.AppComponent =
      ng.core.Component({
          selector: 'articles-list',
          templateUrl: 'app/components/articles-list/articles-list.template.html'
      })
      .Class({
          constructor: function () {
              this.articles = [
                  { title: "Title1", description: "Some random text 1" },
                  { title: "Title2", description: "Some random text 2" },
                  { title: "Title3", description: "Some random text 3" },
                  { title: "Title4", description: "Some random text 4" },
              ];
          }
      });
})(window.app || (window.app = {}));