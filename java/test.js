
console.log("hello every body");

var user={
Name :"sherien sallam bakri",
 age:21,
 gender:"female",
 job:"stydent",
 salary:"nothing"
}
console.log("my name is ",user.Name);
console.log("age ",user.age);
console.log("gender",user.gender);
console.log(user.job);
console.log(user.salary);


//functin 1
 function getCalculation(number1,number2){
    var sum=number1+number2;
    var difference=number1-number2;
    var multiplication=number1*number2;
    var divition=number1/number2;
    var modulus=number1%number2;
    var root1=Math.sqrt(number1);
   var root2=Math.sqrt(number2);
    console.log("sum: ",number1,"+",number2,"  ",sum);
    console.log("difference: ",number1,"-",number2,"  ",difference);
    console.log("multiplication: ",number1,"*",number2,"  ",multiplication);
    console.log("divition: ",number1,"/",number2,"  ",divition);
    console.log("modulus: ",number1,"%",number2,"  ",modulus);
    console.log("root1of: ",number1,"is",root1);
     console.log("root2of: ",number2,"is",root2);
     console.log(number1**number2);
}
getCalculation(25,10);

//functin 2
function comparison(number1,number2){
    if(number1>number2){
        console.log("number1 is greater than number2");
    }
     else if(number1<number2){
        console.log("number1 is smaller than number2");
    }
     else if(number1==number2){
        console.log("number1 is equal to number2");
    }
}
comparison(20,20);

//functin 3
function check_1(num){
   if(num>0){
    console.log("num is positive");
}
else if(num<0){
    console.log("num is negative");
}
else if(num==0){
    console.log("num is zero");
} 
}
check_1(20);


//functin 4
function check_2(number){
   if(number%2==0){
    console.log("num is even");
}
else if(number%2!=0){
    console.log("num is odd");
}
else if(number==0){
    console.log("num is zero");
}
}
check_2(3);


//functin 5
function multiplication_table(number)
{
for(var i=1;i<10;i++)
{
    console.log("number","*",i,"=  ",number*i);
}
}
multiplication_table(2);


//functin 6
function sum(number){
 if(Number(number))
 {
    var total=0;
    for(var i=1;i<=number;i++){
        total+=i;
    }
    console.log(" is:",total);
 }
 else{
    console.error("please enter valid number")
 }
}
sum("sd");


//functin 7
function countlatters(text){
    var count=0;
    for(var i=0;i<text.length;i++){
    if(text[i]=="s")
    {
        count++;
    }
    }
    console.log("count letters",count);
}
 countlatters("sherien sallam");


//functin 8
function factorial(number){
    if(Number(number)&&number>=0){
        var fact=1;
    for(var i=1;i<number;i++){
    fact=fact*i;
    }
    console.log("factorial = ",fact);
    }
else{
console.error("please enter positive number");
}
}
 factorial(5);

//function 9
function sumEven(number){
var sum=0;
for(var i=0;i<=number;i++){
    if(i%2==0)
    {
        sum+=i;
    }
     }
     console.log("sum of even number = ",sum);
}
sumEven(6);

//function 10
function sumOdd(number){
var sum=0;
for(var i=0;i<=number;i++){
    if(i%2!=0)
    {
        sum+=i;
    }
     }
     console.log("sum of odd number = ",sum);
}
sumOdd(9);