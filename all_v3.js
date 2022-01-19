const text = document.querySelector(".text");
const form = document.querySelector("#form1");
const resultList = document.querySelector(".resultList");


//練習POST資料到ＡＰＩ
function textPost() {
    console.log(text.value);
    $.ajax({
        url: "https://guarded-hamlet-24255.herokuapp.com/todo2",
        method: "POST",
        dataType: "json",
        data: {
            store_number: text.value,
        },

        success: function (res) {
            console.log(res);
            alert(res)
        },
        error: function (err) {
            console.log(err);//測試git 只推單支檔案 
            //測試這邊會不會推
        }
    })
}

//練習Switch寫法v1 依照輸入數字是否相符去判斷
function textSwitch1() {
    //之後可以加擋 非數字值 
    strValue = text.value;
    console.log(strValue);
    let str = ""

    switch (strValue / 1) {
        case 1:
            str = `<li class="Yellow">結果符合${strValue}</li>`
            break;
        case 10:
            str = `<li class="Blue">結果符合${strValue}</li>`
            break;
        case 100:
            str = `<li class="Green">結果符合${strValue}</li>`
            break;
        default:
            str = `<li class="Red">都不符合結果${strValue}</li>`
            break;
    }
    text.value = ""
    resultList.innerHTML = str;
}


//練習Switch寫法v2 直接依照點擊區域的dateSrt值去行為判斷
const merchant = document.querySelector(".merchant");
const form1 = document.querySelector("#form1");
form1.addEventListener("click", textSwitch2);
function textSwitch2(e) {
    console.log(e);
    let sync = e.target.dataset.sync;
    console.log(sync);
    switch (sync) {
        case "extension":
            str = `<li class="Yellow">結果符合${sync}</li>`
            break;
        case "logistics":
            str = `<li class="Blue">結果符合${sync}</li>`
            break;
        default:
            str = `<li class="Red">都不符合結果${sync}</li>`
            break;
    }
    resultList.innerHTML = str;

}

//練習拆出渲染的函示
//用箭頭函函式