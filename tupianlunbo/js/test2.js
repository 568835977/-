$(document).ready(function () {
    $("#picture").focus(function () {
        $("#picture>#leftBtn").show();
        $("#picture>#rightBtn").show();
        $("p").hide();
    });
    $("#picture").blur(function () {
        $("#picture>#leftBtn").hide();
        $("#picture>#rightBtn").hide();
    });

    $(".btn1").click(function () {
        $("p").hide();
    });

    $(".btn1").click(function () {
        $("p").hide();
    });


    $(".btn2").click(function () {
        $("p").show();
    });
    $("p").click(function () {
        $(this).css("color","green");
    });

    $("#picture").mouseover(function () {
        $(".btn1").show();
        $(".btn2").show();
    });
    $("#picture").mouseleave(function () {
        $(".btn1").hide();
        $(".btn2").hide();
    });
});


// $(document).ready(function () {
//     $(".btn1").click(function () {
//         $("p").hide();
//     });
// });