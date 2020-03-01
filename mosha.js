$(function(){
   $('.list').click(function() {
    /*この下の代入でクリックしたものに適応される
    これ無いと、押したら全部に適用される*/
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      　$answer.removeClass('open');
      　$answer.slideUp();
      　$(this).find('span').text('+');
     }　else {
      　$answer.addClass('open');
      　$answer.slideDown();
      　$(this).find('span').text('-');
     } 
   });
   

   /*この下からfooterのjsを書いていく*/
   $('.fab').hover (
    function() {
      $('#hover').fadeIn(); 
      $(this).animate({
       'font-size':'80px'
     },300);
    },  
    function() {
      $('#hover').fadeOut();  
      $(this).animate({
       'font-size':'60px'
     },300); 
   });

















});


