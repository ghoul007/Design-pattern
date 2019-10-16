export interface Observer {
  notify(): any;
}

export class ExampelObserver implements Observer {
  constructor(private name: string) {}

  notify() {
    console.log(`Obsever said: ${this.name}`);
  }
}
