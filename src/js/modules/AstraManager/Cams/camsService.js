nccApp.service('AstraManagerCams', ['jsonrpc',
    'NCC',
    function (jsonrpc,
              NCC) {

        this.getCams = function () {

            return NCC.apiRequest({
                method: 'getAstraCams',
                data: []
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error getting cams');
                console.log(error);
                return error;
            });
        };

        this.createCam = function (cam) {

            return NCC.apiRequest({
                method: 'createAstraCam',
                data: cam
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error creating cam');
                console.log(error);
                return error;
            });
        };

        this.updateCam = function (cam) {

            return NCC.apiRequest({
                method: 'updateAstraCam',
                data: cam
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error updating cam');
                console.log(error);
                return error;
            });
        };

        this.deleteCam = function (id) {

            return NCC.apiRequest({
                method: 'deleteAstraCam',
                data: [id]
            }).then(function (result) {
                return result;
            }).catch(function (error) {
                console.log('Error deleting cam');
                console.log(error);
                return error;
            });
        };
    }]);