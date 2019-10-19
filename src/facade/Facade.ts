export interface Shape {
    draw(): void
}

export class Rectangle implements Shape {
    draw() {
        console.log(' Rectangle Draw')
    }
}

export class Square implements Shape {
    draw() {
        console.log(' Square Draw')
    }
}

export class Circle implements Shape {
    draw() {
        console.log(' Circle Draw')
    }
}

export class ShapeFacade {

    private circle: Circle;
    private square: Square;
    private rectangle: Rectangle;

    constructor() {
        this.circle = new Circle();
        this.rectangle = new Rectangle();
        this.square = new Square()
    }

    drawCircle() {
        this.circle.draw();
    }

    drawRectangle() {
        this.rectangle.draw();
    }

    drawSquare() {
        this.square.draw()
    }


}


(function () {
    const sh = new ShapeFacade();
    sh.drawCircle();
    sh.drawRectangle();
    sh.drawSquare();

})()