nccApp.service('AstraManagerTransponders', ['jsonrpc', function (jsonrpc) {

    this.getTransponders = function () {

        return jsonrpc.request('getAstraTransponders', {}).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error getting transponders');
            console.log(error);
            return error;
        });
    };

    this.createTransponder = function (transponder) {

        return jsonrpc.request('createAstraTransponder', transponder).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error creating transponder');
            console.log(error);
            return error;
        });
    };

    this.updateTransponder = function (transponder) {

        return jsonrpc.request('updateAstraTransponder', transponder).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error updating transponder');
            console.log(error);
            return error;
        });
    };

    this.deleteTransponder = function (id) {

        return jsonrpc.request('deleteAstraTransponder', [ id ]).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error deleting transponder');
            console.log(error);
            return error;
        });
    };
}]);