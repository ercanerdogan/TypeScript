function add(x,y)
{
    return x + y;
}

function add2(x:number, y:number) : number{
    return x+y;
}

let resultAnonym = function (x:number, y:number):number{
    return x+y;
}

console.log(add(1,2));
console.log(add("Izmir",1));

console.log(add2(3,4));



console.log(resultAnonym(35,45));
