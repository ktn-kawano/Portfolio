function move_page(point){
    let adjust = 180;
    let move = $(point).offset().top-adjust;
    $(window).scrollTop(move);
}

function content_on(selecters){
    selecters.map(selecter =>{
        document.querySelector(selecter).classList.remove('off');
    });
}

function class_off(selecters){
    selecters.map(selecter =>{
        document.querySelector(selecter).classList.add('off');
    });
}

function toggle_contents(show_selecter){
    class_off(["#birthday","#birthplace","#favorite","#hobby"]);
    content_on(["#select_content",show_selecter]);
}

function move_site(site_title,link){
    if(confirm(site_title+"へ移動します。よろしいですか？")){
        location.href=link
    }
}

$(function(){
    $(".top_btn").click(function(){
        let move = $("#header").offset().top;
        $(window).scrollTop(move);
    });
})

window.addEventListener("scroll",function(){
    const btn = document.querySelector(".top_btn");
    const scroll = window.pageYOffset;

    if(scroll > 500){
        btn.classList.add("btn_on");
    } else {
        btn.classList.remove("btn_on");
    }
});

function mouse_on(hover){
    document.querySelector(hover).classList.add("deco");
}

function mouse_off(hover){
    document.querySelector(hover).classList.remove("deco");
}

function nav_open(){
    document.querySelector("#js_hamburger > .hamburger_line-1").classList.toggle("nav_open1");
    document.querySelector("#js_hamburger > .hamburger_line-2").classList.toggle("nav_open2");
    document.querySelector("#js_hamburger > .hamburger_line-3").classList.toggle("nav_open3");
    
    document.querySelector("#nav").classList.toggle("nav_off");
    document.querySelector("#nav").classList.toggle("nav_on");
}

function move_contents(slide){
    var content = document.querySelector("#select_content_set");
    content.style.left=slide;
    content.style.transition="all 0.5s";
}