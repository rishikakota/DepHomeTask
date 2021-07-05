
exports.addition = function (args) {
    var result = 0;
    args.forEach(element => {
        result += element;
    });
    return result;
};

exports.subtraction = function (args) {
    if (args.length > 2) {
        return "Invalid number of arguments";
    }
    return args[0] - args[1]
};

exports.multiplication = function (args) {
    var result = 1;
    args.forEach(element => {
        result *= element;
    });
    return result;
};

exports.division = function (args) {
    if (args.length > 2) {
        return "Invalid number of arguments";
    }

    try {
        if (args[1] == 0) {
            throw 'Error Occured! Division By zero';
        }
        return args[0] / args[1]
    }
    catch (e) {
        return e;
    }
}