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
        },
        article: function(articleUrl) {    
            var url = "https://readability.com/api/content/v1/parser"
            var token = "45254f581ce504ab2e9919c907449d01067892da"
            return $http.get(url, { 
                params: {
                    url: articleUrl,
                    token: token
                }
            }) 
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

hackular.controller("ArticleCtrl", function($scope, $routeParams, api) {
    var url = decodeURIComponent($routeParams.url)
    api.article(url).success(function(article) {
        $scope.article = article
    })
})
