nccApp.service('AstraManagerServers', ['jsonrpc',
    'NCC',
    function (jsonrpc,
              NCC) {

        this.getServers = function () {

            return NCC.apiRequest({
                method: 'getAstraServers',
                data: []
            }).
            then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error getting servers');
                console.log(error);
                return error;
            });
        };

        this.createServer = function (server) {

            return NCC.apiRequest({
                method: 'createAstraServer',
                data: server
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error creating server');
                console.log(error);
                return error;
            });
        };

        this.updateServer = function (server) {

            return NCC.apiRequest({
                method: 'updateAstraServer',
                data: server
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error updating server');
                console.log(error);
                return error;
            });
        };

        this.deleteServer = function (id) {

            return NCC.apiRequest({
                method: 'deleteAstraServer',
                data: [id]
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error deleting server');
                console.log(error);
                return error;
            });
        };
    }]);