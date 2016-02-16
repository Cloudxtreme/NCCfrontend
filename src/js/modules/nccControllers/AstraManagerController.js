nccControllers.controller('AstraManagerController', ['$scope', 'jsonrpc', function ($scope, jsonrpc) {

    $scope.getAstraAdapters = function(){
        jsonrpc.request('getAstraAdapters', {}).then(function (result) {
            $scope.adapters = result;
            return result;
        }).catch(function (error) {

        });
        return null;
    }

    $scope.getAstraServers = function(){
        jsonrpc.request('getAstraServers', {}).then(function (result) {
            $scope.servers = result;
            return result;
        }).catch(function (error) {

        });
        return null;
    }

}]);
