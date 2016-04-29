import {Component} from 'angular2/core';

(function (app) {
    app.ArticlesListComponent =
      Component({
          selector: 'articles-list',
          templateUrl: 'app/components/articles-list/articles-list.template.html'
      })
      .Class({
          constructor: [app.articlesService, app.xmlToJsonService, function ArticlesListComponent(articlesService, xmlToJsonService) {
              var that = this;
              articlesService.getArticles()
                  .subscribe(
                      function (response) {
                          var result = xmlToJsonService.getJson(response.text()).channel.item;
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