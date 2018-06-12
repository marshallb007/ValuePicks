const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);

// round up ceil
val = Math.ceil(2.4);

// round down floor
val = Math.floor(2.8);

val = Math.sqrt(64);
val = Math.abs(-3);

// power of something
val = Math.pow(8, 2);

// return min number
val = Math.min(2,33,4,1,55,6,3,-2);

// return max number
val = Math.max(2,33,4,1,55,6,3,-2);

// gives random decimal
val = Math.random();
// gives random number between 1-20 with no decimal Math.floor
val = Math.floor(Math.random() * 20 + 1);

console.log(val);