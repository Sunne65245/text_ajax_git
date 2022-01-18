const text = document.querySelector(".text");
const form = document.querySelector("#form1");
const result = document.querySelector(".result");


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

        success:function(res){
            console.log(res);
            alert(res)
        },
        error:function(err){console.log(err);//測試git 只推單支檔案 
        //測試這邊會不會推
        }
    })
}

//練習Switch寫法
function textSwitch() {
    //之後加擋非數字值 

    strValue=text.value;
    console.log(strValue);
    
    let str =`<div>${strValue}</div>`
    //渲染完畢清除input
    text.value="";
    result.innerHTML = str;
}

