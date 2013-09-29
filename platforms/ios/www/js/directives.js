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

hackular.directive("platform", function() {
    return {
        restrict: 'C',
        link: function(scope, element, attrs) {
            var className;
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
                element[0].className += ' ios'
                if (/OS 7/.test(navigator.userAgent)) {
                    element[0].className += ' ios-7'    
                }
            } else if (/Android/g.test(navigator.userAgent)) {
                element[0].className += ' android'
            }
        }
    };
});
