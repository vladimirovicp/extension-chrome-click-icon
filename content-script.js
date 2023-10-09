
// chrome.runtime.sendMessage(
//     {message: "hi"},
//     (response) => {
//         console.log('response.message ', response.message);
//     }
// );

chrome.runtime.onMessage.addListener((message,sender, sendResponse) => {
        console.log(message);
        sendResponse({message: "goodbye"});
        // if (request.greeting == "start-script"){
        //     sendResponse({farewell: "goodbye"});
        //     console.log(request.greeting);
        // }
    });

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(request);
//         if (request.greeting == "start-script"){
//             sendResponse({farewell: "goodbye"});
//             console.log(request.greeting);
//         }
//     });


// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if(request.greeting === "start-script") console.log('response received', request.payload)
//         sendResponse({status: "done"});
//         return true;
//     }
// )


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     console.log("content script got a message" + request);
//     sendResponse("world");
// });
