$(document).ready(function() {
    // nav-scroll
    $('.scroll-link').click(function(event){
        event.preventDefault();
        $('html').animate({scrollTop:$(this.hash).offset().top},2000);
    });

    $('.nav-link').click(function(){
        if($('.navbar-collapse').hasClass('show')){
            $('.navbar-collapse').removeClass('show');
        }
    })

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });

    // lang change
    // var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    // if(isMobile) {
    //     $('.btn-lang').css('pointer-event','none');
    //     $('.change-lang').click(function() {
    //         $('.btn-lang').toggleClass('on');
    //         if(!$('.btn-lang').hasClass('on')){
    //             $('.btn-lang:nth-child(2)').attr('style', ' ');
    //             $('.btn-lang').css('pointer-events','none');
    //         }else{
    //             $('.btn-lang:nth-child(2)').attr('style', 'display:block !important; text-align:center');
    //             $('.btn-lang').css('pointer-events','inherit');
    
    //         }
    //     });
    //     $('.btn-lang').click(function() {
    //         lang = $(this).find('a').data('lang');
    //         location.href = '../' + lang + '/index.html';
    //     });
    // }else{
    //     $('.btn-lang').click(function() {
    //         lang = $(this).find('a').data('lang');
    //         location.href = '../' + lang + '/index.html';
    //     });
    // }

    //video load
    var videoSrc_kor = 'https://www.youtube.com/embed/0UzFrL9CvTE?rel=0&showinfo=0&autoplay=1&mute=1&loop=1';
    var videoSrc_en = 'https://www.youtube.com/embed/BFID9wL4Ieo?rel=0&showinfo=0&autoplay=1&mute=1&loop=1';

    $('.btn-video').click(function(){
        if($('meta[property="og:locale"]').attr('content') == 'ko'){
            $('#solution-video').find('iframe').attr('src' , videoSrc_kor);
        }else{
            $('#solution-video').find('iframe').attr('src' , videoSrc_en);
        }
    })

    $('#solution-video').find('.close').click(function(){
        $('#solution-video').find('iframe').attr('src','');
    })
    
    //display to top-btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });


    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //news - swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        // init: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
       },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          993: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }
    });

    //contact close - form reset
    $('#contact-pubple').find('.close').click(function(){
        $('#contactForm')[0].reset();
    })

    //contact submit - checkbox check required
    $('#contact-pubple').find('input[type="submit"]').click(function(e){
        if($('.check-wrap').find('input').is(':checked') == false){
            e.preventDefault();
            alert('개인정보 수집 및 이용동의 여부에 체크해주세요');
        }
    })

    // footer info accordion
    var acc = document.getElementsByClassName("accordion");
    var accordion = document.querySelector('.accordion');
    var i;
    var infoUp = '사업자 정보 닫기' + '<img' + ' class=' + '"ml-2"' + 'src=' + '"../common/images/btn_up.png"' + '/>';
    var infoDown = '사업자 정보 펼쳐보기' + '<img' + ' class=' + '"ml-2"' + 'src=' + '"../common/images/btn_down.png"' + '/>';
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        if (accordion.classList.contains('active')){
            accordion.innerHTML = infoUp;
        }else{
            accordion.innerHTML = infoDown;
        }
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        });
    }

});

