var hackular = angular.module('hackular', [])

hackular.config(function($routeProvider) {
    $routeProvider.when("/", { templateUrl: "partials/feed.html", controller: "FeedCtrl" })
    $routeProvider.when("/article/:url", { templateUrl: "partials/article.html", controller: "ArticleCtrl" })
    $routeProvider.otherwise({ redirectTo: "/" })
})

