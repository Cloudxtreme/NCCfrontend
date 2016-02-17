nccApp.service('AstraManagerAdapters', ['jsonrpc', function (jsonrpc) {

    this.getAdapters = function () {

        return jsonrpc.request('getAstraAdapters', {}).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error getting adapters');
            console.log(error);
            return error;
        });
    };

    this.getAdapterTypes = function () {

        return jsonrpc.request('getAstraAdapterTypes', {}).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error getting adapterTypes');
            console.log(error);
            return error;
        });
    };

    this.getAdapterByServerId = function (id) {

        return jsonrpc.request('getAstraAdaptersByServerId', [ id ]).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error getting adapter by serverId');
            console.log(error);
            return error;
        });
    };

    this.createAdapter = function (adapter) {

        return jsonrpc.request('createAstraAdapter', adapter).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error creating adapter');
            console.log(error);
            return error;
        });
    };

    this.updateAdapter = function (adapter) {

        return jsonrpc.request('updateAstraAdapter', adapter).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error updating adapter');
            console.log(error);
            return error;
        });
    };

    this.deleteAdapter = function (id) {

        return jsonrpc.request('deleteAstraAdapter', [ id ]).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error deleting adapter');
            console.log(error);
            return error;
        });
    };
}]);