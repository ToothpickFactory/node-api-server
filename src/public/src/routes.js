angular.module('albion-server').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
		// Home Page
    .state('home', {
      url: '/home',
      template: '<home-page></home-page>'
    })
  $urlRouterProvider.otherwise('/home');

}]);
