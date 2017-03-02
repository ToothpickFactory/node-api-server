angular.module('albion-server').factory('userService', ['$http', 'urls', 'authService', ($http, urls, authService) => {
		let _user;
		let _fetching;

		let fetchUser = () => {
			let dToken  = authService.getDecodedToken();
			if(!dToken) return Promise.reject();
			if(_fetching) return _fetching;

			_fetching = $http.get(`${urls.user}/api/user/${dToken.user.userId}`)
				.then(res => _user = res.data);
			return _fetching;
		}

		let getUser = () => _user ? Promise.resolve(_user) : fetchUser();

  return { getUser }
}]);
