nccApp.service('NCC', ['jsonrpc', function (jsonrpc) {

    var multipliers = [0x1000000, 0x10000, 0x100, 1];

    this.ip2long = function(ip) {
        var longValue = 0;
        ip.split('.').forEach(function(part, i) {longValue += part * multipliers[i];});
        return longValue;
    };

    this.long2ip = function(longValue) {
        return multipliers.map(function(multiplier) {
            return Math.floor((longValue % (multiplier * 0x100)) / multiplier);
        }).join('.');
    };

    this.getItemById = function(id, items){
        for(i in items){
            if(items[i].hasOwnProperty('id'))
                if(items[i].id == id) return items[i];
        }
        return null;
    }
}]);