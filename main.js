// part 1 Question 1
console.log("!Hello ,JS")
//Question 2
const MyName = "Reut Juli"
const address = "Mabuim"
const year =2026
console.log(MyName +"\n"+ address +"\n"+ year);
//Question 3
const city = "Mabuim"
console.log(city);
//Question 4
let score =0 
console.log(score);
score=10
console.log(score);
//Question 5
console.log("score",score);
//Question 6 מודפס בדיוק מה שביקשו בתרגיל 
// part 2 Question 7
const pi = 3.14
//pi= 3
//console.log(pi);
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\ortal\Desktop\java\01\main.js:21:3)
//     at Module._compile (node:internal/modules/cjs/loader:1358:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
//     at Module.load (node:internal/modules/cjs/loader:1208:32)
//     at Module._load (node:internal/modules/cjs/loader:1024:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49     
//Question 8 עובד כי זה לא קונסט ואנחנו באותו בלוק 
let color= "blue"
color="red"
console.log(color)
//Question 9 לא נותן כי כבר קיים משתנה באותו שם 
let a =1
//let a=2
//Question 10 מודפס 2 הוא דרס ולא משתשמים כי אפשר 2 משתנים באותו שם ויגרום לבעיות 
var b=1
var b=2 
console.log(b)
//Question 11 בהתחלה undefined ואז 5 
 let total
 console.log(total)
 total=5
 console.log(total)
//Question 12
const Data = "26.05.2001"
let point =0
let LastNaem= "Avitan"
let counter=0
// part 3 Question 13
// לא חוקי:
// 2fast       
// my var      
// let         
// first-name  
// class 
 // חוקי:
// userName
// _count
// $price
// totalPrice
// Total
//Question 14
// לא חוקי:
// TowFast       
// MyVar      
// Mylet         
// firstName  
// Myclass 
//Question 15 גאווה יודעה להבדיל בין אותיות גדולות לקטנות 
let age14 =20
let Age14 =10 
//Question 16 שם שמובן מה המשעות של הדבר זה שם טוב 
let price
let isConnected 
let numChild
// part 4 Question 17
const text17 = "Hello";
const number17 = 25;
const boolean17 = true;
console.log(text17);
console.log(number17);
console.log(boolean17);
// Question 18
const string18a = 'Hello';
const string18b = "Hello";
const string18c = `Hello`;
console.log(string18a);
console.log(string18b);
console.log(string18c);
// Question 19
const sentence19a = "it's me";
const sentence19b = 'it\'s me';
console.log(sentence19a);
console.log(sentence19b);
// Question 20 לשניהם אותו טיפוס
const num20a = 7;
const num20b = 7.5;
console.log(num20a);
console.log(num20b);
// Question 21 % מחזיר את השארית של החלוקה.
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 4);
console.log(10 % 3);
// Question 22
const isStudent22 = true;
const isVegan22 = false;
console.log(isStudent22);
console.log(isVegan22);
// Question 23 התוצאות  הן אמת ושקר 
console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
// Question 24 מחרוזת ריקה בלי תווים ורחחו זה תו 1
const emptyString24 = '';
const spaceString24 = ' ';
console.log(emptyString24);
console.log(spaceString24);
// Question 25 יודפסundefined  
let u25;
console.log(u25);
// Question 26 נל בכונה אין ערך לא מוגדר לא שמו ערך
const middleName26 = null;
console.log(middleName26);
// Question 27
console.log(null == undefined);
console.log(null === undefined);
// Question 28
// string: "Hello"
// number: 10
// boolean: true
// null: null
// undefined: undefined
// Question 29
console.log(typeof 42);
console.log(typeof 'hello');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
// Question 30 מחזיר 0
console.log(typeof null);
//Question 31 מחזיר 
console.log(typeof NaN);
// Question 32 מחזיר מחרוזת 
console.log(typeof (typeof 42));
// Question 33
let age33;
const name33 = "Reut";
const vegan33 = true;
const middleName33 = null;
const value33 = undefined;
console.log("age33:", typeof age33);
console.log("name33:", typeof name33);
console.log("vegan33:", typeof vegan33);
console.log("middleName33:", typeof middleName33);
console.log("value33:", typeof value33);
// Question 34 משתנה לפי הערך ששמנו 
let value34 = 5;
console.log(typeof value34);
value34 = '5';
console.log(typeof value34);
// Question 35
const name35 = "Reut";
const age35 = 25;
console.log(`My name is ${name35} and I am ${age35} years old.`);
// Question 36 יותר ברור
console.log("My name is " + name35 + " and I am " + age35 + " years old.");
// Question 37
console.log(`The sum of 3 and 4 is ${3 + 4}.`);
// Question 38
const price38 = 80;
const quantity38 = 3;
console.log(`Total: ${price38 * quantity38}`);
// Question 39
console.log(`Hello
World`);
console.log("Hello\nWorld");
// Question 40
const isVegan40 = true;
const numberOfKids40 = 2;
console.log(`Vegan: ${isVegan40}, kids: ${numberOfKids40}`);
// Question 41
console.log(Number('42'));
console.log(typeof Number('42'));
// Question 42
console.log(String(123));
console.log(typeof String(123));
// Question 43 לא נותן להמיר את המחרוזת למספר לכל לא מספר מחזיר
console.log(Number('12px'));
console.log(typeof Number('12px'));
// Question 44
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(''));
// Question 45
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
// Question 46  בלי המרה מחרוזת עם המרה מספר
const input46 = '25';
console.log(input46 + 5);
console.log(Number(input46) + 5);
// Question 47 הראשון משרשר והשאר פעולות מתמתיות 
console.log('5' + 1);
console.log('5' - 1);
console.log('5' * 2);
console.log('10' / 2);
// Question 48 55
console.log('5' + 5);
// Question 49 3
console.log('5' - 2);
// Question 50 3
console.log('5' - 2);
// Question 51 2
console.log(true + 1);
// Question 52 55 מחרוזת
console.log(typeof (5 + '5'));
// Question 53 undefined
console.log(typeof null, typeof undefined);
// Question 54
let x54; undefined *2
console.log(x54, typeof x54);
// Question 55 NaN number
console.log(Number('abc'), typeof Number('abc'));
// Question 56 שקר זה בול מול מחרוזת 
console.log(true === 'true');
// Question 57
// const n57 = 5;
// n57 = 6;
// console.log(n57);
// מתקבלת שגיאה כי אי אפשר להציב ערך חדש במשתנה const
// TypeError: Assignment to constant variable
// Question 58
const name58 = "Reut";
const age58 = 25;
const city58 = "Mabuim";
const isStudent58 = true;
const likesCoffee58 = true;
console.log(`Name: ${name58}
Age: ${age58}
City: ${city58}
Student: ${isStudent58}
Likes coffee: ${likesCoffee58}`);
console.log("name:", typeof name58);
console.log("age:", typeof age58);
console.log("city:", typeof city58);
console.log("isStudent:", typeof isStudent58);
console.log("likesCoffee:", typeof likesCoffee58);
// Question 59
const product159 = "Shirt";
const price159 = 50;
const quantity159 = 2;

