export interface Strategy{
    execute(): void;
}

export class ConcreteStrategy1 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy1 is being called");
    }
}


export class ConcreteStrategy2 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy2 is being called");
    }
}

export class ConcreteStrategy3 implements Strategy {
    public execute(): void {
        console.log("`execute` method of ConcreteStrategy3 is being called");
    }
}


export class Context{
    strategy: Strategy;
    constructor(strategy: Strategy){
        this.strategy = strategy
    }

    public executeStrategy(){
        this.strategy.execute();
    }
}


(function(){

    let context: Context = new Context(new ConcreteStrategy1());
    context.executeStrategy();

    context = new Context(new ConcreteStrategy2());
    context.executeStrategy();

    context = new Context(new ConcreteStrategy3());
    context.executeStrategy();


})()