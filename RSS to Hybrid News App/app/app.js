(function (app) {
    app.HybridNewsComponent = ng.core.Component({
         selector: 'hybrid-news',
         directives: [app.AppComponent],
         template: '<articles-list></articles-list>'
     })
     .Class({
         constructor: function () { }
     });

    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.HybridNewsComponent);
    });
})(window.app || (window.app = {}));
