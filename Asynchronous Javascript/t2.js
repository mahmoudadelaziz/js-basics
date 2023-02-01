// Asynchronous JavaScript Tutorial #2 - HTTP Requests

// HTTP requests will be the things that ultimately
// take *some time* to complete in your code.

// Creating a request object
const request = new XMLHttpRequest();
// The XML part represents an older data format we used to work with
// much before JSON arrived on the scene
// But this request object can work with any kind of data now, 
// XML, JSON, plaintext, etc...

request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState)
})

// This object is the thing that will be used
// to actually send a request from the browser


// Setting up the request (by passing the request method and API endpoint)
request.open("GET", "https://dummyjson.com/posts")

// Sending the request
request.send()

// We don't know when this is complete
// What if we want to track the progress of the request?

// For that, we use an EVENT LISTENER!
// See line 13