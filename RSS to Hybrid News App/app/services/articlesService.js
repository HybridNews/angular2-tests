(function (app) {
    app.articlesService = ng.core.Class({
        constructor: [ng.http.Http, function articlesService(http) {
            this.getArticles = function() {
                return http.get("http://gong.bg/rss?view=full");
            }
        }]
    });
})(window.app || (window.app = {}));
