hackular.directive("article", function() {
    return {
        restrict: 'E',
        scope: {
            url: '@'
        },
        replace: true,
        templateUrl: "partials/directives/article.html",
        controller: function($scope, api) {
            api.article($scope.url).success(function(article) {
                $scope.article = article
            })  
        }
    };
});

