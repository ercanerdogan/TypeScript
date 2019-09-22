function add(x, y) {
    return x + y;
}
function add2(x, y) {
    return x + y;
}
var resultAnonym = function (x, y) {
    if (y === void 0) { y = 89; }
    return x + y;
};
function add3(x, y) {
    if (y) {
        return x + y;
    }
    else
        return x;
}
function invite(firstGuest) {
    var otherGuests = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherGuests[_i - 1] = arguments[_i];
    }
    return firstGuest + " - " + otherGuests.join("-");
}
console.log(add(1, 2));
console.log(add("Izmir-", 1));
console.log(add2(3, 4));
console.log(resultAnonym(35, 45));
console.log(resultAnonym(33));
console.log(add3(32));
console.log(add3(32, 33));
console.log(invite("ercan", "burak", "caner", "john", "smith"));
