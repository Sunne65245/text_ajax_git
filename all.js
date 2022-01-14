const text = document.querySelector(".text");
const form = document.querySelector("#form1");



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
        error:function(err){console.log(err)},

    });
}