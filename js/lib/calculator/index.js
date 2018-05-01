var add = function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};

var subtract = function (number, from) {
    return from - number;
};

exports.add = add;
exports.subtract = subtract;
