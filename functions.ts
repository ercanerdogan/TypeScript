function add(x,y)
{
    return x + y;
}

function add2(x:number, y:number) : number{
    return x+y;
}

let resultAnonym = function (x:number, y:number=89):number{
    return x+y;
}

function add3(x:number, y?:number):number{

    if(y){
        return x+y;
    }
    else return x;
}

function invite(firstGuest:string, ...otherGuests:string[]):string{

    return firstGuest+ " - " + otherGuests.join("-");


}

console.log(add(1,2));
console.log(add("Izmir-",1));

console.log(add2(3,4));



console.log(resultAnonym(35,45));
console.log(resultAnonym(33));

console.log(add3(32));

console.log(add3(32,33));


console.log(invite("ercan", "burak", "caner", "john", "smith"))