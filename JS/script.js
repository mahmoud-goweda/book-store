$(document).ready(function(){
    $('.hamburger-menu').click(function(){
        $('.navigation').toggleClass('change')
    })
    lightbox.option({
        'resizeDuration': 400,
        'wrapAround': true
      });

      $(window).scroll(function () {
          let position = $(this).scrollTop();
          console.log(position)
          position >= 450?$('.gallery').addClass('change'):$('.gallery').removeClass('change')
      });

      $('.writers-accordion').click(function (event) {
       console.log( event.target.id.split('-'))
          if(event.target.id.split('-')[0] === 'button'){

              $('#book-1').attr('src','/img/writers/'+event.target.id.split('-')[1]+'-book1.jpg')
             $('#book-2').attr('src','/img/writers/'+event.target.id.split('-')[1]+'-book2.jpg')
          } 

          
      });

});





























