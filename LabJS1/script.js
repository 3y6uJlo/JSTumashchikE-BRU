"use strict";


//task1
let str = "hello worldd mama mia";
let array = str.split(" ");
let resStr = "";
for (let i=0;i<array.length;i++)
{
    resStr += `"`+array[i]+" "+array[i].length+`",`;
}
resStr = resStr.slice(0,resStr.length-1);
console.log(resStr);

//task2
let str2 = "Hippopotomonstrosesquippedaliophobia";
let resStr2 = "";
str2 = str2.toLowerCase();
let array2 = [];
for (let i=0;i<str2.length;i++)
{
    if (!array2.includes(str2[i]))
    {
        array2.push(str2[i])
        resStr2 += array2.length-1 + ".";
    }
    else
    {
        resStr2 += array2.indexOf(str2[i]) + "."
    }
}
resStr2 = resStr2.slice(0,resStr2.length-1);
console.log(resStr2);

//task3
let str3 = "aaaabbcdefffffffg";
let resStr3 = "";
let lastWord = "";
let counter = 0;
let flag = false;
if (typeof (str3) === 'string')
{
    lastWord = str3[0];
    resStr3 += lastWord;
    counter = 1;
    for (let i=1;i<str3.length;i++)
    {
        if (str3[i] === lastWord)
        {
            counter++;
            if (counter>=3 && flag == false)
            {
                resStr3 +="["
                flag = true;
            }
        }
        else
        {
            if (counter>=3)
            {
                resStr3 += "]";            
                flag = false;
            }
            counter = 1;
        }
        resStr3 +=str3[i];
        lastWord = str3[i];
    }
    if (counter>=3)            
        resStr3 += "]";
    console.log(resStr3);
}
else
{
    console.log("Please enter a valid string");
}

//task 4-5
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(" \t \n" - 2);