//步驟
//先監聽表格 要判斷是否點擊按鈕、監聽渲染區域
//用switch『判斷』監聽區域的按鈕

const form1=document.querySelector("#form1");
const render=document.querySelector(".result");

form1.addEventListener("click",clickSync)
function clickSync(e){
    console.log(e);
    let str="";
    let sync=e.target.dataset.sync;
    console.log(sync);
    
    //寫按鈕判斷dateSet
    switch(sync){
        case "extension":
            str=`<li class="Green">${sync}</li>`
            break;
        case "logistics":
            str=`<li class="RedOrange">${sync}</li>`
            break;
        default:
            str=`<li class="Red">沒點到按鈕${sync}</li>`
            break;
    }
    //渲染

    render.innerHTML=str
    
}
//40 分鐘寫完功能
