

//https://developer.chrome.com/docs/extensions/reference/runtime/
//https://www.youtube.com/watch?v=zNswnpCKuzU



chrome.commands.onCommand.addListener((command) => {
    console.log(command);

    if(command === 'start-script'){

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var activeTab  = tabs[0];
            console.log('activeTab', activeTab)
            chrome.tabs.sendMessage(activeTab.id, {msg: "demo"}, function(response) {
                console.log(response);
            });
        });

        // getCurrentTabId().then((tabId) =>{
        //     //console.log(tabId)
        //     //id получил
        //
        //     chrome.tabs.sendMessage(tabId, {greeting: "start-script"}, function(response) {
        //         if (chrome.runtime.lastError) {
        //             console.log("chrome.runtime.lastError " + chrome.runtime.lastError.message);
        //         }
        //         console.log("event page got a response " + response);
        //         //console.log(response.farewell);
        //
        //         //alert("event page got a response" + response);
        //     });
        //
        //
        //     // chrome.tabs.sendMessage(tabId, {greeting: "start-script"}, function(response) {
        //     //     if (!chrome.runtime.lastError) {
        //     //         console.log('response', response);
        //     //     }else{
        //     //         console.log(chrome.runtime.lastError);
        //     //     }
        //     // });
        //
        //
        //     // chrome.tabs.sendMessage(tabId, {action: 'copy-all'},
        //     //     (allCode)=>{
        //     //         console.log(allCode)
        //     //     });
        //
        // })

    }


});


async function getCurrentTabId() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}
