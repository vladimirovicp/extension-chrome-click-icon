// chrome.runtime.onMessage.addListener((req, info, cb) =>{
//     if( req.action === "start-script"){
//
//
//         console.log('!!!!!!!!!');
//
//         // const allCode = getAllCode();
//         //
//         // navigator.clipboard.writeText(allCode).then(()=>{
//         //     notify();
//         //     cb(allCode);
//         // });
//
//         return true;
//     }
// });

chrome.runtime.onMessage.addListener((req, info, cb) =>{
    if( req.action === "start-script"){
        const allCode = getAllCode();
        navigator.clipboard.writeText(allCode).then(()=>{
            //notify();
            console.log('1111111111111111')
            cb(allCode);
        });
        return true;
    }
});

function getAllCode(){
    return [...preEls].map((preEl) => {
        return preEl.querySelector('code').innerText
    }).join("");
}



// chrome.runtime.onMessage.addListener((req, info, cb) =>{
//     if( req.action === "start"){
//         console.log('start');
//     }
// });
