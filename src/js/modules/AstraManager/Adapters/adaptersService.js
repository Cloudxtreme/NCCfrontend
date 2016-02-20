nccApp.service('AstraManagerAdapters', ['jsonrpc',
    'NCC',
    function (jsonrpc,
              NCC) {

        this.getAdapters = function () {

            return NCC.apiRequest({
                method: 'getAstraAdapters',
                data: []
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error getting adapters');
                console.log(error);
                return error;
            });
        };

        this.getAdapterTypes = function () {

            return NCC.apiRequest({
                method: 'getAstraAdapterTypes',
                data: []
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error getting adapterTypes');
                console.log(error);
                return error;
            });
        };

        this.getAdapterByServerId = function (id) {

            return NCC.apiRequest({
                method: 'getAstraAdaptersByServerId',
                data: [id]
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error getting adapter by serverId');
                console.log(error);
                return error;
            });
        };

        this.createAdapter = function (adapter) {

            return NCC.apiRequest({
                method: 'createAstraAdapter',
                data: adapter
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error creating adapter');
                console.log(error);
                return error;
            });
        };

        this.updateAdapter = function (adapter) {

            return NCC.apiRequest({
                method: 'updateAstraAdapter',
                data: adapter
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error updating adapter');
                console.log(error);
                return error;
            });
        };

        this.deleteAdapter = function (id) {

            return NCC.apiRequest({
                method: 'deleteAstraAdapter',
                data: [id]
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error deleting adapter');
                console.log(error);
                return error;
            });
        };
    }]);