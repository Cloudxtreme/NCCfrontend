nccApp.service('AstraManagerServers', ['jsonrpc', function (jsonrpc) {

    this.getServers = function () {

        return jsonrpc.request('getAstraServers', {}).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error getting servers');
            console.log(error);
            return error;
        });
    };

    this.createServer = function (server) {

        return jsonrpc.request('createAstraServer', server).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error creating server');
            console.log(error);
            return error;
        });
    };

    this.updateServer = function (server) {

        return jsonrpc.request('updateAstraServer', server).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error updating server');
            console.log(error);
            return error;
        });
    };

    this.deleteServer = function (id) {

        return jsonrpc.request('deleteAstraServer', [ id ]).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error deleting server');
            console.log(error);
            return error;
        });
    };
}]);