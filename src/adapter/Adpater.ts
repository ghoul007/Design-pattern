export class Calculator{
    public static getSum(a: number, b: number):number{
        return a + b;
    }
}

export interface ICalculatorAdpater{
    sum(a: number, b: number): number;
}


export class CalculAdapter implements ICalculatorAdpater{
    sum(a: number, b:number): number{
        return Calculator.getSum(a,b);
    }
}


(function(){
    let calulAdapter = new CalculAdapter();
    console.log(calulAdapter.sum(5, 7));
})()