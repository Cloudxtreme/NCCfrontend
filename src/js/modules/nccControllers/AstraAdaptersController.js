nccControllers.controller('astraAdaptersController', ['$scope', 'jsonrpc', function ($scope, jsonrpc) {

    function refresh(){
        $scope.adapters = [];
        jsonrpc.request('getAstraAdapters', {}).then(function (result) {
            $scope.adapters = result;
        }).catch(function (error) {

        });

        $scope.servers = [];
        jsonrpc.request('getAstraServers', {}).then(function (result) {
            $scope.servers = result;
        }).catch(function (error) {

        });
    }

    refresh();

    $scope.showCreate = function () {
        $scope.panelCreate ? $scope.panelCreate = false : $scope.panelCreate = true;

        jsonrpc.request('getAstraServers', {}).then(function (result) {
            $scope.servers = result;

            $scope.adapterServerId = 0;
            $scope.adapterDevice = '';
            $scope.adapterType = '';
            $scope.adapterComment = '';
        }).catch(function (error) {

        });

        jsonrpc.request('getAstraAdapterTypes', {}).then(function (result) {
            $scope.adapterTypes = result;

        }).catch(function (error) {

        });

    }

    $scope.cancelCreate = function () {
        $scope.panelCreate = false;
    }

    $scope.saveCreate = function () {
        $scope.panelCreate = false;

        jsonrpc.request('createAdapter', [
            $scope.adapterDevice,
            $scope.adapterType.id,
            $scope.adapterServer.id,
            $scope.adapterComment
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {
            refresh();
        });
    }

    $scope.showDelete = function(item){
        item.panelDelete ? item.panelDelete = false : item.panelDelete = true;
    }

    $scope.cancelDelete = function(item){
        item.panelDelete = false;
    }

    $scope.saveDelete = function(item){
        item.panelDelete = false;

        jsonrpc.request('deleteAdapter', [
            item.id
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {

        });
    }

    $scope.showEdit = function(item){
        item.panelEdit = true;

        jsonrpc.request('getAstraServers', {}).then(function (result) {
            $scope.servers = result;

            item.adapterServer = $scope.getItemById(item.serverId, $scope.servers);
            item.adapterType = $scope.getItemById(item.adapterType, $scope.adapterTypes);
        }).catch(function (error) {

        });
    }

    $scope.cancelEdit = function(item){
        item.panelEdit = false;
    }

    $scope.saveEdit = function(item){
        item.panelEdit = false;

        jsonrpc.request('updateAdapter', [
            item.id,
            item.adapterDevice,
            item.adapterType.id,
            item.adapterServer.id,
            item.adapterComment
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {

        });
    }
}]);
