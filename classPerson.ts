class Person{
    private _PersonName:string;

    get personName():string{
        return "Welcome : Mr. / Mrs. " + this._PersonName;
    }

    set personName(pName:string){
        this._PersonName = pName;
    }

    savePerson(personType:string)
    {
        console.log("Person "+ personType +" saved");
    }
}

class customer extends Person{
    makeOrder()
    {
        console.log("ordered");
    }
}

class employee extends Person{
    payCheck()
    {
        console.log("paycheck done")

    }
}

let newCustomer = new customer();
newCustomer.savePerson("Customer");
newCustomer.makeOrder();


let newEmployee = new employee();
newEmployee.savePerson("Employee");
newEmployee.payCheck();

newCustomer.personName = "Ercan";
console.log(newCustomer.personName);