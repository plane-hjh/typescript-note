// 函数定义
function add4 (x: number, y: number) {
  return x + y
}

// 通过变量来定义
let add5: (x: number, y: number) => number

// 通过类型别名来定义
type add6 = (x: number, y: number) => number

// 通过接口来定义
interface add7 {
  (x: number, y: number): number
}

// 在 `typescript` 中形参和实参必须一一对应，少一个不行，多一个不行，必须一一对应
// add5(1, 2, 3)  报错

// 如果有时候参数不确定的时候，可以使用可选参数，使用`?` 来标识。注意的是可选参数必须位于zui 
function add8 (x: number, y?: number) {
  return y ? x + y : x
}
add8(1)

// 注意的是可选参数必须位于最后面,必选参数不能位于可选参数后。下面是错误示范
// function add8 (x: number, y?: number, z: number,) {
//   return y ? x + y : x
// }

// 设置默认值，必选参数中间的默认参数不可以不传，必选参数后面的参数可以不传
function add9 (x: number, q = 1, y: number, z = 0) {
  return x + y + x + q
}

// 设置剩余参数
function add10 (x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(add10(1, 2, 3, 4, 5));

// 函数重载
// 先定义一系列的名称相同的函数声明，会先尝试定义，匹配直接定义。不匹配直接向下查找
function add11 (...rest: number[]): number;
function add11 (...rest: string[]): string;
function add11 (...rest: any[]): any {
  let first = rest[0]
  if(typeof first === 'string') {
    return rest.join('')
  } else {
    return rest.reduce((pre, cur) => pre + cur)
  }
}