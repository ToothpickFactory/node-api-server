angular.module('albion-server').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
		// Home Page
    .state('home', {
      url: '/home',
      abstract: true,
      template: '<home-page></home-page>'
    })
    .state('home.dashboard', {
      url: '',
      template: '<dashboard-view></dashboard-view>'
    })
  $urlRouterProvider.otherwise('/home');

}]);
