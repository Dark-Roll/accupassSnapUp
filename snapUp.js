
// 流程錯誤怎麼彈性解
// 但其實 1 就完成購票ㄌ
// 3 怎麼按不了


const step2 = () => {
    // https://www.accupass.com/eflow/1811030658223231063200
    console.log("ready to if 2");
    let finishIndividualButton = document.querySelector('._47087a7d-style-next._2e566223-Button-main-btn')
    if (!finishIndividualButton) return setTimeout(function () { step2() }, 300)
    console.log("get 2");
    console.log("finish individual button: ", finishIndividualButton);
    document.onkeydown = function (e) {  //對整個頁面文件監聽 
        if (e.keyCode == 13) {
            finishIndividualButton.click()
            // 抓太快了 會抓到 step 2 的按紐
            step3()
        }
    };
}

const step3 = () => {
    // check step 3
    // https://www.accupass.com/eflow/1811030658223231063200
    console.log("read to if 3 ");
    let finishPaymentMethodButton = document.querySelectorAll('._47087a7d-style-next._2e566223-Button-main-btn')
    if (!finishPaymentMethodButton) return setTimeout(function () { step3() }, 300)
    console.log("get 3", finishPaymentMethodButton[0]);
    document.onkeydown = function (e) {  //對整個頁面文件監聽 
        if (e.keyCode == 13) {
            finishPaymentMethodButton[0].click()
        }
    };
}

const snapUp = () => {

    // let directToBuyTicketButton = document.querySelectorAll('._4f23f978-style-organizerBox')
    // // ee7c9a2b-style-change-qty

    // // 0 or 1?
    // directToBuyTicketButton[0].childNodes[0].childNodes[2].childNodes[0]
    // directToBuyTicketButton[1].childNodes[0].childNodes[3].childNodes[0]

    // directToBuyTicketButton[0].childNodes[0].childNodes[3].childNodes[0].click()
    // _4f23f978-style-organizerBox
    // _4f23f978-style-organizerBox

    console.log("ready to if")
    let addFirstTicketButton = document.querySelectorAll('._8219389d-style-ticket')
    if (addFirstTicketButton.length < 1) return setTimeout(function () { snapUp() }, 300)
    console.log("get Element")
    // 第X種的第一張
    addFirstTicketButton[0].childNodes[0].childNodes[1].click()

    // // 最後的 1 是 + ,0 是 - 
    // // 透過span 無法選第幾種 但可以連續加 
    // //第二張票 
    // let addTicketButton = document.querySelectorAll('._4839c5fb-style-container')
    // // 選第幾種
    // addTicketButton[1].childNodes[1].childNodes[1].click()

    let submitButton = document.querySelectorAll('._8846bbdb-style-bottom-container button')

    // if(submitButton[0].disabled===true)
    // 其實也不用 因為一定可以按 除非沒票或什麼的
    document.onkeydown = function (e) {  //對整個頁面文件監聽 
        if (e.keyCode == 13) {
            console.log("get 1");
            console.log(submitButton[0]);
            submitButton[0].click()
            step2()
        }
    };

    // let submitButtonBorder = document.querySelector('._2e566223-Button-main-btn._1fab3584-style-confirm-button')
    // submitButtonBorder.childNodes[1].click()

    // let d = document.querySelector('._2e566223-Button-main-btn._1fab3584-style-confirm-button')
}
window.onload = snapUp