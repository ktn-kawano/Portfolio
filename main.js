$(function(){
    $(".menu_about").click(function(){
        let adjust = 180;
        let move = $("#about").offset().top-adjust;
        $(window).scrollTop(move);
    })
})

$(function(){
    $(".menu_history").click(function(){
        let adjust = 180;
        let move = $("#history").offset().top-adjust;
        $(window).scrollTop(move);
    })
})

$(function(){
    $(".menu_skills").click(function(){
        let adjust = 180;
        let move = $("#skills").offset().top-adjust;
        $(window).scrollTop(move);
    })
})

$(function(){
    $(".menu_works").click(function(){
        let adjust = 180;
        let move = $("#works").offset().top-adjust;
        $(window).scrollTop(move);
    })
})

$(function(){
    $(".menu_github").click(function(){
        let adjust = 180;
        let move = $("#github").offset().top-adjust;
        $(window).scrollTop(move);
    })
})

function birthday_on(){
    document.querySelector("#select_content").classList.remove('off');
    document.querySelector("#birthday").classList.remove('off');
    document.querySelector("#birthplace").classList.add('off');
    document.querySelector("#favorite").classList.add('off');
    document.querySelector("#hobby").classList.add('off');
};

function birthplace_on(){
    document.querySelector("#select_content").classList.remove('off');
    document.querySelector("#birthplace").classList.remove('off');
    document.querySelector("#birthday").classList.add('off');
    document.querySelector("#favorite").classList.add('off');
    document.querySelector("#hobby").classList.add('off');
};

function favorite_on(){
    document.querySelector("#select_content").classList.remove('off');
    document.querySelector("#favorite").classList.remove('off');
    document.querySelector("#birthday").classList.add('off');
    document.querySelector("#birthplace").classList.add('off');
    document.querySelector("#hobby").classList.add('off');
};

function hobby_on(){
    document.querySelector("#select_content").classList.remove('off');
    document.querySelector("#hobby").classList.remove('off');
    document.querySelector("#birthday").classList.add('off');
    document.querySelector("#birthplace").classList.add('off');
    document.querySelector("#favorite").classList.add('off');
};

function move_marusho(){
    if(confirm("株式会社丸昭のサイトへ移動します。よろしいですか？")){
        location.href="https://www.hikakuseizo-marusho.co.jp/"
    } else {
        ;
    }
}

function move_playing(){
    if(confirm("株式会社Playingのサイトへ移動します。よろしいですか？")){
        location.href="https://play-ing.com/"
    } else {
        ;
    }
}

const pageTop = document.querySelector(".top_btn");
const sec = document.querySelector("#history");
const vh = window.innerHeight;

window.addEventListener("scroll",function(){
    const scroll = window.pageYOffset;
    const targetDistance = sec.getBoundingClientRect().top;
    const targetPosition = scroll + targetDistance - vh;

    if(targetPosition < scroll){
        pageTop.classList.add("fade_in");
    } else {
        pageTop.classList.remove("fade_in");
    }
});