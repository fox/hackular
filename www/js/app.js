var hackular = angular.module('hackular', [])

hackular.config(function($routeProvider) {
    $routeProvider.when("/", { templateUrl: "partials/feed.html", controller: "FeedCtrl" })
    $routeProvider.when("/article/:url", { templateUrl: "partials/article.html", controller: "ArticleCtrl" })
    $routeProvider.otherwise({ redirectTo: "/" })
})

hackular.factory("api", function($http) {        
    return {
        news: function() {
            var url = "http://hnapp.com/api/items/json/8f370f98f4cc52e4da0640c07bd4d850"
            return $http.get(url)
        }
	}
})

hackular.controller("FeedCtrl", function($scope, $location, api) {
    api.news().success(function(feed) {
        $scope.items = feed.results
    })
    
    $scope.onItemClick = function(item) {
        $location.path("/article/" + encodeURIComponent(item.url))
    }
})

hackular.controller("ArticleCtrl", function() {
})
