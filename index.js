//Prime NUmber
var readLineSync = require('readline-sync');
const inp = readLineSync.question("Enter a number: ");
var flag=0;
for(let i=2;i*i<inp;i++)
{
  if(inp%i==0)
  {
    flag++;
    break;
  }
}
if(flag===0)
  console.log("It is a prime number");
else
  console.log("It is not a prime");

//Leap Year
const inp2 = readLineSync.question("Enter an Year: ");
function isLeapYear(year) {
    if (year % 400 === 0)
        return true;
    if (year % 100 === 0)
        return false;
    if (year % 4 === 0)
        return true;
    return false;
}
if(isLeapYear(inp2))
{
  console.log("It is a leap year");
}
else {
  console.log("It is not a leap year");
}
