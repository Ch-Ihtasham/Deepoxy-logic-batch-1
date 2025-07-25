// let a=1
// while(a<=5){
//     console.log(a)
//     a++
// }

// do while loop
// let b = 10
// do {
//     console.log(b)
//     b++
// } while (b <= 5)

// for loop
// for (let i = 1; i < 5; i++) {
//     console.log(i)
// }

// let array = [1, 2, 3, 4, 5]
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array)
// for (let value in array) {
//     console.log(array[value])
// }
// let name = 'nabeel'
// for (let n of name) {
//     console.log(n)
// }
// let obj = {
//     name: 'gull',
//     class: '10',
//     section: 'A',
//     rollNo: 12

// }
// console.log(obj['name'])
// for (let key in obj) {
//     console.log(key, obj[key])
//     // console.log(key)
// }
// let name = 'nabeel '
// let fName = 'imran'
// console.log(name)
// console.log(fName)
// console.log(name, fName)
// console.log(name + fName)
// console.log('my name is',name,'my father name is',fName)
// console.log("im 20 year\"s old")
// console.log(`my name is ${name}'"`)

function sum(a, b) {
    console.log(a + b)
}
sum(3, 4)
let arrowFunction = (a, b) => {
    console.log(`the sum of the value is ${a + b}`)
}
arrowFunction(4, 5)
// let obj = {
//     naem: [1, 2, 3],
//     name: function () {
//         console.log('this is our function of obj')
//     }
// }
// console.log(obj.name)
const obj = {
  name: 'nabeel',
  fullname: function() {
    return this.name; // `this` refers to `obj`
  }
};
console.log(obj.fullname())
