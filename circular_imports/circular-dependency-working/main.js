const lib1 = require('./lib1')
const lib2 = require('./lib2')

console.log(lib1)
console.log(lib2)

console.log(lib1.lib2)
console.log(lib2.lib1)

/*
output 
{ a: 10, lib2: { b: 10, lib1: [Circular] } }
{ b: 10, lib1: { a: 10, lib2: [Circular] } }
{ b: 10, lib1: { a: 10, lib2: [Circular] } }
{ a: 10, lib2: { b: 10, lib1: [Circular] } }

Here we can see that circular dependecy is reflected i.e it is not stopped unlike in type 1.
The reasion behind this is that in type 1, we made module.exports in both lib1 and lib2 to point to a new object rather than adding properties 
to existing module.exports. this happened because our syntax was module.exports = {...} which is making it a new object.

while in type 2 here module.exports points to the initial empty object in which we are adding properties so it points to the 
already existing empty object in memory. So lib1 points to in memory module.exports of lib2 and similarly 
lib2 points to in memory module.exports of lib 1 so circular dependecy occurs.

*/




// code mentor