nccControllers.controller('astraTranspondersController', ['$scope', 'jsonrpc', function ($scope, jsonrpc) {

    $scope.polarities = ['L', 'R', 'V', 'H'];
    $scope.fecs = ['3/4'];
    $scope.symbolrates = [27500, 30000];
    $scope.types = ['S2', 'S'];
    $scope.lnbs = ['9750:10600:11700', '10750:10750:11700'];
    $scope.sats = ['EUTELSAT 36°', 'Astra 4.8°', 'AMOS 4°'];

    function refresh() {
        $scope.servers = [];
        jsonrpc.request('getAstraServers', {}).then(function (result) {
            $scope.servers = result;
        }).catch(function (error) {

        });

        $scope.adapters = [];

        $scope.transponders = [];
        jsonrpc.request('getAstraTransponders', {}).then(function (result) {
            $scope.transponders = result;
        }).catch(function (error) {

        });
    }

    refresh();

    $scope.updateAdapters = function (item) {
        if (item == undefined) item = $scope;

        var serverId = null;

        if (item.transponderServer == undefined) {
            serverId = item.serverId;
        } else {
            serverId = item.transponderServer.id;
        }

        item.transponderAdapter = [];
        jsonrpc.request('getAstraAdaptersByServerId', [
            serverId
        ]).then(function (result) {
            $scope.adapters = result;
            item.transponderAdapter = $scope.adapters;
        }).catch(function (error) {

        });
    }

    $scope.showCreate = function () {
        $scope.panelCreate ? $scope.panelCreate = false : $scope.panelCreate = true;
        $scope.servers = [];

        $scope.transponderFreq = '';

        jsonrpc.request('getAstraServers', {}).then(function (result) {
            $scope.servers = result;
        }).catch(function (error) {

        });

        $scope.adapters = [];
    }

    $scope.cancelCreate = function () {
        $scope.panelCreate = false;
    }

    $scope.saveCreate = function () {
        $scope.panelCreate = false;

        jsonrpc.request('createAstraTransponder', [
            $scope.transponderName,
            $scope.transponderFreq,
            $scope.transponderPolarity,
            $scope.transponderFEC,
            $scope.transponderSymbolrate,
            $scope.transponderType,
            $scope.transponderAdapter.id,
            $scope.transponderLNB,
            $scope.transponderSat
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {
            refresh();
        });
    }

    $scope.showDelete = function (item) {
        item.panelDelete ? item.panelDelete = false : item.panelDelete = true;
    }

    $scope.cancelDelete = function (item) {
        item.panelDelete = false;
    }

    $scope.saveDelete = function (item) {
        item.panelDelete = false;

        jsonrpc.request('deleteAstraTransponder', [
            item.id
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {

        });
    }

    $scope.showEdit = function (item) {
        item.panelEdit = true;

        jsonrpc.request('getAstraServers', {}).then(function (result) {
            $scope.servers = result;

            jsonrpc.request('getAstraAdaptersByServerId', [item.serverId]).then(function (result) {
                $scope.adapters = result;

                item.transponderServer = $scope.getItemById(item.serverId, $scope.servers);
                item.transponderAdapter = $scope.getItemById(item.adapterId, $scope.adapters);
            });
        }).catch(function (error) {

        });
    }

    $scope.cancelEdit = function (item) {
        item.panelEdit = false;
    }

    $scope.saveEdit = function (item) {
        item.panelEdit = false;

        jsonrpc.request('updateAstraTransponder', [
            item.id,
            item.transponderName,
            item.transponderFreq,
            item.transponderPolarity,
            item.transponderFEC,
            item.transponderSymbolrate,
            item.transponderType,
            item.transponderAdapter.id,
            item.transponderLNB,
            item.transponderSat
        ]).then(function (result) {
            console.log(result);
            refresh();
        }).catch(function (error) {

        });
    }

    $scope.showStop = function(item){
        item.panelStop = true;
    }

    $scope.cancelStop = function(item){
        item.panelStop = false;
    }

    $scope.showRestart = function(item){
        item.panelRestart = true;
    }

    $scope.cancelRestart = function(item){
        item.panelRestart = false;
    }
}]);
