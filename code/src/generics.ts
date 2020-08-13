// 泛型函数
function log<T>(value: T): T {
  console.log(value);
  return value
}
// 调用
log<string[]>(['a', 'b', 'c'])
// 或者
log(['a', 'b', 'c'])

// 也可以使用泛型来定义一个函数类型
type Log = <T>(value: T) => T
let myLog: Log = log

// 泛型接口
// 泛型仅仅约束了一个函数
interface Log1 {
  <T>(value: T): T
}
// 也可以使用泛型来约束接口的其他成员，约束整个接口
interface Log2<T> {
  (value: T): T
}
// 使用
let myLog2: Log2<number> = log

// 或者默认类型
interface Log3<T = string> {
  (value: T): T
}
// 使用
let myLog3: Log3 = log

// 泛型类
class Log4<T> {
  // 泛型不能用于类的静态成员
  run(value: T) {
    console.log(value);
    return value
  }
}
let log4 = new Log4<number>()
log4.run(2)
// 当不指定类型参数的时候，value可以是任意的值
let log5 = new Log4()
log5.run('2')
log5.run(2)

// 泛型约束
interface Length {
  length: number
}
function Log6<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value
}