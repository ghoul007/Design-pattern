import { Observer } from "./Observer";

export class Subject {
  private observers: Observer[] = [];
  constructor() {}

  register(observer: Observer) {
    this.observers.push(observer);
  }

  unregister(observer: Observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notify() {
    this.observers.forEach(o => o.notify());
  }
}
