class Dog {
  constructor (name: string) {
    this.name = name  // 在构造函数中被初始化
  }
  name: string
  run() {

  }
  // 类成员的修饰符，默认都是public, 对所有人都是可见的
  // private 私有成员,不能被子类和实例调用。如果给constructor加上private，这个类既不能被实例化也不能被继承
  private pri () {}
  // protected 受保护成员，只能在类或者子类中被访问，不能在类的实例中被访问。如果给constructor加上protected，这个类不能被实例化只能被继承
  protected pro () {}
  // readonly 只读属性，一定要初始化
  readonly legs: number = 4
  // static 静态成员，只能通过类名来调用，不能通过实例来调用
  static food: string = 'bones'
}

// 无论是在ts还是js中，类的属性都是实例属性而不是原型属性，类成员的方法都是原型的方法
console.log(Dog.prototype); // 只有run方法，没有name属性
let dog = new Dog('peter');
console.log(dog); // 只有name属性，没有run方法

// ts中，实例的属性必须要有初始值，或者在构造函数中被初始化
// 初始值
// class Dog1 {
//   constructor (name: string) {

//   }
//   name: string = 'dog'
//   run() {

//   }
// }
// 或者可选属性
// class Dog2 {
//   constructor (name: string) {

//   }
//   name?: string
//   run() {

//   }
// }


// 类的继承
class Husky extends Dog {
    // 除了类的成员可以添加修饰符之外，构造函数的参数也可以添加修饰符，作用是将参数自动变成实例的属性，比如age
  constructor(name: string, color: string, public age: number) {
    // 派生类的构造函数必须包含super的调用
    super(name) // 代表父类的实例
    // 初始化属性，调用this必须在super后面调用
    this.color = color
  }
  // 子类添加自己的属性
  color: string
}


// 抽象类和多态
// 使用 abstract 关键字定义一个抽象类
abstract class Animal {
  eat() {
    console.log('eat');
  }
  // 抽象方法，不必有实现。明知道子类中会有不同的实现了
  abstract sleep(): void
}
// 抽象类只能被继承，不能被实例化
// let animal = new Animal()

class Dog3 extends Animal {
  constructor () {
    super()
  }
  // 父类抽象方法的实现
  sleep() {
    console.log('dog sleep');
  }
}
let dog3 = new Dog3()
dog3.eat()

// 多态、抽象方法的不同的实现
class Cat extends Animal {
  sleep() {
    console.log('cat sleep');
  }
}
let cat = new Cat()

// 程序执行的时候执行不同的方法，这样就成了多态
let animals: Animal[] = [dog3, cat]
animals.forEach(i => {
  i.sleep()
})

// this
class WorkFlow {
  step1 () {
    return this
  }
  step2 () {
    return this
  }
}
// 实现了链式调用
new WorkFlow().step1().step2()

// 也可以使用this实现多态。这个多态提醒在父类可以返回this，子类也可以返回this
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2()

// 类与接口的关系
interface Human {
  name: string;
  eat(): void;
}
// 类实现接口的时候，必须声明接口中声明的所有属性
// 接口只能约束类的公有成员，不能约束类的构造函数
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {

  }
}

// 接口的继承
interface Man extends Human {
  run(): void
}
interface Child {
  cry(): void
}
// 可以继承多个接口，用逗号分隔
interface Boy extends Man, Child {}
// 需要包含以下属性: run, name, eat, cry
let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// 接口继承类，把类的成员都抽象出来，只继承类的结构，不继续类的实现
// 不仅抽离了公有成员，还抽离了私有成员和受保护成员
class Auto {
  state = 1
  // private state2 = 2
}
interface AutoInterface extends Auto {

}

class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {

}