'use strict'

angular.module('myApp.templates', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/templates', {
            templateUrl: 'templates/templates.html',
            controller: 'TemplatesCtrl'
            })
            .when('/templates/:templateId', {
            templateUrl: 'templates/templateDetail.html',
            controller: 'TemplatesDetailCtrl'
            });

    }])
    .controller('TemplatesCtrl', function($scope, $http) {
        $http.get('json/templates.json').then(function(response) {
            $scope.templates = response.data;
        });
    })
    .controller('TemplatesDetailCtrl', function($scope, $http, $routeParams, $filter) {
        var templateId = $routeParams.templateId;
        $http.get('json/templates.json').then(function(response) {
            $scope.template = $filter('filter')(response.data, {id: templateId})[0];
            $scope.mainImage = $scope.template.images[0].name;
        });
        $scope.setImage = function(image) {
            $scope.mainImage = image.name;
        }
    })
