import { Singleton } from "./Singleton";

(function () {

    let instance1: Singleton = new Singleton().getInstance()
    let instance2: Singleton = new Singleton().getInstance()

    if (instance1 === instance2) {
        console.log('same instance')
    } else {
        console.log('diferent instance')
    }
})()