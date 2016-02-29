nccApp.service('AstraManagerChannels', ['jsonrpc',
    'NCC',
    function (jsonrpc,
              NCC) {

        this.getChannels = function () {

            return NCC.apiRequest({
                method: 'getAstraChannels',
                data: []
            }).
            then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error getting channels');
                console.log(error);
                return error;
            });
        };

        this.createChannel = function (data) {

            return NCC.apiRequest({
                method: 'createAstraChannel',
                data: data
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error creating channel');
                console.log(error);
                return error;
            });
        };

        this.updateChannel = function (data) {

            return NCC.apiRequest({
                method: 'updateAstraChannel',
                data: data
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error updating channel');
                console.log(error);
                return error;
            });
        };

        this.deleteChannel = function (id) {

            return NCC.apiRequest({
                method: 'deleteAstraChannel',
                data: [id]
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error deleting channel');
                console.log(error);
                return error;
            });
        };
    }]);