/*
    This simple node.js application will print out the current time every second.
    It also prints out the hostname of the Computer it is running in.
    This is useful to see if the application is running in the correct container.
    The hostname should be the same as the container name.
    The application will run forever, so you have to stop it manually.
*/

var os = require("os");
var hostname = os.hostname();


function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function main() {
    while(true) {
        console.log("Hello from " + hostname +"! The current time is: " + new Date().toLocaleTimeString());
        await wait(1000);
    }
}

main();
