abstract class CreditBase{
    constructor(){

    }

    save(){
        console.log("Credit operation saved.");
    }

    abstract computeCredit();
}

class customerCredit extends CreditBase{
    constructor(){
        super();

    }

    computeCredit(){
        console.log("Credit computed by customer credit Type");
    }

}

class MortgageCredit extends CreditBase{
    constructor(){
        super();
    }

    computeCredit(){
        console.log("Credit compute by Mortgage credit type");
    }

    makeExtraOperation(){
        console.log("Some additional operation for mortgage computing")
    }
}


let custCredit = new customerCredit();
custCredit.computeCredit();
custCredit.save();

let mortCredit = new MortgageCredit();
mortCredit.computeCredit();
mortCredit.makeExtraOperation();
mortCredit.save();

let someCredit:CreditBase
someCredit = new customerCredit();


let anotherCredit:CreditBase
anotherCredit=new MortgageCredit();