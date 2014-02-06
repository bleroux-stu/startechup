$(function() {   
    $("#iconDetail p:not(#icon1)").hide();
    $(".startechupIcon").mouseover(function(){
        var iconId=$(this).attr('id');
        $("#iconDetail p:not(#"+iconId+")").hide();
        $("p[id="+iconId+"]").show('fade');

    });
    $('.sub-nav dd').click(function(){
        $('.sub-nav dd').removeClass('active');
        $(this).addClass('active');
    });
});