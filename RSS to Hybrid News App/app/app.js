import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import ArticlesListComponent from 'app/components/articles-list/articles-list.component.js';
import ArticlesService from 'app/services/articlesService.js';
import XmlToJsonService from 'app/services/xmlToJsonService.js';

var HybridNewsComponent = Component({
	selector: 'hybrid-news',
	providers: [HTTP_PROVIDERS, ArticlesService, XmlToJsonService],
	directives: [ArticlesListComponent],
	template: '<articles-list></articles-list>'
})
 .Class({
 	constructor: function () { }
 });

bootstrap(HybridNewsComponent);

export default HybridNewsComponent