import {Class} from 'angular2/core';
import {Http} from 'angular2/http';

var ArticlesService = Class({
	constructor: [Http, function ArticlesService(http) {
		this.http = http;
	}],
	getArticles: function getArticles() {
		return this.http.get("http://www.novsport.com/rss_news.xml");
	}
});

export default ArticlesService;

//http://www.novsport.com/rss_news.xml
//http://gong.bg/rss?view=full