nccControllers.controller('astraCamsController', ['$scope',
    'AstraManagerCams',
    function ($scope,
              AstraManagerCams) {

        function refresh() {
            $scope.cams = [];
            AstraManagerCams.getCams().then(function (cams) {
                $scope.cams = cams;
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
        };

        $scope.cancelCreate = function () {
            $scope.panelCreate = false;
        };

        $scope.saveCreate = function () {
            $scope.panelCreate = false;

            AstraManagerCams.createCam([
                $scope.camServer,
                $scope.camPort,
                $scope.camUser,
                $scope.camPassword,
                $scope.camName,
                $scope.camKey
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

            AstraManagerCams.deleteCam(item.id).then(function (result) {
                refresh();
            });
        };

        $scope.showEdit = function (item) {
            item.panelEdit = true;
        };

        $scope.cancelEdit = function (item) {
            item.panelEdit = false;
        };

        $scope.saveEdit = function (item) {
            item.panelEdit = false;

            AstraManagerCams.updateCam([
                item.id,
                item.camServer,
                item.camPort,
                item.camUser,
                item.camPassword,
                item.camName,
                item.camKey
            ]).then(function (result) {
                refresh();
            });
        };
    }]);
