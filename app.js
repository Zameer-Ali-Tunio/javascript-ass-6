/* <---------------------------chapter no 21 to 25 Strings Methods ------------------------------------>
// task no 1
var a=prompt("enter your first name");
var b=prompt("enter your first name");
var fullName=a+" "+b;
alert("Greetings Mr. "+fullName); 
// task no 2
var a=prompt("Enter Your Favourite Mobile Model Name");
document.write("My favourite phone is: " +a);
var b=a.length;
document.write("<br>Length of String  is: "+b);

// task no 3
var a="Pakistani";
document.write("String: " +a);
var b=a.indexOf("n");
document.write("<br>index of 'n' is: " +b);
// task no 4
var a="hello world";
document.write("String: " +a);
var b=a.lastIndexOf("l");
document.write("<br>Last index of 'l' is: " +b);
// task no 5
var a="Pakistani";
document.write("String: " +a);
var b=a.charAt(3);
document.write("<br>character at index 3 is: " +b);
// task no 6
var a=prompt("enter your first name");
var b=prompt("enter your first name");
alert(a+" "+b);
// task no 7
var a="Hyderabad";
document.write("String: " +a);
var b=a.replace("Hyder","Islam");
document.write("<br>After replacement: " +b);
// task no 8
var a = "Ali and Sami are best friends. They play cricket and football together.";
document.write("String: " +a);
var b=a.replace(/and/g,"&");
document.write("<br>After replacement: " +b);
// task no 9
var a=472;
var a=a.toString();
document.write("value "+a);
document.write("<br>type: string");
var b="472";
var b=Number(b);
document.write("<br>value "+b);
document.write("<br>type: number");

// task no 10
var a=prompt("Enter String");
document.write("user input: "+a);
var a=a.toUpperCase();
document.write("<br>upercase: "+a);
// task no 11
var a=prompt("Enter String");
document.write("user input: "+a);
var a=a.toLowerCase();
document.write("<br>Title case: "+a);
// task no 12
var a=35.36;
document.write("number: "+a);
var b=a.toString();
 b=b.replace(".",'');
document.write("<br>result: "+b);
// task no 13
var a=prompt("enter UserName");
var c=a.split("");
for(var b=0;b<a.length;b++){
    if(c[b]==="!" || c[b]==="@" || c[b]==="." || c[b]===","){
    }
}
alert("invalid UserName");  

// task no 14
var b=prompt("Welcome to ABC bakery.what do you want to order sir/ma'am")
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
for(var c=0;c<1;c++){
if(b==="cake"){
    document.write(b+" is avialable at index no "+(1+c));
}
else if(b==="apple pie"){
    document.write(b+" is avialable at index no "+(2+c));
}
else if(b==="cookie"){
    document.write(b+" is avialable at index no "+(3+c));
}
else if(b==="chips"){
    document.write(b+" is avialable at index no "+(4+c));
}
else if(b==="patties"){
    document.write(b+" is avialable at index no "+(5+c));
}
else{
    document.write("we are sorry The "+b+" is not avaiable in our Bakery ");}
}
// task no 15


// task no 16
var university = "University of Karachi";
university=university.split("");
for(var b=0;b<university.length;b++){
document.write(university[b]+"<br>");
}
// task no 17
var a=prompt("enter string");
document.write("Input string is: "+a);
a=a.split("");
for(var b=a.length-1;b<a.length;b++){
document.write("<br>Last chracter of user input: "+a[b]);}*/
// task no 18


