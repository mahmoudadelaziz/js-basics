// Asynchronous JavaScript Tutorial #3 - Status Codes

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        // This will only fire if the request status is 200 OK
        console.log(request, request.responseText)
    }
    else if (request.readyState === 4) {
        // This will only fire if the request was completed
        // but the status is not 200 OK (Some error occured along the way)
        // (Which is the case here because we entered an invalid API endpoint)
        console.log("Could NOT fetch the data! Sorry!")
    }
});

request.open("GET", "https://dummyjson.com/cartss");
// NOTE: entered an invalid API endpoint to see what happens

request.send();
