# Design patterns


initialize for each folders
```shell

npx tsc --init
npx tsc
node dist/index.js
```

or 

```
ts-node main.ts

```



## Observer
 Provide a callback for notification of events/changes to data
## Proxy 
What problems can the Proxy design pattern solve? 

* The access to an object should be controlled.
* Additional functionality should be provided when accessing an object.
- When accessing sensitive objects, for example, it should be possible to check that clients have the needed access rights.

[See more](https://en.wikipedia.org/wiki/Proxy_pattern)

## Singleton

Restricts the instantiation of a class to one "single" instance


## Factory

Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
----
When to use
* You can't know the type of object you want to create until runtime.
* You want to encapsulate the object creation logic if some complexity or business logic takes place, or for easier extraction and modification later on.

## Adapater
The Adapter pattern is used to be an adapter/bridge between classes. The intent is:

* If we want to use an existing library that has an interface different than our code requires.
* If we want to easily change the existing libraries or have more than one used in the code, so we can define one Adapter interface, and adapt any number of different libraries in the different Adapter classes (Open / Closed Principle).
* not to change your existing classes, but add an adapter so that the classes remain the same


## Facade

Facade defines a higher-level interface (more complex body) that make the subsystems easier to use and consume.

## Strategy

Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.