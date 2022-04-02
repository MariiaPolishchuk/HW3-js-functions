
  console.log('--- # 4')
function mySum(a, b) {
  return a + b
}
console.log(mySum(2, 3))

function myMinus(a, b) {
  return a - b
}
console.log(myMinus(5, 3))

function myMultiply(a, b) {
  return a * b
}
console.log(myMultiply(5, 2))

function myDivide(a, b) {
  return a / b
}
console.log(myDivide(300, 2))

console.log('--- # 5')
function myFunction(n) {
  let num = ''
  for (let i = 1; i <= n; i++) {
    num += i + ' '
  }
  return num
}
console.log(myFunction(5))

console.log('--- # 6')
function myFunction1(n) {
  let num = ''
  for (let i = n; i >= 1; i--) {
    num += i + ' '
  }
  return num
}
console.log(myFunction1(5))

console.log('--- # 7')
function pow(x, n) {
  let num = x
  for (let i = 1; i < n; i++) {
    num *= x
  }
  return num
}

function pow(x, n) {
  return x ** n
}
console.log(pow(2, 10))

console.log('--- # 8')
function isSmaller(a, b) {
  return a < b
}
console.log(isSmaller(4, 6))


console.log('--- # 9')
function isBigger(a, b) {
  return a > b
}
console.log(isBigger(4, 6))


