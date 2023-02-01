// Asynchronous JavaScript Tutorial #4 - Callback Functions
// Wrap the routine we created in the past tutorial in a function
// to make it re-usable

const getProduct = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText)
        }
        else if (request.readyState === 4) {
            callback("Could not fetch data!", undefined)
        }
    });

    request.open("GET", "https://dummyjson.com/products/1");
    request.send();
}


// Call the function
// Let's pass a CALLBACK FUNCTION to it as an argument
// This callback function takes two arguments itself: err, and data
// getProduct((err, data) => {
//     console.log("[Tutorial 4] Callback fired!")
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(data)
//     }
// });
// Now this callback logs out the error
// if the an error occured with the request
// and logs out the data if the request went through without a problem.
// We can call this any number of times



console.log("-".repeat(150)); // separator
// Let's see how this callback function makes the code asynchronous
// that is, non-blocking

console.log(1);
console.log(2);

getProduct((err, data) => {
    console.log("[Tutorial 4] Callback fired!")
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
});

console.log(3);
console.log(4);


