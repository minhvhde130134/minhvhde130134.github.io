$(document).ready(function () {
    $("nav").hover(function () {
        $("#bt-2").css("transform", "translateX(45px)");
            $("nav").css("width","90px")
        },function(){
            setTimeout(function () {
                $("#bt-2").css({"transform": "translateX(0)"});
            },1000)
        }
    );
});