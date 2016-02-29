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
            $scope.channels = [];

            AstraManagerChannels.getChannels().then(function(channels){

                for(c in channels){
                    channels[c].channelIPHR = NCC.long2ip(channels[c].channelIP);
                }

                $scope.channels = channels;
            });
        }

        refresh();

        $scope.showCreate = function () {
            $scope.panelCreate ? $scope.panelCreate = false : $scope.panelCreate = true;

            $scope.channelName = '';
            $scope.channelPnr = '';
            $scope.channelIP = '';
            $scope.channelTransponder = 0;
            $scope.channelCam = 0;

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

            AstraManagerChannels.deleteChannel(item.channelId).then(function(result){
                refresh();
            });
        };

        $scope.showEdit = function (item) {
            item.panelEdit = true;

            AstraManagerTransponders.getTransponders().then(function (transponders) {
                $scope.transponders = transponders;

                item.channelTransponder = NCC.getItemById(item.transponderId, $scope.transponders);
            });

            AstraManagerCams.getCams().then(function (cams) {
                $scope.cams = cams;

                item.channelCam = NCC.getItemById(item.camId, $scope.cams);
            });
        };

        $scope.cancelEdit = function (item) {
            item.panelEdit = false;
        };

        $scope.saveEdit = function (item) {
            item.panelEdit = false;

            AstraManagerChannels.updateChannel([
                item.channelId,
                item.channelName,
                item.channelPnr,
                item.channelTransponder.id,
                NCC.ip2long(item.channelIPHR),
                item.channelCam.id
            ]).then(function(result){
                refresh();
            });
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