(function (app) {
    app.HybridNewsComponent = ng.core.Component({
        selector: 'hybrid-news',
        providers: [ng.http.HTTP_PROVIDERS, app.articlesService],
        directives: [app.ArticlesListComponent],
        template: '<articles-list></articles-list>'
    })
     .Class({
         constructor: function () { }
     });

    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.HybridNewsComponent);
    });
})(window.app || (window.app = {}));