/* <---------------------------chapter no 26 to 30 Math Methods ------------------------------------>
// task no 1
var a=+prompt("enter only positive integer(points value)");
document.write("Number value: "+a);
var b=Math.round(a);
document.write("<br>Round off value: "+b);
var c=Math.floor(a);
document.write("<br>Floor value: "+c);
d=Math.ceil(a);
document.write("<br>Ceil value: "+d);
// task no 2
var a=+prompt("enter only negative integer(points value)");
document.write("Number vlaue: "+a);
var b=Math.round(a);
document.write("<br>Round off value: "+b);
var c=Math.floor(a);
document.write("<br>Floor value: "+c);
d=Math.ceil(a);
document.write("<br>Ceil value: "+d);
// task no 3
var a=+prompt("enter only negative value");
var b=Math.abs(a);
document.write("<br>The Absolute Value of "+a+" is "+b);
// task no 4
var a=Math.random()*7;
var b=a.toFixed(0)
var c=Math.random()*7;
var d=c.toFixed(0)
document.write("Random Dice value: "+b)
document.write("<br>Random Dice value: "+d)
// task no 5
var a=Math.random()*2;
var b=a.toFixed(0)
if(b==1){
    document.write(b+"<br>Random coin value is: Heads<br> ")
}
else{
    document.write(b+"<br>Random coin value is: tails ")
}
// task no 6
var a=Math.random()*100;
var b=a.toFixed(0);
document.write("Random Number between 1 to 100: "+b);
// task no 7
var a=+prompt("enter weight in kilograms");
document.write("The of user is "+a+" Kilograms")
// task no 8
var c=+prompt("enter number between 1 to 10");
var a=Math.random()*11;
var b=a.toFixed(0);
if(c===a){
    document.write("Congrats");
}
else{
    alert("try again");
}*/
/*<------------------------------chapter# no 31 to 34 Date Methods------------------------------------------------> 
//  Task no 1
var a=new Date();
document.write(a);
//  Task no 2
var a=new Date();
var b=a.toString();
var c=b.slice(4,7);
alert("Current Month: "+c);
//  Task no 3
var a=new Date();
var b=a.toString();
var c=b.slice(0,3);
alert("Today is: "+c);
//  Task no 4
var a=new Date();
var b=a.toString();
var c=b.slice(0,3);
if (c==="sun" || c==="sat"){
    document.write("its fun day");
}
else {
    document.write("Today is not fun day");
}
// task no 5
var a =new Date();
var b=a.getDate();
if (b<=15){
document.write("First fifteen days of the month");
}
else{
    document.write("Last Days of the month");
}
// task no 6
var a=new Date();
document.write("Current date: "+a);
var b=a.getTime();
document.write("<br>Elapsed miliseconds since january 1,1970: "+b);
var c=a.getTime()/(60*60);
document.write("<br>Elapsed minutes since january 1,1970: "+c);
// task no 7
var a = new Date();
var b=a.toString();
var c=b.slice(15,21);
if (c<="12"){
    document.write("its AM")
}
else{
    document.write("its PM")
}
// task no 8  
var a=new Date("dec 31,2020");
document.write("later date: "+a);
// task no 9
var oldDate=new Date("june 18,2015");
var oldTime=oldDate.getTime();
var currentDate=new Date();
var currenttime=currentDate.getTime();
var pastDays=currenttime-oldTime;
var totalDays=pastDays/(1000*60*60*24);
var totalDays=totalDays.toFixed(0);
document.write(totalDays+" Days passed since 1st Ramadan, 2015 ");
// task no 10
var oldDate=new Date("dec 5,2015 22:50:16");
var oldTime=oldDate.getTime();
var currentDate=new Date();
var currenttime=currentDate.getTime();
var pastDays=currenttime-oldTime;
var totalDays=pastDays/(1000);
var totalDays=totalDays.toFixed(0);
document.write(" on reference date "+oldDate);
document.write("<br>"+totalDays+" Seconds passed since begining of  2015 ");
// task no 11
var a=new Date("dec 5,2015 22:08:16");
document.write("current date: "+a)
var setHour=a.setHours("23")
document.write("<br>1 Hour ago,it was : "+a)
// task no 12
var a=new Date("dec 5,2015");
document.write("current date: "+a)
var b=new Date("dec 5,1915");
document.write("<br>100 years ago,it was: "+b)
// task no 13
var dob=new Date (prompt("jan 1,1999"));
var dobTime=dob.getTime();
var currentDate=new Date();
var currenttime=currentDate.getTime();
var diff=currenttime-dobTime;
var totalAge=diff/(1000*60*60*24*30*12);
var totalAge=totalAge.toFixed(0);
document.write("Your age is: "+totalAge);
dobYear=dob.getFullYear();
document.write("<br>your birth year is: "+dobYear);*/

/* <------------------------- chapter no 35-38 Functions --------------------> 
// task no 1
function currentDate(){
    var a=new Date();
    document.write(a);
}
currentDate();
// task no 2
function greeting(){
    var a=prompt("enter first name");
    var b=prompt("enter last name");
    var c=a+" "+b;
    document.write("Good Morning "+c);
}
greeting();
// task no 3
function add(){
    var a=+prompt("enter number 1");
    var b=+prompt("enter number 2");
    var c= a+b;
    document.write(c);
}
    add();
// task no 4
// function Calc(){
var a=+prompt("enter number one");
var b=+prompt("enter number two");
var sign=prompt("enter sign like +,-,/,*,%");
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var rem=a%b;
if(sign==="+"){
    document.write(sum);
}
else if(sign==="-"){
    document.write(sub);
}
else if(sign==="*"){
    document.write(mul);
}
else if(sign==="/"){
    document.write(div);
}
else if(sign==="%"){
    document.write(rem);
}
else {
    document.write("error");
}
}
Calc();
// task no 5
function square(){
    var a=+prompt("enter num for spuare");
    var b=a*a;
    document.write(b);
}
square();
// task no 6
function factorial(n){
    var answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  var n = +prompt("enter num for factorial");
  answer = factorial(n)
  document.write("The factorial of " + n + " is " + answer);

// task no 7
function counting(){
    var a=+prompt("starting num")
    var b=+prompt("ending num")
    for(a;a<=b;a++){
       document.write(a+"<br>");
    }
}
counting();

// task no 8
function calcHypotenus(base,per) {
    var hypo= base*base  + per*per ;
    alert(hypo+"\n")
    function calcSquare(){
    var squrt= Math.sqrt(base*base  + per*per) ;
    alert(squrt)}
    calcSquare()
}
var base=+prompt("enter base value")
var per=+prompt("enter perpendicular value")
calcHypotenus(base,per);
// task no 9
function area(width,height){
    var area=width*height;
    document.write(area);
}
area(10,20);

// task no 10
function palindrome(){
    var a=prompt("enter word");
    var b=a.split("");
    var c=b.reverse().join("");
if(a===c){
    document.write("palindrome word")
}
else{
    document.write("NOT palindrome word")
}
}
palindrome();

// task no 11
function capitilize(){
    var a=prompt("Enter only one word");
    var b=a.split(" ").toString();
    var d=b[0].toUpperCase()+b.slice(1); ;
        document.write(d);
}
capitilize();

// task no 12
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");
// task no 14
function calcCircumference(){
var radius=20;
var cir=2*(3.142)*radius;
cir=cir.toFixed(2)
document.write("The circumference is: "+cir);
}
function calcArea(){
var radius=20;
var area=3.142*radius*radius;
document.write("<br>The area is: "+area);
}
calcCircumference();
calcArea();*/