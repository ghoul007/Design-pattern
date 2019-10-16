import { ExampelObserver, Observer } from "./Observer";
import { Subject } from "./Subject";

class testSub extends Subject {
  private movies: string[] = [];

  public addMovie(movie: string) {
    this.movies.push(movie);
    this.notify();
  }
}

new (class Main {
  constructor() {
    let testSubject = new testSub();
    let obs1: Observer = new ExampelObserver("ahmed");
    let obs2: Observer = new ExampelObserver("ghoul");

    testSubject.register(obs1);
    testSubject.register(obs2);
    testSubject.addMovie("ghoul");
  }
})();
