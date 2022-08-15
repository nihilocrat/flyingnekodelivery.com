$('document').ready(function(){

    $('div.trailer').click(function(){
        $('#trailer-frame').removeClass("hidden");
        $('#trailer-frame').attr('src', "https://www.youtube.com/embed/7Fhq2CmXeyk?rel=0&autoplay=1");
        $('div.trailer').animate({
            "height": "619px"
            },2000);
    })

    $('#news-archive-button').click(function(event){

        event.preventDefault();

        $('#news-archive').animate({
            "margin-top":"10px",
            "height": "500px"
            },1000);

        $('#news-archive-button').animate({
            "height": "0px",
            "padding": "0px"
            },500);
    })

    $('div.banner').click(function(){
        //window.location.href = "https://www.nintendo.com/games/detail/light-fingers-switch/";
        window.location.href = "https://store.steampowered.com/app/410740/Flying_Neko_Delivery/";
        
    });
    
});