import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

(function (app) {
    app.HybridNewsComponent = Component({
        selector: 'hybrid-news',
        providers: [HTTP_PROVIDERS, app.articlesService, app.xmlToJsonService],
        directives: [app.ArticlesListComponent],
        template: '<articles-list></articles-list>'
    })
     .Class({
         constructor: function () { }
     });

    bootstrap(app.HybridNewsComponent);
})(window.app || (window.app = {}));
