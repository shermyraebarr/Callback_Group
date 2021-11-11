function myDisplayer(some) {
    document.getElementById("Beyonce").innerHTML = some;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    // 1. request created
    req.open('GET', "beyonce.html");
    // registering what to do with response
    req.onload = function() {
        // 3. response recieved
        if (req.status == 200) {
            myCallback(this.responseText);
        } else {
            myCallback("Error: " + req.status);
        }
    }
    // 2. request sent
    req.send();
}

// displays HTML file in web page after the file is fully loaded
getFile(myDisplayer)

document.querySelector("#callback-btn")
            .addEventListener("click", function () {
                console.log("User has clicked on the button!");
            });

            
let changeColor = setInterval(colorChange, 700);   //callback function that changes background color every 100 ms
function colorChange() {  
let getColor = document.body;  
getColor.style.backgroundColor = getColor.style.backgroundColor == "lightblue" ? "lightgreen" : "lightblue";  
}