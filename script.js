$(function(){

  $('#header-text').click(function(){
  	$('html,body').animate({
  	  'scrollTop':0
  	},'slow')
  });


  $('.header-menu').click(function() {

  	if ($(this).hasClass('fa-chevron-down')) {
  	  $(this).removeClass('fa-chevron-down');
  	  $(this).addClass('fa-chevron-up');
  	  $('#clicked-menu').slideDown();
  	}else{
  	  $(this).removeClass('fa-chevron-up');
  	  $(this).addClass('fa-chevron-down');
  	  $('#clicked-menu').slideUp();
  	}
  	
  });

  $('.scroll-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position-105
    },'slow');
  });


  

});
