export interface Shape {
  draw();
}

export class Rectangle implements Shape {
  draw() {
    throw new Error("Method not implemented.");
  }
}
export class Circle implements Shape {
  draw() {
    throw new Error("Method not implemented.");
  }
}

export abstract class ShapeDecorator implements Shape {
  constructor(protected shape: Shape) {}
  draw() {
    this.shape.draw();
  }
}
