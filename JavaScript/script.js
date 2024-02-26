// data types - ma'lumot turlari
// 1) primitive - string,number,boolean,null,undefined
// 2) noprimitive
// var
// let
// const

// var a = 'Asilbek';
// var b = 'Tojiyev';
// var c = 'Shaxriyor';
// var d = 7;
// var e = 15;
// var f = 25;
// var g = true;
// var h = false;
// var i;
// var j;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(j)
// console.log(i)
// console.log(d+e)
// console.log(f-e)

// console.log('Men' + ' ' + a + ' ' + b + ' ' + e + ' ' + 'yoshdaman.')

// for (x=2; x<=20; x=+2){
//     console.log(x)
// }

// alert("Assalomu aleykum, saytga xush kelibsiz.")
// var ism = prompt("Isming nima?")
// var manzil = prompt("Manziling nima?")
// console.log(ism)
// console.log(manzil);

// var result = prompt("Yoshingiz nechada?")
// if (result < 18){
//     alert("Hali vaqtli ukam")
// }
// else if(result > 80){
//     alert("Uje kech boboy")
// }
// else{
//     alert("Xush kelibsiz, amaki")
// }

// var num = prompt("Son kiriting")

// if (num > 4){
//     alert("4 sonidan katta")
// }
// else if(num < 4){
//     alert("4 sonidan kichik")
// }
// else{
//     alert("4 soniga teng")
// }

var user = {
    name: 'Asilbek',
    lastName: 'Tojiyev',
    age: 15,
    isMarried: false
}

console.log(user.name)

var fruits = ['Apple','Banana','Mango']

console.log(fruits[0])
// console.log(fruits[3])

var student = {
    name: 'Shaxriyor',
    lastName: 'Baxtiyorov',
    age: 15,
    isMarried: false,
    favouriteSubjects: ['English', 'Maths', 'IT']
}
console.log(student);
console.log(student.favouriteSubjects[1]);

var types = {
    number:28,
    string: 'Data',
    boolean: true,
    null: null,
    undefined: undefined,
    bigint: 9845398523987539n
}
console.log(types);

var user = "Asilbek" // is used on old version of JavaScript
user = "Rustam"
console.log(user);

let car = "BMW" // is used on new version of JavaScript
car = "Audi"
console.log(car);

const id = "AA0" // unchangeable
console.log(id);

// let a = 5;
// let b = 10;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a++); // increment
// console.log(a);
// console.log(b--); // decrement
// console.log(b);
// console.log(a**5); // daraja
// console.log(a ** 1 / 2); // ildiz

console.log(789*90);
console.log(900+700);
console.log(678**2);

