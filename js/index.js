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

let num = +prompt('является ли простым ваше число? Введите число');

const isSimpleNumber = (num) => (num > 0 && num<10);





// function isSimpleNumber(num){
//     if(num > 0 && num < 10){
//         return true;
//     } 
// }

console.log(isSimpleNumber());