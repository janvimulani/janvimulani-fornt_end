// 1.Add two numbers input by the user

// let num1 = prompt("enter number1: ");
// let num2 = prompt("enter number2: ");

// alert(Addition is: ${Number(num1) + Number(num2)});

// 2.Calculate the area of a rectangle

// let length = 10;
// let width = 50;

// console.log(Area of rectangle is ${length * width});

// let area = calculateRectangleArea(length, width);
// console.log("The area of the rectangle is: " + area);


// 3.Convert temperature from Celsius to Fahrenheit

// let celsius = 27;
// let fahrenheit = ((celsius * 9) / 5) + 32;
// console.log("Fahrenheit is : ", fahrenheit);

// 4.Find the remainder when one number is divided by another

// console.log(10 % 6);

// 5.Calculate the power of a number

// let value = 5;
// let power = 3;

// console.log(Power of a number ${value} is ${value ** power});

// 6. Combination of Arithmetic Operators

// {
//     console.log(5 + 5);
//     console.log(25 - 5);
//     console.log(25 * 25);
//     console.log(10 / 5);
//     console.log(10 % 5);
//     console.log(12 ** 2);
// }

// 7.Comparing Numbers [5 number]

let n1 = 10;
let n2 = 55;

if (n1 > n2) {
    console.log("n1 is greater");
} else if (n1 < n2) {
    console.log("n2 is greater");
} else if (n1 == n2) {
    console.log("n1 is equal to n2");
} else {
    console.log("n1 is not equal to n2");
}

// 8.Comparing Strings [5 String]

// {
//     let val1 = "javascript";
//     let val2 = "Javascript";

//     console.log(val1 == val2);
//     console.log(val1 === val2);
// }

// 9.Comparing Different Types [4 types]

// {
//     let compareX = 10;
//     let compareY = "10";
//     let str = "10";
//     let ud;
//     let value = null;

//     console.log(compareX == compareY);
//     console.log(compareX === compareY);
//     console.log(compareY === str);
//     // console.log(typeof ud);
//     console.log(ud === value);
//     console.log("0" === false);
// }

// 10. Using Multiple Operators [4 types]

// {
//     console.log(5 + 2 - 3);
//     console.log((10 + 20) * 10);

//     let a = 15;
//     let b = 700;
//     let c = 92;
    
//     if ((a > b) && (a > c)) {
//         console.log("a is greater than b and c");
//     } else if ((b > a) && (b > c)) {
//         console.log("b is greater than a and c");
//     } else if ((c > a) && (c > b)) {
//         console.log("c is greater than a and b");
//     } else {
//         console.log("Invalid");
//     }

//     console.log((8 * 6) + (79 / 3));
// }



// method practice

// 6. Trim extra spaces from a string using trim().

{
    let test = '     hello     ';
    console.log(test);
    console.log(test.trim()); 
}

// 7. Extract the first 10 characters of a string using slice() or substring().

{
    let demo = 'janvi mulani jiteshbhai';
    console.log(demo.slice(0,10));
    console.log(demo.substring(0,10));

}

// 8. Find the position of the first and last occurrence of a characterin a string using indexOf() and lastIndexOf().

{
    let newStr = 'just chill';
    console.log(newStr.indexOf('s'));
    console.log(newStr.lastIndexOf('l'));

}

// 9. Split a sentence into an array of words using split() and jointhem back using join().
{
    let str = 'This is javascript, and javascript is scripting language, jijimkmkmj';
    console.log(str);
    let str1 = str.split(',');
    console.log(str1);
    console.log(str1.join());

}

// 10. Check if a string starts and ends with a specific character usingstartsWith() and endsWith().
{

    let new1 = 'This is javascript, and javascript is scripting language';
    console.log(new1.startsWith('T'));
    console.log(new1.endsWith('a'));

}

// 1. Write a program to reverse a string using split(), reverse(), and join().

{
       let str2 = 'janvi';
       let demo1 = str2.split('');
    //    console.log(demo1);
    let str3 = demo1.reverse(); 
    console.log(str3);
    console.log(str3.join(''));     
}

// 2. Count the number of vowels in a string using match() and a regular expression.
   {
    let str2 = 'hello world';
    let regex = /[aeiou]/g;
    let new3 = str2.match(regex);
    console.log(new3.length);
    console.log(str2.match(regex).length);
     
}
     
// 3. Check if a string contains a specific substring using includes().
   {
    
    let str5 = 'This is javascript';
    console.log(str5.includes('This is javascript525252'));
    
   }

   


// Date Object

{
    // Q-1

    let currentDate = new Date();
    console.log(currentDate);
}

{
    // Q-2

    let currentDate = new Date();
    console.log("YYYY-MM-DD " + currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate());
}

{
    // Q-3

    let date1 = new Date("december 3 2024");
    let date2 = new Date();

    console.log(date1.getDay() + date2.getDay() + 1);
}

{
    // Q-4

    let newDate = new Date();
    console.log(newDate.getDay());
}

{
    // Q-5

    let currentDate = new Date();
    console.log(currentDate);
    currentDate.setDate(currentDate.getDate() + 7);
    console.log(currentDate.toString());
}

{
    // Q-6

    let currentDate = new Date();
    console.log(currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
}

{
    // Q-7

    let date = new Date("2024 2 0");
    console.log(date.getDate());
}

{
    // Q-8

    let time = new Date();
    // time.setHours(24);
    // time.setMinutes(0);
    
    
    if (time.getHours() >= 12 && time.getHours() < 24) {
        console.log(time.getHours() + ":" + time.getMinutes() + " PM");
    } else {
        console.log(time.getHours() + ":" + time.getMinutes() + " AM");
    }
}

{
    // Q-9

    let date1 = new Date("November 21 2024 10:15:10");
    let date2 = new Date("November 1 2024 14:45:10");
    console.log(date1);
    console.log(date2);

    let differenceHours = date2.getHours() - date1.getHours();
    let differenceMinutes = date2.getMinutes() - date1.getMinutes();

    console.log(Math.abs(differenceHours) + ":" + Math.abs(differenceMinutes));
}

{
    // Q-10

    let countdownTimer = new Date();
    console.log(countdownTimer.getHours() + " " + countdownTimer.getMinutes());

    if ((countdownTimer.getHours() == 15) && (countdownTimer.getMinutes() == 30)) {
        console.log("Happy New Year");
    }
}
