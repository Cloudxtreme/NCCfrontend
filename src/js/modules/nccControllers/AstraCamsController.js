nccControllers.controller('astraCamsController', ['$scope', 'jsonrpc', function ($scope, jsonrpc) {

    function refresh(){
        $scope.cams = [];
        jsonrpc.request('getAstraCam', {}).then(function (result) {
            $scope.cams = result;
        }).catch(function (error) {

        });
    }

    refresh();

    $scope.showCreate = function () {
        $scope.panelCreate ? $scope.panelCreate = false : $scope.panelCreate = true;
        $scope.camName = '';
        $scope.camServer = '';
        $scope.camPort = '';
        $scope.camUser = '';
        $scope.camPassword = '';
    }

    $scope.cancelCreate = function () {
        $scope.panelCreate = false;
    }

    $scope.saveCreate = function () {
        $scope.panelCreate = false;

        jsonrpc.request('createAstraCam', [
            $scope.camServer,
            $scope.camPort,
            $scope.camUser,
            $scope.camPassword,
            $scope.camName,
            $scope.camKey
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

        jsonrpc.request('deleteAstraCam', [
            item.id
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {

        });
    }

    $scope.showEdit = function(item){
        item.panelEdit = true;
    }

    $scope.cancelEdit = function(item){
        item.panelEdit = false;
    }

    $scope.saveEdit = function(item){
        item.panelEdit = false;

        jsonrpc.request('updateAstraCam', [
            item.id,
            item.camServer,
            item.camPort,
            item.camUser,
            item.camPassword,
            item.camName,
            item.camKey
        ]).then(function (result) {
            refresh();
        }).catch(function (error) {

        });
    }
}]);
