hackular.controller("FeedCtrl", function($scope, $location, api) {
    api.news().success(function(feed) {
        $scope.items = feed.results
    })
    
    $scope.onItemClick = function(item) {
        $location.path("/article/" + encodeURIComponent(item.url))
    }
})

hackular.controller("ArticleCtrl", function($scope, $routeParams, api) {
    $scope.url = decodeURIComponent($routeParams.url)
    $scope.openInBrowser = function() {
        window.open($scope.url, '_blank', 'location=yes');
    }
})