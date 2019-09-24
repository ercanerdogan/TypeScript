class Person{
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

