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

        this.runTransponder = function (id, ip) {

            return NCC.apiRequest({
                method: 'runAstraTransponder',
                data: [id]
            }, ip).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error running transponder');
                console.log(error);
                return error;
            })
        };

        this.stopTransponder = function (id, ip) {

            return NCC.apiRequest({
                method: 'stopAstraTransponder',
                data: [id]
            }, ip).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error stopping transponder');
                console.log(error);
                return error;
            })
        };

        this.getTransponderStatus = function (id, ip) {

            return NCC.apiRequest({
                method: 'getAstraTransponderStatus',
                data: [id]
            }, ip).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error getting transponder status');
                console.log(error);
                return error;
            })
        };
    }]);