(function() {

  var module = angular.module('PlayerApp');

  module.controller('BrowseCategoryController', function($scope, API, $routeParams, Auth) {
	  //console.log('browsecategory.js  Ligne 6');
    $scope.categoryname = '';

    API.getBrowseCategory($routeParams.categoryid).then(function(result) {
      $scope.categoryname = result.name;
    });
    API.getBrowseCategoryPlaylists($routeParams.categoryid, Auth.getUserCountry()).then(function(results) {
      $scope.playlists = results.playlists.items;
    });
  });

})();
