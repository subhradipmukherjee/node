const lib1 = require('./lib1')
const lib2 = require('./lib2')

console.log(lib1)
console.log(lib2)

console.log(lib1.lib2)
console.log(lib2.lib1)

/*
we get output as - 
{ a: 10, lib2: { b: 20, lib1: {} } }
{ b: 20, lib1: {} }
{ b: 20, lib1: {} }
{}

Ideally it would have been a infinite loop because lib1 requires lib2 then inside lib2 , it again requires lib1.
But how nodejs is developed is when we traverse down the require tree, if at any point a module 1 tries to require an other module 2 and module 2
itself is not resolved then it returns empty object.
In this case 
 main.js --->  lib1.js ---> lib2.js --->lib1.js. 
  1)            2)           3)           4)
  here lib1 was getting required at step 2, but again it is required at step 4 while the require at step 2 was not complete 
  so it returned an empty object.
  This way circular dependency is broken.

*/