const product259 = "Book";
const price259 = 30;
const quantity259 = 1;

const product359 = "Pen";
const price359 = 5;
const quantity359 = 3;

const total159 = price159 * quantity159;
const total259 = price259 * quantity259;
const total359 = price359 * quantity359;
const totalAll59 = total159 + total259 + total359;
console.log(`Invoice:
${product159}: ${price159} x ${quantity159} = ${total159}
${product259}: ${price259} x ${quantity259} = ${total259}
${product359}: ${price359} x ${quantity359} = ${total359}
Total: ${totalAll59}`);
// Question 60
const celsius60 = 25;
const fahrenheit60 = celsius60 * 9 / 5 + 32;
console.log(`${celsius60}C = ${fahrenheit60}F`);
console.log(typeof fahrenheit60);
// Question 61
const ageInput61 = '30';
const heightInput61 = '1.75';
console.log(ageInput61, typeof ageInput61);
console.log(heightInput61, typeof heightInput61);
const ageNumber61 = Number(ageInput61);
const heightNumber61 = Number(heightInput61);
console.log(ageNumber61, typeof ageNumber61);
console.log(heightNumber61, typeof heightNumber61);
// Question 62
const value162 = "Hello";
const value262 = "JavaScript";
const value362 = 10;
const value462 = 25.5;
const value562 = true;
const value662 = false;
const value762 = null;
let value862;
const value962 = "Reut";
const value1062 = 0;
console.log("Value:", value162, "Type:", typeof value162);
console.log("Value:", value262, "Type:", typeof value262);
console.log("Value:", value362, "Type:", typeof value362);
console.log("Value:", value462, "Type:", typeof value462);
console.log("Value:", value562, "Type:", typeof value562);
console.log("Value:", value662, "Type:", typeof value662);
console.log("Value:", value762, "Type:", typeof value762);
console.log("Value:", value862, "Type:", typeof value862);
console.log("Value:", value962, "Type:", typeof value962);
console.log("Value:", value1062, "Type:", typeof value1062);




// const vegan = true
// const NumOfKids = 0
// console.log(`I am ${age} years old`);
// console.log(`My name is ${MyName}`);
// console.log("Address:", address);
// console.log("Vegan:", vegan);
// console.log("Number of children:", NumOfKids);
// console.log(
//     "=== Data Types ===\n" +
//     "age Type: " + typeof age + "\n" +
//     "name Type: " + typeof MyName + "\n" +
//     "Address Type: " + typeof address + "\n" +
//     "Vegan Type: " + typeof vegan + "\n" +
//     "Number of children Type: " + typeof NumOfKids
// );