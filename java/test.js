
var user={
Name :"sherien sallam bakri",
 age:21,
 gender:"female",
 job:"stydent",
 salary:20000,
 city:"fayoum",
 id:123,
 gradiant:false,
 language:["html","css"],
 brother : {
    age:23,
    fname:"mahmoud",
    gender:"male",
     son: {
     firstName: "mohamed",
     age: 10,
     gender: "male"
        }
 },
 eat:function(para){
    console.log("she is eating");
}
}
console.log(user.brother.fname);
console.log(user.brother.son.firstName);
console.log(user["gender"]);
console.log(user.language[0]);
 user.eat();
console.log(user);
//------------------------------------------------------------
var person = {
   Name:"mohamed",
   id:222
};
console.log(person.Name);
person.age=28;
console.log(person.age);
person.Name= "sherien"
console.log(person.Name);
delete person.id;
console.log(person);
//------------------------------------------------------------
var object1 = {
    first: "mohamed",
    last: "ziad",
    test: 25,
}
console.table(object1);
//-----------------------------------------------------------
var names=["ahmed","sherien","safia","ziad","hanen","atef"];
for(var i=0;i<names.length;i++){
console.log(names[i]);
}
console.log(names.sort());
names.push("hany");
console.log(names);
var y=names.unshift("sallam");
console.log(y);
var b=names.pop();
console.log(b);
var t=names.shift();
console.log(t);
names.reverse();
console.log(names);
var v=names.slice(0,2);
console.log(v);
names.splice(1, 2, "Nour", "saad");
var index = names.lastIndexOf("Khalil"); 
console.log(index);
var result = names.includes("Ali");
console.log(result);
var i = names.indexOf("Ali");
console.log(i);
var string_Array =names.toString();
console.log(string_Array);
//--------------------------------------------------------------
var myString = "my name is sherien sallam";
var check = myString.charAt(4); 
var check = myString[8]; 
var check = myString.at(7); 
var check = myString.slice(4); 
var check = myString.toLowerCase(); 
var check = myString.toUpperCase(); 
var check = myString.concat("bakri"); 
var check = myString.split("/"); 
//------------------------------------------------------------------------
var element = document.getElementById("demo"); 
var elements = document.querySelectorAll("#demo"); 
console.log(elements);
var elements = document.getElementsByClassName("item");
console.log(elements);
for ( var i = 0; i < elements.length; i++ ) {
    console.log(elements[i]);
}
var e = document.getElementsByTagName("p"); 
console.log(e);
var el = document.getElementsByName("test");
console.log(el);
var elements = document.querySelectorAll(".item h2");
console.log(elements);
//---------------------------------------------
var headings=document.querySelectorAll("h3.index");
console.log(headings);
function sayhello(Name){
    console.log("hello",Name);
}
for(var i=0;i<headings.length;i++){
    headings[i].addEventListener("click",function(){
        sayhello("sherien");
    })
}
//---------------------------------------
var headings=document.querySelector("h3");
document.body.addEventListener("mouseenter",function(){
    headings.style.cssText="color:red";
    headings.style.backgroundColor="green"
})
//----------------------------------------------
var x=document.createElement("div");
document.body.appendChild(x);
x.setAttribute("class","demo");
var y=document.createTextNode("sherien sallam");
x.appendChild(y);
//------------------------------------------------
document.body.addEventListener("click", function(eve){
    console.log(eve);
    console.log(eve.clientX);
    console.log(eve.target);
})
//----------------------------------------------------------
var elem = document.querySelector(".item");
elem.addEventListener("click", function(){
    console.log("Hello world");
})
elem.addEventListener("dblclick", function(){
    console.log("hello world");
})

// document.addEventListener("contextmenu", function(e){
//     console.log("hi");
//     e.preventDefault(); 
// })

document.addEventListener("mousemove", function(){
    console.log("Hello every body");
})
document.addEventListener("mousedown", function(){
    console.log("hello my brothers");
})

document.addEventListener("mouseup", function(){
    console.log("any thing");
})

document.addEventListener("mouseenter", function(){
    console.log("sheel eidek");
})

document.addEventListener("mouseleave", function(){
    console.log("mouse left");
})
var image = document.querySelector("img")
image.addEventListener("drag", function(){
    console.log("the image moved");
})

document.addEventListener("keydown", function(e){
    console.log("The user used the keyboard");
    console.log(e.key);
})

document.addEventListener("keypress", function(){
    console.log("The user used  keyboard to write");
})
document.addEventListener("keyup", function(){
    console.log("sheel eidek");
})

document.addEventListener("keydown", function(e){
    console.log("dont touch");
    if(e.key == 'F6') {
        e.preventDefault();
    }
})
var input = document.querySelector("input")
input.addEventListener("focus", function(){
    console.log("user click her");
})
input.addEventListener("blur", function(){
    console.log(" user leave this input");
})