document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA") {
        console.log("The 'A' key is pressed.");
    } else if (event.code == "KeyS") {
        console.log("The 'S' key is pressed.");
    } else if (event.code == "KeyD") {
        console.log("The 'D' key is pressed.");
    } else if (event.code == "KeyF") {
        console.log("The 'F' key is pressed.");
    } else if (event.code == "KeyG") {
        console.log("The 'G' key is pressed.");
    } else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed.");
    } else if (event.code == "KeyJ") {
        console.log("The 'J' key is pressed.");
    } else {
        console.warn("Warning!!!")
    }
});

// document.addEventListener("keydown", function (event) {
//     switch (event.code) {
//         case "KeyA":
//             displayKey(event.key)
//             break;
//         case "KeyS":
//             displayKey(event.key)
//             break;
//         case "KeyD":
//             displayKey(event.key)
//             break;
//         case "KeyF":
//             displayKey(event.key)
//             break;
//         case "KeyG":
//             displayKey(event.key)
//             break;
//         case "KeyH":
//             displayKey(event.key)
//             break;
//         case "KeyJ":
//             displayKey(event.key)
//             break;
//         default:
//             console.log("Warning!!!");
//     }
// });
//
// function displayKey(key) {
//     console.log("The '" + key + "' key is pressed");
// }