//console.log("Helo");
//const x= "Hello";
//const y= "siliguri";
//console.log(y+' '+ x);

/*if(a>b){
    console.log("in if"+ a + "is greater than "+b);
}
else{
  console.log("in else "+ b + "is greater than"+a);  
}*/
//const a=10;
/*var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a mooooduleno",
    e : "00",
    T : "P"
}));*/


// or cowsay.think()
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)
var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
console.log(getRandomJokeWithTag)
