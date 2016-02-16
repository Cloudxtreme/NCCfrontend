nccControllers.controller('astraServersController', ['$scope', 'jsonrpc', function ($scope, jsonrpc) {

    function refresh(){
        $scope.servers = [];
        jsonrpc.request('getAstraServers', {}).then(function (result) {
            $scope.servers = result;
        }).catch(function (error) {

        });
    }

    refresh();

    $scope.serverIP = '';
    $scope.serverSecret = '';
    $scope.serverLocalAddress = '';

    $scope.showCreate = function () {
        $scope.panelCreate ? $scope.panelCreate = false : $scope.panelCreate = true;
        $scope.serverIP = '';
        $scope.serverSecret = '';
        $scope.serverLocalAddress = '';
    }

    $scope.cancelCreate = function () {
        $scope.panelCreate = false;
    }

    $scope.saveCreate = function () {
        $scope.panelCreate = false;

        jsonrpc.request('createServer', [
            $scope.ip2long($scope.serverIP),
            $scope.serverSecret,
            $scope.ip2long($scope.serverLocalAddress),
            $scope.serverComment,
            $scope.serverName
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {
            refresh();
        });
    }

    $scope.showDelete = function(item){
        item.panelDelete ? item.panelDelete = false : item.panelDelete = true;
    }

    $scope.cancelDelete = function(iten){
        iten.panelDelete = false;
    }

    $scope.saveDelete = function(item){
        item.panelDelete = false;

        jsonrpc.request('deleteServer', [
            item.id
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {

        });
    }

    $scope.showEdit = function(item){
        item.panelEdit = true;
        item.serverIpHR = $scope.long2ip(item.serverIP);
        item.serverLocalAddressHR = $scope.long2ip(item.serverLocalAddress);
    }

    $scope.cancelEdit = function(item){
        item.panelEdit = false;
    }

    $scope.saveEdit = function(item){
        item.panelEdit = false;

        jsonrpc.request('updateServer', [
            item.id,
            $scope.ip2long(item.serverIpHR),
            item.serverSecret,
            $scope.ip2long(item.serverLocalAddressHR),
            item.serverComment,
            item.serverName
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {

        });
    }
}]);
