$(document).ready(function() {
     
    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('.nav li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html .main-content';
            $('.main-content').load(toLoad)
        } 
    });
     
    $('.navbar li a').click(function(){
     
    var toLoad = $(this).attr('href')+' main-content';
    $('main-content').hide('fast',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
        $('main-content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
        $('main-content').show('normal',hideLoader());
    }
    function hideLoader() {
        $('#load').fadeOut('normal');
    }
    return false;
     
    });
});
