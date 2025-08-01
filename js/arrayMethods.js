let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let a = 'bilal a'
let b = 'bilal b'
let c = 'bilal c'
array.forEach((a, b, c) => {
    console.log(a)
    // return a

})
let ans = array.map((v, i, a) => {
    return v % 2 == 0
})
console.log(ans)
let odd = array.filter((v) => {
    return v % 2 == 1
})
console.log(`odd values of an array are ${odd}`)
let ev = array.filter(x => x % 2 == 0)
console.log(`even values of an array are ${ev}`)

let sum = array.reduce((acc, cv) => {
    return acc = acc + cv
})

console.log(sum)
let abc = array.find((v, i) => {
    return v == 12
})

console.log(abc)
