import {Class} from 'angular2/core';
import {Http} from 'angular2/http';

(function (app) {
    app.articlesService = Class({
        constructor: [Http, function articlesService(http) {
            this.http = http;
        }],
        getArticles: function getArticles() {
            return this.http.get("http://www.novsport.com/rss_news.xml");
        }
    });
})(window.app || (window.app = {}));

//http://www.novsport.com/rss_news.xml
//http://gong.bg/rss?view=full