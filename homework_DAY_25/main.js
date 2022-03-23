$(".menu-icon").click(function() {
    $(".sidebar").css({
        "display": "block",
        "left": "0",
        "transition": "all 0.5s"
    })
    $("#overlay").css("display", "block")
    $('body,html').css('overflow','hidden');
})

function hiddenMenu(){
    $(".sidebar").css("left", "-250px")
    $("#overlay").css("display", "none")
    $('body,html').css('overflow','auto');
}

$("#overlay").click(function() {
    hiddenMenu();
})

$(".x").click(function(){
    hiddenMenu()
})

$(window).resize(function(){
    if($(window).innerWidth() > 990) {
        $(".sidebar").css("left", "-250px")
        $("#overlay").css("display", "none")
    }
})