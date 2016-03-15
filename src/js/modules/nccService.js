nccApp.service('NCC', ['jsonrpc', function (jsonrpc) {

    var multipliers = [0x1000000, 0x10000, 0x100, 1];

    this.ip2long = function (ip) {
        var longValue = 0;
        ip.split('.').forEach(function (part, i) {
            longValue += part * multipliers[i];
        });
        return longValue;
    };

    this.long2ip = function (longValue) {
        return multipliers.map(function (multiplier) {
            return Math.floor((longValue % (multiplier * 0x100)) / multiplier);
        }).join('.');
    };

    this.getItemById = function (id, items) {
        for (var i in items) {
            if (items[i].hasOwnProperty('id'))
                if (items[i].id == id) return items[i];
        }
        return null;
    };

    this.apiRequest = function (request, server) {
        var login = 'admin';
        var password = 'CtrhtnysqGfhjkm';

        var apiKey = CryptoJS.MD5(CryptoJS.MD5(login) + password).toString();

        if(typeof( server) == 'undefined'){
            server = nccProperties.API.servers[0].name;
        }

        //console.log('apiRequest: server='+server+' ' + request.method + ' with apiKey=' + apiKey);

        return jsonrpc.request(server, request.method, [apiKey].concat(request.data)).then(function (result) {
            return result;
        }).catch(function (error) {
            console.log('apiRequest error');
            console.log(error);
            return error;
        });
    };
}]);