// LOOK AT THE CONSOLE!
// Trying out Async (non-blcoking) code
console.log(1);
console.log(2);

// This statement will NOT block the code
setTimeout(() => { console.log("Callback function fired!") }, 2000);

console.log(3);
console.log(4);

/* Console Output:
1
2
3
4
Callback function fired!
*/