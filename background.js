chrome.commands.onCommand.addListener((command) => {
    if(command === 'start-script'){sendingContent();}
});

chrome.action.onClicked.addListener(sendingContent);

async function getCurrentTabId() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}

function sendingContent(){
    getCurrentTabId().then((tabId) =>{
        //id получил
        chrome.tabs.sendMessage(tabId, {greeting: "start-script"}, function(response) {
            if (chrome.runtime.lastError) {
                console.log("chrome.runtime.lastError " + chrome.runtime.lastError.message);
            }
            console.log(response.farewell);
        });
    })
}
