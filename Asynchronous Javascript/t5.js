// Asynchronous JavaScript Tutorial #5 - Using JSON Data

const getProduct = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            // turn the responseText to an array of JavaScript objects
            // that you can work with
            data = JSON.parse(request.responseText)
            callback(undefined, data)
        }
        else if (request.readyState === 4) {
            callback("Could not fetch data!", undefined)
        }
    });

    //request.open("GET", "https://dummyjson.com/products");
    request.open("GET", "http://localhost:7800/myJSON.json")
    request.send();
}



// Call the function
getProduct((err, data) => {
    console.log("[Tutorial 4] Callback fired!")
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
});