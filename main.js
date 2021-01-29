// 01 - New Way To Create Variable - Let:

// let, const

// var (Function Scope, Can Be ReDeclare, Undefined When Accessing a Variable Before It's Declared, Create Properties In The Window Object)

// let (Block Scope, Cannot Be ReDeclare, ReferenceError When Accessing A Variable Before It's Declared, Doesn't Create Properties In The Window Object)

// const (Block Scope, Cannot Be ReDeclare, ReferenceError When Accessing A Variable Before It's Declared, Doesn't Create Properties In The Window Object)

/* function varTest(){
    var x = 1;
    if(true){
        var x = 2; // Redeclare
        console.log(x);
    }
    console.log(x);
    return `Done`;
}
console.log(varTest());

function letTest(){
    let x = 1;
    if(true){
        let x = 2;
        console.log(`Inside If Condition` + " " + x);
    }
    console.log(x);
    return `Done`;
}
console.log(letTest()); */

/* var x = 1;
var x = 2;
console.log(x); */

/* let x = 1;
let x = 2;
console.log(x); */

/* var x = 1;
    x = 2;
    console.log(x); */

/* let x = 1;
    x = 2;
    console.log(x); */

/* console.log(x); // undefined (UnLogisch)
var x = 1;

console.log(y); // ReferenceError: Cannot access 'y' before initialization (Logisch)
let y = 2; */

/* var Kinan = 1;
let ahmed = 2;
console.log(window.Kinan); // 1
console.log(window.ahmed); // undefined
console.log(window); // window === this */

// ________________________________________

// 02 - New Way To Create Variable - Const:
/* const SETTING = 1;
let SETTING = 2; // SyntaxError: Identifier 'SETTING' has already been declared
console.log(SETTING); */

/* const SETTING = 1;
var SETTING = 2; // SyntaxError: Identifier 'SETTING' has already been declared
console.log(SETTING); */

/* const SETTING;
console.log(SETTING); // SyntaxError: Missing initializer in const declaration */

/* var SETTING;
console.log(SETTING); // undefined */

/* let SETTING;
console.log(SETTING); // undefined */

/* const SETTING = 1;
if(true){
    const SETTING = 2;
    console.log(SETTING); // 2
}
console.log(SETTING); // 1 */

/* const SETTING = [];
SETTING.push("HTML","CSS","JS");
console.log(SETTING); // ["HTML", "CSS", "JS"] */

/* const SETTING = [];
SETTING = ["Kinan"];
console.log(SETTING); //  TypeError: Assignment to constant variable */

/* let SETTING = [];
SETTING = ["Kinan"];
console.log(SETTING); // ["Kinan"] */

/* var SETTING = [];
SETTING = ["Kinan"];
console.log(SETTING); // ["Kinan"] */

/* const SETTING = {
    name: "Kinan",
    age: 37
};
SETTING.name = "Ahmed";
console.log(SETTING); // {name: "Ahmed", age: 37} */

/* const SETTING = {
    name: "Kinan",
    age: 37
};
SETTING = {
    color: "red"
};
console.log(SETTING); // TypeError: Assignment to constant variable */

/* const SETTING = {
    name: "Kinan",
    age: 37
};
Object.freeze(SETTING);
SETTING.name = "Sayed";
console.log(SETTING); */

// ________________________________________

// 03 - Arrow Function - Syntax and Examples:
// Identifier => Expression
/* function test(){
    return 2;
}
console.log(test()); */

// Regular Function With No Parameters
/* let regularTestOne = function(){
    return 2;
}

// Arrow Function With NO Parameters
let arrowTestOne = () => 2;
let arrowTestTwo = _ => 2;

// Regular Function With One Parameters
let regularTestTwo = function(param){
    return param * 2;
}

// Arrow Function With One Parameters
let arrowTestThree = (param) => param * 2;
let arrowTestFour = param => param * 2; // Here I don't need the arcs if there is only one parameter

// Regular Function With Multiple Parameters
let regularTestThree = function(param1,param2){
    return param1 * param2;
}

// Arrow Function With Multiple Parameters
let arrowTestFive = (param1,param2) => param1 * param2;
console.log(regularTestThree(10,30)); */

// ________________________________________

// 04 - Arrow Function And This Value:
/* let test = function(){
    document.getElementById("show").innerHTML = this;
}
// Window Object Called The Function
window.onload = test;

// Button Object Called The Function
document.getElementById("button").addEventListener("click",test); */

// With Arrow Function
// Arrow Function Doesn't Have It's Own "this" Scope
// Arrow Function takes ("this" Value) From The Content, Which Is Inside It
/* let test = () => document.getElementById("show").innerHTML = this;
// Window Object Called The Function
window.onload = test;

// Button Object Called The Function
document.getElementById("button").addEventListener("click",test); */

/* function person(){
    this.age = 0;
    setInterval(function(){ //("setInterval" function) Has It's Own "this"
        this.age++;
        console.log(this.age);
    }, 1000);
}
let user = new person(); */ // NaN

// Before Arrow Function:
// The Solution Was In (ECMAScript 3-5 Version):
/* function person(){
    let x = this;
    this.age = 0;
    setInterval(function(){ //("setInterval" function) Has It's Own "this"
        x.age++;
        console.log(x.age);
    }, 1000);
}
let user = new person(); */

// With Arrow Function:
/* function person(){
    let x = this;
    this.age = 0;
    setInterval(() => { // Arrow Function takes ("this" Value) From The Content, Which Is Inside It
        x.age++;
        console.log(x.age);
    }, 1000);
}
let user = new person(); */

// ________________________________________

// 05 - Template Literals:
// Example 1
/* const theKind = "Male";
let oldWay = "Hello It's Me " +(theKind === "Male" ? "Mr" : "Mrs") + " Kinan\n"
// + "I am Male\n" 
+ "I am " + theKind + "\n" +
"I am From Damascus\n" +
"I Love All My Followers";

// Example 2
// With Template Literals
let newWay = `Hello It's Me ${theKind === "Male" ? "Mr" : "Mrs"} Kinan
I am ${theKind} // ${} === Place Holder (You Can Put It Inside "Expression")
I am From Damascus
I Love All My Followers`;

console.log(oldWay);
console.log(newWay); */

// Example 3
// With Template Literals
/* let username = "Kinan",
    age = 36;
const myHtmlMarkup = `
<div class = "card">
    <h2 class = "name">${username}</h2>
    <span class = "age">${age}</span>
</div>
`;
// console.log(myHtmlMarkup);
document.body.innerHTML = myHtmlMarkup; */

// ________________________________________