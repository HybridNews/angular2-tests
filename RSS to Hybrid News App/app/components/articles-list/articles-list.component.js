(function (app) {
    app.ArticlesListComponent =
      ng.core.Component({
          selector: 'articles-list',
          templateUrl: 'app/components/articles-list/articles-list.template.html'
      })
      .Class({
          constructor: [app.articlesService, function ArticlesListComponent(articlesService) {
              var that = this;
              articlesService.getArticles()
                  .map(
                      function (response) {
                          return xml2json(response.text(), "");
                      })
                  .subscribe(
                      function (result) {
                          that.articles = result;
                      });
              this.articles = [
                  { title: "Title1", description: "Some random text 1" },
                  { title: "Title2", description: "Some random text 2" },
                  { title: "Title3", description: "Some random text 3" },
                  { title: "Title4", description: "Some random text 4" }
              ];
          }]
      });
})(window.app || (window.app = {}));