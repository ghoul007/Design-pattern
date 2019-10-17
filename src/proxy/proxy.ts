export interface Image {
    fetch();
}


export class RealImage implements Image {
    constructor(private image: string){}
    fetch() {
        console.log(`Real Image ${this.image}`);
    }
}


export class ProxyImage implements Image {
    realImage: RealImage;

    constructor() {

    }

    fetch() {
        if (this.realImage === null || this.realImage == undefined) {
            this.realImage = new RealImage('image1');
        }
        console.log('traitment....');
        this.realImage.fetch();
    }
}