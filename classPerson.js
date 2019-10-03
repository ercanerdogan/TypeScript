var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "personName", {
        get: function () {
            return "Welcome : Mr. / Mrs. " + this._PersonName;
        },
        set: function (pName) {
            this._PersonName = pName;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.savePerson = function (personType) {
        console.log("Person " + personType + " saved");
    };
    return Person;
}());
var customer = /** @class */ (function (_super) {
    __extends(customer, _super);
    function customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    customer.prototype.makeOrder = function () {
        console.log("ordered");
    };
    return customer;
}(Person));
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    employee.prototype.payCheck = function () {
        console.log("paycheck done");
    };
    return employee;
}(Person));
var newCustomer = new customer();
newCustomer.savePerson("Customer");
newCustomer.makeOrder();
var newEmployee = new employee();
newEmployee.savePerson("Employee");
newEmployee.payCheck();
newCustomer.personName = "Ercan";
console.log(newCustomer.personName);
