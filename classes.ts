class house{
    _roomCount : number;
    _floorNumber : number;
    _cost : number;

    constructor(pRoomCount:number, pFloorNumber:number, pCost:number)
    {
        this._roomCount = pRoomCount;
        this._floorNumber = pFloorNumber;
        this._cost = pCost;
    }

    getList(){
        console.log("Room count : " + this._roomCount);
        console.log("Floor number : "+this._floorNumber);
        console.log("Cost : " + this._cost);     
    }
}

let newHouse = new house(4, 3, 30000);
newHouse.getList();
