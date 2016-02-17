nccControllers.controller('astraAdaptersController', ['$scope',
    'NCC',
    'AstraManagerServers',
    'AstraManagerAdapters',
    function ($scope,
              NCC,
              AstraManagerServers,
              AstraManagerAdapters) {

        function refresh() {
            $scope.adapters = [];
            AstraManagerAdapters.getAdapters().then(function (adapters) {
                $scope.adapters = adapters;
            });

            $scope.servers = [];
            AstraManagerServers.getServers().then(function (servers) {
                $scope.servers = servers;
            });
        }

        refresh();

        $scope.showCreate = function () {
            $scope.panelCreate ? $scope.panelCreate = false : $scope.panelCreate = true;

            AstraManagerServers.getServers().then(function (servers) {
                $scope.servers = servers;

                $scope.adapterServerId = 0;
                $scope.adapterDevice = '';
                $scope.adapterType = '';
                $scope.adapterComment = '';
            });

            AstraManagerAdapters.getAdapterTypes().then(function (adapterTypes) {
                $scope.adapterTypes = adapterTypes;
            });

        };

        $scope.cancelCreate = function () {
            $scope.panelCreate = false;
        };

        $scope.saveCreate = function () {
            $scope.panelCreate = false;

            AstraManagerAdapters.createAdapter([
                $scope.adapterDevice,
                $scope.adapterType.id,
                $scope.adapterServer.id,
                $scope.adapterComment
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

            AstraManagerAdapters.deleteAdapter(item.id).then(function (result) {
                refresh();
            });
        };

        $scope.showEdit = function (item) {
            item.panelEdit = true;

            AstraManagerServers.getServers().then(function (servers) {
                $scope.servers = servers;

                item.adapterServer = NCC.getItemById(item.serverId, $scope.servers);
                item.adapterType = NCC.getItemById(item.adapterType, $scope.adapterTypes);
            });
        };

        $scope.cancelEdit = function (item) {
            item.panelEdit = false;
        };

        $scope.saveEdit = function (item) {
            item.panelEdit = false;

            AstraManagerAdapters.updateAdapter([
                item.id,
                item.adapterDevice,
                item.adapterType.id,
                item.adapterServer.id,
                item.adapterComment
            ]).then(function (result) {
                refresh();
            });
        };
    }]);
