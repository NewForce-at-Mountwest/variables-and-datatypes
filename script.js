// Alert
// alert("JavaScript works!")

// Console.log
console.log("Hello, world!");

// Instantiate a variable
var myName = "Sarah Jordan Castelloe Jr Jr Jr Jr Jr";

console.log(myName);

// Declare a var and then assign it
var yourName;

yourName = "Sable";
console.log(yourName);
yourName = "Tommy";
console.log(yourName);

// Reassign a varaible


// Data types: strings, numbers, booleans
var thisYear = 2018;
var nextYear = 2019;
var priceOfBanana = 9;

var priceOfApple = 2;

var total = priceOfBanana + priceOfApple;
console.log("This is our fruit total", total);

var averagePrice = (priceOfApple + priceOfBanana)/2


// Math operations with numbers

// Math operations with stringified numbers


// String concatenation and interpolation
var firstName = "Dwayne";
var nickName = "The Rock";
var lastName = "Johnson";

// var fullName = firstName + " " + nickName + " " + lastName;

var fullName = `My name is ${firstName} ${nickName} ${lastName}`;

var likesToWrestle = false;

// Arrays

var favoriteFoods = ["salmon", [4, 5, 6]];

console.log(favoriteFoods[1][0]);

console.log("How long is this array?", favoriteFoods.length + favoriteFoods[1].length);

// Objects
var dwayneObject = {
    firstName: "Dwayne",
    lastName: "Johnson",
    age: 47,
    likesToWrestle: true,
    favoriteFoods: ["bacon", "fish"],
    petInfo: {
        name: "Sheryl",
        breed: "Bulldog",
        age: 2
    }
}

console.log("this should be bacon", dwayneObject.favoriteFoods[0]);
console.log("This is his dog's name", dwayneObject.petInfo.name);

console.log("What's Dwayne's first name?", dwayneObject.firstName);
console.log(dwayneObject.age);

dwayneObject.height = "6'1";

console.log(dwayneObject);