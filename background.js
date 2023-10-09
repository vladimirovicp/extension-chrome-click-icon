//https://developer.chrome.com/docs/extensions/reference/commands/


// chrome.commands.onCommand.addListener(function(command) {
//     console.log('onCommand event received for message: ', command);
// });


// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         func: contentScriptFunc,
//         args: ['action'],
//     });
// });
//
// function contentScriptFunc(name) {
//     alert(`"${name}" executed`);
// }

chrome.commands.onCommand.addListener((command) => {
    console.log(command);
    if(command === 'start-script'){
        getCurrentTabId();
        //console.log(getCurrentTabId())
        // getCurrentTabId().then((tabId) =>{
        //     chrome.tabs.sendMessage(tabId, {action: 'start-script'},
        //         (allCode)=>{
        //             console.log(allCode)
        //         });
        // })
    }
});

async function getCurrentTabId() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}


//chrome.browserAction.onClicked.addListener(onExtensionClick);

//chrome.action.onClicked.addListener(onExtensionClick);

// async function onExtensionClick(){
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab.id;
// }
//
// chrome.action.onClicked.addListener(function (tab) {
//
//     console.log(tab)
//     onExtensionClick();
//
//     // chrome.tabs.sendMessage(tabId, {action: 'start'},
//     //     (allCode)=>{
//     //         console.log(allCode)
//     //     });
//
// });

// chrome.action.onClicked.addListener(tab => {
//     // Send a message to the active tab
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         var activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//         console.log('onExtensionClick');
//         onExtensionClick(activeTab);
//     });
// });

// chrome.action.onClicked.addListener(tab => {
//     // Send a message to the active tab
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         var activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//     });
// });
