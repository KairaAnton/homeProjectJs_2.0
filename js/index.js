'use strict'

// Таски на условия

/*

function num(a){
    if(a % 5 === 0 && a % 3 === 0){
        return ('делится на 5 и на 3');
    } else if(a % 5 === 0){
        return ('делится на 5');
    } else if (a % 3 === 0){
        return('делится на 3');
    } else if( a % 2 === 0){
        return ('делится на 2');
    }

    return ('не отвечает условиям');
}

*/


// Таски на switch - ДЗ

// 1
/*
let num = prompt('Введите пору года: "1" - зима, "2" - весна, "3" - лето, "4" - осень')

switch (num){
    case '1':
        {
            console.log('зима');
        }
    break;

    case '2':
        {
            console.log('весна');
        }
    break;

    case '3':
        {
            console.log('лето');
        }
    break;

    case '4':
        {
            console.log('осень')
        }      
    default:{
        console.log('неверный ввод');
    }  
};
*/
// 2
/*
let month = prompt('Введите месяц от 1 до 12')

switch (month){

    case '1':
    case '2':
    case '12':
        {
            console.log('зима');
        }
    break;

    case '3':
    case '4':
    case '5':
        {
            console.log('весна');
        }
    break;

    case '6':
    case '7':
    case '8':
        {
            console.log('лето');
        }
    break;

    case '9':
    case '10':
    case '11':
        {
            console.log('осень')
        }      
    default:{
        console.log('неверный ввод');
    }  
};
*/
/*

let day = prompt('Введите номер дня недели от 1 до 7');

switch (day){
    case '1':
        {
            console.log('понедельник');
        }
    break;

    case '2':
        {
            console.log('вторник');
        }
    break;

    case '3':
        {
            console.log('среда');
        }
    break;

    case '4':
        {
            console.log('четверг');
        }
    break;

    case '5':
        {
            console.log('пятница');
        }
    break;

    case '6':
        {
            console.log('суббота');
        }
    break;

    case '7':
        {
            console.log('воскресенье');
        }
    break;

    default: {
        console.log('Неверный ввод');
    }
};

*/

// 4
/*
let day = prompt('Введите число месяца');

switch (day){
    case '1':
    case '2':    
    case '3':    
    case '4':    
    case '5':    
    case '6':    
    case '7':    
    case '8':    
    case '9':    
    case '10':
        {
            console.log('число из первой декады месяца');
        }
        break;

    case '11':    
    case '12':    
    case '13':    
    case '14':    
    case '15':    
    case '16':    
    case '18':    
    case '19':    
    case '20':
        {
            console.log('число из второй декады месяца');
        }
        break;
    
    case '21':    
    case '22':    
    case '23':    
    case '24':    
    case '25':    
    case '26':    
    case '28':    
    case '29':    
    case '30':    
    case '31':
        {
            console.log('число из третьей декады месяца');
        }
};
*/

//Таски на циклы (Only FOR)

// 1


/*
let factorialNumber = +prompt('Введите число для возведения в факториал');
let sum = 1;

for(let i = 1; i <= factorialNumber; i++){
    sum *= i;
}

console.log(sum);

*/

// 2




// 3

/*
let limOne = prompt('Введите нижний порог произведения чисел');
let limTwo = prompt('Введите верхний порог произведения чисел');
let composition = 1;
for(let i = limOne; i<= limTwo; i++){
        composition *= i;
}

console.log(composition);

*/

// Таски на функции

// 1

// после принятия num выводит всегда false, но если ввести число в консоле то работает норм
/*


let num = +prompt('является ли простым ваше число? Введите число');

const isSimpleNumber = (num) => num > 0 && num < 10;


console.log(isSimpleNumber());




// 2

 const checkMultiplisity = (a, b) => a % b === 0;

 console.log(checkMultiplisity());

 

 // 3

 const isTriangleCreated = (a,b,c) => a + b > c && a + c > b && b + c > a; 

*/


// 4
/*


function areaTriangle(a, b, c){
    let p = (a + b + c) / 2;
    let s;
    return s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

}



function areaRectangle(a, b){
    return a * b;
}

*/

// Таски на объекты

// 1.1

/*

const Student = {
    firstName: "Vasya",
    lastName: "Vasin",
    male: "gender",
    contactDetails: "+380664343434"
};

// 1.2

const University = {
    faculty: "IT",
    department: "military training"
};




//////////////////
*/
/*


const arr = [
    "0",
    "1",
    "2",
    undefined,
    "4",
    "5",
    "undefined",
    undefined,
    "8"
];

console.log(arr);

console.log(arr.length);

console.log("=============================");


for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){    
        console.log(i);
        }
}



console.log("=============================");


for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}

console.log("=============================");

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === undefined){
            console.log(i);
        }
    }

    console.log("=============================");

    
    function sumUndefined(){

        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === undefined){
                sum++;
            }
        }
        return sum;
    }

    console.log(sumUndefined());
   

    
*/

// 3.1

/*

function Book (autor, title, yearOfPublication, publisher){
    this.autor = autor,
    this.title = title,
    this.yearOfPublication = yearOfPublication,
    this.publisher = publisher
};

ElectronicBook.prototype = new Book();

function ElectronicBook(format, electronicNumber){
    this.format = format,
    this.electronicNumber = electronicNumber
};

const book = new ElectronicBook("srtser","wertwe");

console.log(book);

*/

// 4


/*
function MyArray(){
    this.length = 0;

    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];

        this.length++;
    }

    this.push = function(){

        for(let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
    
            this.length++;
        }

        
            return this.length;
    }




    this.pop = function(){
       let i = this.length -1;
        
        this.length -= 1;
        return myArr[i];
    }
    

    this.forEach = function(){
        for(let i = 0; i < this.length; i++){
            console.log(myArr[i])
        }
    }

}



const myArr = new MyArray("test", "test2", "test3", 24242, true);
*/