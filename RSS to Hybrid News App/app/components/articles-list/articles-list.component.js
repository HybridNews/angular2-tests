import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Carousel} from 'ng2-bootstrap/components/carousel/carousel.component';
import {Slide} from 'ng2-bootstrap/components/carousel/slide.component';

(function (app) {
	app.ArticlesListComponent =
	  Component({
	  	selector: 'articles-list',
	  	directives: [Carousel, Slide, CORE_DIRECTIVES, FORM_DIRECTIVES],
		templateUrl: 'app/components/articles-list/articles-list.template.html'
	  })
	  .Class({
		constructor: [app.articlesService, app.xmlToJsonService, function ArticlesListComponent(articlesService, xmlToJsonService) {
			var that = this;
			that.baseUrl = "";
			that.articles = [];
			that.myInterval = 2000;
			that.noWrapSlides = false;
			that.slides = [];
			articlesService.getArticles().subscribe(
				function (response) {
					var channel = xmlToJsonService.getJson(response.text()).channel;
					that.baseUrl = channel.link;
					var items = channel.item;
					that.articles = items;
					that.slides = items.slice(0, 4);
				}
			);
		}]
	  });
})(window.app || (window.app = {}));