// 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length 
}

// 常量枚举，用const 来定义的
const enum Month {
  Jan,
  Feb,
  Mar
}

// 枚举类型
enum E {
  a,
  b
}

enum F {
  a = 0,
  b = 1
}

enum G {
  a = 'apple',
  b = 'banana'
}