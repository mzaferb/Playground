//var generateName = require('sillyname');
import generateName from "sillyname";
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

//const superheroes = require('superheroes');
import superheroes from "superheroes";

var superHeroes = superheroes.random();
console.log(`I am ${superHeroes}!`);