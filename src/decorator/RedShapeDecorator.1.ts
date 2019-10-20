import { ShapeDecorator, Shape } from "./decorator";

export class RedShapeDecorator extends ShapeDecorator {
  constructor(shape: Shape) {
    super(shape);
  }
  draw() {
    this.shape.draw();
    this.setRedBorder(this.shape);
  }
  private setRedBorder(decoratedShape: Shape) {
    console.log("Border Color: Red");
  }
}
