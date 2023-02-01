// Asynchronous JavaScript Tutorial #3 - Status Codes

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
        console.log(request, request.responseText)
    }
});

request.open("GET", "https://dummyjson.com/cartss"); 
// NOTE: entered an invalid API endpoint to see what happens

request.send();

// In the console log, notice the status is 404
// also notice that the responseText is "not found!"

