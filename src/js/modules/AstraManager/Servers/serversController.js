nccControllers.controller('astraServersController', ['$scope',
    'NCC',
    'AstraManagerServers',
    function ($scope,
              NCC,
              AstraManagerServers) {

        function refresh() {
            $scope.servers = [];

            AstraManagerServers.getServers().then(function(servers){

                for(s in servers){
                    servers[s].serverIPHR = NCC.long2ip(servers[s].serverIP);
                    servers[s].serverLocalAddressHR = NCC.long2ip(servers[s].serverLocalAddress);
                }

                $scope.servers = servers;
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
        };

        $scope.cancelCreate = function () {
            $scope.panelCreate = false;
        };

        $scope.saveCreate = function () {
            $scope.panelCreate = false;

            AstraManagerServers.createServer([
                NCC.ip2long($scope.serverIP),
                $scope.serverSecret,
                NCC.ip2long($scope.serverLocalAddress),
                $scope.serverComment,
                $scope.serverName
            ]).then(function (result) {
                refresh();
            });
        };

        $scope.showDelete = function (item) {
            item.panelDelete ? item.panelDelete = false : item.panelDelete = true;
        };

        $scope.cancelDelete = function (iten) {
            iten.panelDelete = false;
        };

        $scope.saveDelete = function (item) {
            item.panelDelete = false;

            AstraManagerServers.deleteServer(item.id).then(function (result) {
                refresh();
            });
        };

        $scope.showEdit = function (item) {
            item.panelEdit = true;
            item.serverIpHR = NCC.long2ip(item.serverIP);
            item.serverLocalAddressHR = NCC.long2ip(item.serverLocalAddress);
        };

        $scope.cancelEdit = function (item) {
            item.panelEdit = false;
        };

        $scope.saveEdit = function (item) {
            item.panelEdit = false;

            AstraManagerServers.updateServer([
                item.id,
                NCC.ip2long(item.serverIpHR),
                item.serverSecret,
                NCC.ip2long(item.serverLocalAddressHR),
                item.serverComment,
                item.serverName
            ]).then(function (result) {
                refresh();
            });
        };
    }]);
