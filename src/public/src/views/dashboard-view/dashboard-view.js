angular.module('albion-server').directive('dashboardView', () => {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'dashboard-view.html',
    bindToController: true,
    controllerAs: 'vm',
    controller: [function() {}]
  }
});
