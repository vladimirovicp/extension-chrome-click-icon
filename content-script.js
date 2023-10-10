chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        if (request.greeting == "start-script"){
            sendResponse({farewell: "goodbye"});
            stage1();
        }
    }
);

//https://qaa-engineer.ru/kak-otsledit-poyavlenie-klassa-i-postavit-uslovie-v-mutationobserver/

function stage1(){
    console.log('stage1')

    const block81 = document.querySelector('#block-block-81');
    const mediaIcon = block81.querySelector('.media_icon');
    console.log( block81);
    console.log(mediaIcon);

    //const targetElement = document.getElementById('myElement');
    const config = { attributes: true };
    const observerStage1 = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                const hasClass = target.classList.contains('call-menu__active');

                if (hasClass) {
                    // Выполнить определенные действия
                    console.log('Класс call-menu__active появился в элементе');
                }
            }
        });
    });
    observerStage1.observe(mediaIcon, config);

    const wrapNameMain = document.querySelector('.wrap__name_main');
    const regionNavigation = wrapNameMain.querySelector('.region-navigation');

    //style="height: 910px; left: -250px;"
    //height: 910px; left: 0px;

    //console.log(regionNavigation.style.cssText);

    const observerStage1_1 = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const target = mutation.target;
                const hasStyle = target.style.cssText;

                if (hasStyle === 'height: 910px; left: 0px;') {
                    // Выполнить определенные действия
                    console.log('height: 910px; left: 0px;');
                    createMessage();
                    observerStage1_1.disconnect();

                }
                // if (hasStyle === 'height: 910px; left: -250px;') {
                //     // Выполнить определенные действия
                //     console.log('height: 910px; left: -250px;');
                //     removeMessage();
                // }
            }
        });
    });
    observerStage1_1.observe(regionNavigation, config);
}


function createMessage(){
    const body = document.querySelector('body')
    const div = document.createElement('div');
    div.classList.add('block-ocv');
    div.textContent = "Скрипт запущен";
    body.append(div);
}

// function removeMessage(){
//     const body = document.querySelector('body')
//     const div = body.querySelector('.block-ocv');
//     if(div){
//         body.removeChild(div);
//     }
// }
