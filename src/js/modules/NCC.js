var nccApp = angular.module('nccApp', [
    'ngRoute',
    'ngResource',
    'nccControllers',
    'angular-jsonrpc-client'
]);

nccApp.config(['$routeProvider', '$locationProvider', 'jsonrpcConfigProvider', '$httpProvider', function ($routeProvider, $locationProvider, jsonrpcConfigProvider, $httpProvider) {

/*
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
*/

    jsonrpcConfigProvider.set({
        //url: nccProperties.API.url
        servers: nccProperties.API.servers
    });

    for (var r in nccRoutes) {
        $routeProvider.when(nccRoutes[r].route, {
            templateUrl: nccRoutes[r].url,
            controller: nccRoutes[r].controller
        });
    }

    $routeProvider.otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $.material.init();

}]);

var nccControllers = angular.module('nccControllers', []);
