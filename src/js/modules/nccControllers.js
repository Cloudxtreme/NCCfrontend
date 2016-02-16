var nccControllers = angular.module('nccControllers', []);

nccControllers.controller('MainController', ['$scope', 'jsonrpc', '$interval', function ($scope, jsonrpc, $interval) {

    console.log('MainCotroller');

    var multipliers = [0x1000000, 0x10000, 0x100, 1];

    $scope.ip2long = function(ip) {
        var longValue = 0;
        ip.split('.').forEach(function(part, i) {longValue += part * multipliers[i];});
        return longValue;
    }

    $scope.long2ip = function(longValue) {
        return multipliers.map(function(multiplier) {
            return Math.floor((longValue % (multiplier * 0x100)) / multiplier);
        }).join('.');
    }

    $scope.getItemById = function(id, items){
        for(i in items){
            if(items[i].id == id) return items[i];
        }
        return null;
    }

    jsonrpc.request('getAstraAdapterTypes', {}).then(function (result) {
        $scope.adapterTypes = result;
    }).catch(function (error) {

    });

}]);