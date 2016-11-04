$(document).ready(function(){
    //mobile navigation toggle button
    $(".menu").click(function(){
        $(".menu").toggleClass("rotate");

        if($('.nav').css("height") == '0px'){
            //$(".content").animate({'margin-top': '100'}, 200);
            $('.nav').animate({ 'height': '126' }, 200);
        }
        else{
            //$(".content").animate({'margin-top': '5'}, 200);
            $('.nav').animate({ 'height': '0' }, 200);
        }
    });

    //on mobile navigation close menu
    $(".primary").click(function(){
        $(".menu").removeClass("rotate");
    });
});