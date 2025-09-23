console.log("Test...")

function sum(a, b) {
    return a + b
}

let sum2 = function(a, b) {
    return a + b
}

console.log(sum(12, 10))
console.log(sum2(2,10))

setTimeout(function() {
    console.log("2 seconds have passed")
    console.log(sum2(2003, 2004))
}, 2000)

let sum3 = (a, b) => a + b
let squared = x => x * x

console.log(sum3(1, 2))
console.log(squared(10))

let button = document.getElementById("button")
let button2 = document.getElementById("button2")

button.addEventListener("click", () => {
    console.log("Test")
})

function hello(name) {
    console.log("Hello " + name)
}

//这样写会立即调用函数导致不起作用
//button2.addEventListener("click", hello("卿"))

button2.addEventListener("click", () => hello("卿"))

const letters = ["A", "B", "C", "D"]
const numbers = [1, 2, 3, 4]

let squaredNumbers = numbers.map(n => n*n)
console.log(squaredNumbers)

//&&左边是判断条件，如果成立输出&&右边内容，如果失败输出左边内容（True/False）
//短路求值用于简化安全条件赋值
let age = 16
let adultAge = age >= 18 && age

console.log(adultAge)

function takeNumbers(x, y, z, w) {
    return x*y*z*w
}

console.log(takeNumbers(...numbers))

function printEverything(...stuff){
    console.log("Printing Everything:")
    stuff.forEach(x => {
        console.log(x)
    })
    
}

printEverything("你好", 5, 77, "wcq", {0: "asda"}, [4, 5, 6], letters)

let data = {
    name: "Run",
    age: 21,
    addresss: {
        street: "foo",
        code: "15100",
        city: {
            name: "lahti",
            status: "alive"
        } 
    }
}

//console.log(data.address.city.name)

//短路求值用于安全访问
if(data && data.address && data.address.city && data.address.city) {
    console.log(data.address.city.name)
} else {
    console.log("Failed")
}

console.log(data?.address?.city?.name)

let a = 0 //假值（falsy）
let b = null //空值 （nullish）
let c = "text" // 真值（truthy）


// && 遇到假值就会返回假的
// || 遇到假值就会返回真值
// ?? 只对null和undefined敏感，面对 0 或者 null 值会保留
console.log(a && c) // 0
console.log(a || c) // text
console.log(a ?? c) // 0

console.log(b && c) // null
console.log(b || c) // text
console.log(b ?? c) // text

