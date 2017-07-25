angular.module('galPhoto')

.factory('instagram', function($resource){
	return {
		fetchPopular: function(callback){
			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
				client_id: '6ce52efa87a24cb084833d793bf8538c'
			},{
				fetch:{method:'JSONP'}
			});

			api.fetch(function(response){
				callback(response.data);
			});
		}
	}
})