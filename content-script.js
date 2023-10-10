chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        if (request.greeting == "start-script"){
            sendResponse({farewell: "goodbye"});
        }
    }
);
