var house = /** @class */ (function () {
    function house(pRoomCount, pFloorNumber, pCost) {
        this._roomCount = pRoomCount;
        this._floorNumber = pFloorNumber;
        this._cost = pCost;
    }
    house.prototype.getList = function () {
        console.log("Room count : " + this._roomCount);
        console.log("Floor number : " + this._floorNumber);
        console.log("Cost : " + this._cost);
    };
    return house;
}());
var newHouse = new house(4, 3, 30000);
newHouse.getList();
