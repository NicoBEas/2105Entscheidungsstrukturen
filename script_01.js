"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/********* IF **********/
// TINA --> There is no alternative1
// entweder JA oder nix ... alternativlos

if (ageJohn > ageMark)
{
    console.log("John ist älter");
}
else if (ageJohn == ageMark)
{
    console.log("Mark und John sind gleich alt");
}
else
{
    console.log("Mark ist älter");
}