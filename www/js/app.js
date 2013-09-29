var hackular = angular.module('hackular', [])

hackular.config(function($routeProvider) {
    $routeProvider.when("/", { templateUrl: "partials/feed.html", controller: "FeedCtrl" });
    $routeProvider.otherwise({ redirectTo: "/" })
})

hackular.controller("FeedCtrl", function() {
})