export interface test{
    a();
}


export abstract class A implements test{
    a() {
        throw new Error("Method not implemented.");
    }
    abstract c();

}


export class B extends A{
    c() {
        throw new Error("Method not implemented.");
    }
    ahmed(){
        console.log('ahmed')
    }

}


export class TT extends B{
    ghoul(){
        console.log('ahmed')
    }
}

(function(){
    let b =  new B();

})()