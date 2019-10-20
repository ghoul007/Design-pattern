import { Circle, Rectangle } from "./decorator";
import { RedShapeDecorator } from "./RedShapeDecorator.1";

(function() {
  let circle = new Circle();

  let redCircle = new RedShapeDecorator(new Circle());

  let redRectangle = new RedShapeDecorator(new Rectangle());
  console.log("Circle with normal border");
  circle.draw();

  console.log("\nCircle of red border");
  redCircle.draw();

  console.log("\nRectangle of red border");
  redRectangle.draw();
})();
