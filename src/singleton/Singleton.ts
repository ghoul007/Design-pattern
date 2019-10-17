export class Singleton {

    static instance: Singleton;

    getInstance() {
        if (Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        
        return Singleton.instance;
    }

}