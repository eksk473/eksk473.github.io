$(function(){
    var container = $('.main_news'),
        slideGroup = container.find('.main_news_slide'),
        slides = slideGroup.find('li')
        slideCount = slides.length,
        indicator = container.find('.indicator'),
        nav = $('.main_news .controls'),
        indicatorHTML = ' ',
        currentIndex=0,
        duration = 500,

    slides.each(function(i){
        $(this).css({left:100*i+'%'});
        indicatorHTML += '<a href="#">'+(i+1)+'</a>';
    })
    indicator.html(indicatorHTML);

    function goToSlide(index){
        slideGroup.stop(true).animate({left:-100*index+'%'},duration);
        currentIndex=index;
        updateNav();
    }
        setInterval(function(){
            var nextIndex = (currentIndex + 1)%slideCount;
            goToSlide(nextIndex);
    },3500);
/*
     //slides 각각 left 가로로 정렬
    $slides.each(function(i){
        $(this).css({left:100*i+'%'});
    });

    //slides 움직이기
    function goToSlide(index){
        $sliderGroup.stop(true).animate({left:-100*index+'%'},500);
        currentIndex=index;
        updateNav();
    }
        setInterval(function(){
        var nextIndex=(currentIndex+1)%slideCount;
        goToSlide(nextIndex);
    },3000); 
*/

    //controls 슬라이드 움직일때마다 클래스 추가/제거
    function updateNav(){
        var prevNav = nav.find('.prev'),
            nextNav = nav.find('.next');

        if(currentIndex == 0){
            prevNav.addClass('disabled');
        } else{
            prevNav.removeClass('disabled');
        }
        if(currentIndex == slideCount - 1){
            nextNav.addClass('disabled');
        } else{
            nextNav.removeClass('disabled');
        }
        //슬라이드 index따라서 indicator a 클래스 추가/제거
        indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
    }

    //controls 누르면 슬라이드 이동
    nav.find('a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('prev')){
            goToSlide(currentIndex - 1);
        } else{
            goToSlide(currentIndex + 1);
        }
    });

    //indicator 누르면 슬라이드 이동
    indicator.find('a').click(function(){
        var ci = $(this).index();
        // console.log(ci);
        goToSlide(ci);
    })
}) //end