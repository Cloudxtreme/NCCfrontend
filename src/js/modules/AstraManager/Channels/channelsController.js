nccControllers.controller('astraChannelsController', ['$scope',
    'AstraManagerChannels',
    'AstraManagerTransponders',
    'AstraManagerCams',
    'NCC',
    function ($scope,
              AstraManagerChannels,
              AstraManagerTransponders,
              AstraManagerCams,
              NCC) {

        function refresh() {
        }

        refresh();

        $scope.showCreate = function () {
            $scope.panelCreate ? $scope.panelCreate = false : $scope.panelCreate = true;

            AstraManagerTransponders.getTransponders().then(function (transponders) {
                $scope.transponders = transponders;
            });

            AstraManagerCams.getCams().then(function (cams) {
                $scope.cams = cams;
            });
        };

        $scope.cancelCreate = function () {
            $scope.panelCreate = false;
        };

        $scope.saveCreate = function () {
            $scope.panelCreate = false;

            AstraManagerChannels.createChannel([
                $scope.channelName,
                $scope.channelTransponder.id,
                $scope.channelPnr,
                $scope.channelCam.id,
                NCC.ip2long($scope.channelIP),
                $scope.channelComment
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
        };

        $scope.showEdit = function (item) {
            item.panelEdit = true;
        };

        $scope.cancelEdit = function (item) {
            item.panelEdit = false;
        };

        $scope.saveEdit = function (item) {
            item.panelEdit = false;
        };

        $scope.showStop = function (item) {
            item.panelStop = true;
        };

        $scope.cancelStop = function (item) {
            item.panelStop = false;
        };

        $scope.showRestart = function (item) {
            item.panelRestart = true;
        };

        $scope.cancelRestart = function (item) {
            item.panelRestart = false;
        };
    }]);