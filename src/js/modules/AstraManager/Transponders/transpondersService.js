nccApp.service('AstraManagerTransponders', ['jsonrpc',
    'NCC',
    function (jsonrpc,
              NCC) {

        this.getTransponders = function () {

            return NCC.apiRequest({
                method: 'getAstraTransponders',
                data: []
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error getting transponders');
                console.log(error);
                return error;
            });
        };

        this.createTransponder = function (transponder) {

            return NCC.apiRequest({
                method: 'createAstraTransponder',
                data: transponder
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error creating transponder');
                console.log(error);
                return error;
            });
        };

        this.updateTransponder = function (transponder) {

            return NCC.apiRequest({
                method: 'updateAstraTransponder',
                data: transponder
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error updating transponder');
                console.log(error);
                return error;
            });
        };

        this.deleteTransponder = function (id) {

            return NCC.apiRequest({
                method: 'deleteAstraTransponder',
                data: [id]
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error deleting transponder');
                console.log(error);
                return error;
            });
        };
    }]);