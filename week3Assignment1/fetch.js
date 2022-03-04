// Fetches data from the given api, afterwards we post to the URL by using JSON.stringify.
fetch(("https://reqres.in/api/users"), {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Darren"
    })
    // returns the json of the response to be posted to the given URL
}).then(res =>{
        return res.json()
        // Show that the process has been complete within the console
    }).then(data => console.log(data))
    .catch(error => console.log("Error"))