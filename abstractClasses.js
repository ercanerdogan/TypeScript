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
var CreditBase = /** @class */ (function () {
    function CreditBase() {
    }
    CreditBase.prototype.save = function () {
        console.log("Credit operation saved.");
    };
    return CreditBase;
}());
var customerCredit = /** @class */ (function (_super) {
    __extends(customerCredit, _super);
    function customerCredit() {
        return _super.call(this) || this;
    }
    customerCredit.prototype.computeCredit = function () {
        console.log("Credit computed by customer credit Type");
    };
    return customerCredit;
}(CreditBase));
var MortgageCredit = /** @class */ (function (_super) {
    __extends(MortgageCredit, _super);
    function MortgageCredit() {
        return _super.call(this) || this;
    }
    MortgageCredit.prototype.computeCredit = function () {
        console.log("Credit compute by Mortgage credit type");
    };
    MortgageCredit.prototype.makeExtraOperation = function () {
        console.log("Some additional operation for mortgage computing");
    };
    return MortgageCredit;
}(CreditBase));
var custCredit = new customerCredit();
custCredit.computeCredit();
custCredit.save();
var mortCredit = new MortgageCredit();
mortCredit.computeCredit();
mortCredit.makeExtraOperation();
mortCredit.save();
