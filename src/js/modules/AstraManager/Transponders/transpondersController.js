nccControllers.controller('astraTranspondersController', ['$scope',
    'NCC',
    'AstraManagerTransponders',
    'AstraManagerServers',
    'AstraManagerAdapters',
    function ($scope,
              NCC,
              AstraManagerTransponders,
              AstraManagerServers,
              AstraManagerAdapters) {

        $scope.polarities = ['L', 'R', 'V', 'H'];
        $scope.fecs = ['2/3', '3/4', '5/6'];
        $scope.symbolrates = [15000, 27500, 28000, 28800, 30000];
        $scope.types = ['S', 'S2'];
        $scope.lnbs = ['9750:10600:11700', '10750:10750:11700'];
        $scope.sats = ['EUTELSAT 36°', 'INTELSAT 85°', 'Astra 4.8°', 'AMOS 4°'];

        $scope.getItemById = NCC.getItemById;

        function refresh() {
            $scope.servers = [];
            AstraManagerServers.getServers().then(function (servers) {
                $scope.servers = servers;
            });

            $scope.adapters = [];

            AstraManagerTransponders.getTransponders().then(function (transponders) {
                $scope.transponders = transponders;

                console.log(transponders);
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
            AstraManagerAdapters.getAdapterByServerId(serverId).then(function (adapters) {
                $scope.adapters = adapters;
                item.transponderAdapter = $scope.adapters;
            }).catch(function (error) {

            });
        };

        $scope.showCreate = function () {
            $scope.panelCreate ? $scope.panelCreate = false : $scope.panelCreate = true;
            $scope.servers = [];

            $scope.transponderFreq = '';

            AstraManagerServers.getServers().then(function (servers) {
                $scope.servers = servers;
            });

            $scope.adapters = [];
        };

        $scope.cancelCreate = function () {
            $scope.panelCreate = false;
        };

        $scope.saveCreate = function () {
            $scope.panelCreate = false;

            AstraManagerTransponders.createTransponder([
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
            });

        };

        $scope.showDelete = function (item) {
            item.panelDelete ? item.panelDelete = false : item.panelDelete = true;
        };

        $scope.cancelDelete = function (item) {
            item.panelDelete = false;
        };

        $scope.saveDelete = function (item) {
            item.panelDelete = false;

            AstraManagerTransponders.deleteTransponder(item.id).then(function (result) {
                refresh();
            });
        };

        $scope.showEdit = function (item) {
            item.panelEdit = true;

            AstraManagerServers.getServers().then(function (servers) {
                $scope.servers = servers;

                AstraManagerAdapters.getAdapterByServerId(item.serverId).then(function (adapters) {
                    $scope.adapters = adapters;

                    item.transponderServer = $scope.getItemById(item.serverId, $scope.servers);
                    item.transponderAdapter = $scope.getItemById(item.adapterId, $scope.adapters);
                });
            });
        };

        $scope.cancelEdit = function (item) {
            item.panelEdit = false;
        };

        $scope.saveEdit = function (item) {
            item.panelEdit = false;

            AstraManagerTransponders.updateTransponder([
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
                refresh();
            });
        };

        $scope.showStop = function (item) {
            item.panelStop = true;
        };

        $scope.saveStop = function (item) {
            item.panelStop = false;

            AstraManagerTransponders.stopTransponder(item.id).then(function (result) {
                refresh();
            })
        };

        $scope.cancelStop = function (item) {
            item.panelStop = false;
        };

        $scope.showRestart = function (item) {
            item.panelRestart = true;
        };

        $scope.saveRestart = function (item) {
            item.panelRestart = false;

            AstraManagerTransponders.runTransponder(item.id).then(function (result) {
                refresh();
            });
        };

        $scope.cancelRestart = function (item) {
            item.panelRestart = false;
        };
    }]);
