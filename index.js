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