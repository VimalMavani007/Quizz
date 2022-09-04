$('#dailyBonusbtn').click(function(e){
    $('#dailyModalWindow').addClass('open');
    if($('#dailyModalWindow').hasClass('open')){
        $('.main-container').append('<div class="custom-backdrop" style="opacity:1;"></div>')
    }
})
$('#modal-close').click(function(){
    $('#dailyModalWindow').removeClass('open');
    if(!$('#dailyModalWindow').hasClass('open')){
        $('.custom-backdrop').remove();
    }
})


$('#lifelineBtn').click(function(e){
    $('#LifeLineWindow').addClass('open');
    if($('#LifeLineWindow').hasClass('open')){
        $('.main-container').append('<div class="custom-backdrop" style="opacity:1;"></div>')
    }
})
$('#LifelineClose').click(function(){
    $('#LifeLineWindow').removeClass('open');
    if(!$('#LifeLineWindow').hasClass('open')){
        $('.custom-backdrop').remove();
    }
})