nccApp.service('AstraManagerCams', ['jsonrpc', function (jsonrpc) {

    this.getCams = function () {

        return jsonrpc.request('getAstraCams', {}).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error getting cams');
            console.log(error);
            return error;
        });
    };

    this.createCam = function (cam) {

        return jsonrpc.request('createAstraCam', cam).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error creating cam');
            console.log(error);
            return error;
        });
    };

    this.updateCam = function (cam) {

        return jsonrpc.request('updateAstraCam', cam).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error updating cam');
            console.log(error);
            return error;
        });
    };

    this.deleteCam = function (id) {

        return jsonrpc.request('deleteAstraCam', [ id ]).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('Error deleting cam');
            console.log(error);
            return error;
        });
    };
}]);