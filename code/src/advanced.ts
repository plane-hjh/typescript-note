// 自动推断为number类型
let a = 1

// 自动推断为联合类型
let b = [1, null]

// 上下文
window.onkeydown = (event) => {
  console.log(event);
}

// X兼容Y: X(目标类型) = Y(源类型 )
let s: string = 'a'
// 需要将tsconfig.json的strictNullChecks改成false
s = null

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any; 
  b: any;
  c: any;
}
let x1: X = {a: 1, b: 2}
let y1: Y = {a: 1, b: 2, c: 3}
// x 类型可以兼容 y1 类型，源类型必须具有目标类型的必要属性就可以被赋值，成员少的可以兼容成员多的
x = y1

// 函数兼容
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}
// 使用
// 1 参数个数必须要小于源函数个数，不能多
let handler1 = (a: number) => {}
hof(handler1)
// 错误
// let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 可选参数和剩余参数
let e = (p1: number, p2: number) => {}
let f = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {} 
// 固定参数是可以兼容可选参数和剩余参数的
e = f
e = c

// 可选参数和剩余参数不兼容固定参数的
// 可以设置strictFunctionTypes为false就可以了
f = e
c = e

// 2 参数类型必须要匹配
let handler3 = (a: string) => {}
// number类型和string类型不匹配
// hof(handler3) 

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d
// 不兼容
// 可以设置strictFunctionTypes为false就可以了
// p2d = p3d

// 3 返回值类型
let g = () => ({name: 'Alice'})
let i = () => ({name: 'Alice', location: 'guangdong'})
g = i
// 不兼容
// i = g

// 类型保护
enum Type {
  Strong,
  Week
}

class Java {
  helloJava () {
    console.log('hello world');
  }
}

class JavaScript {
  helloJavaScript() {
    console.log('hello JavaScript');
  }
}

function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  return lang
}

getLanguage(Type.Strong)