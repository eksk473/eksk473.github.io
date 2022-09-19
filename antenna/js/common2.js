$(function(){

    //main slide
    $('.main_news_slide').bxSlider({
        auto:true,
        pause:4000,
        responsive:true,
        touchEnabled:false,
        nextSelector: '.controls .next',
        prevSelector: '.controls .prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        pagerSelector: '.indicator',

    });

    //news slide
    $('.news_list').bxSlider({
        pager:false,
        slideMargin:30,
        responsive:true,
        slideWidth:300,
        maxSlides:6,
        moveSlides:1,
        speed:500,
        nextText: '다음 <i class="fa fa-caret-right"></i>',
        prevText: '<i class="fa fa-caret-left"></i> 이전',
    });

    var $menu = $('.menu ul li'),
    $contents = $('section > div');
    // console.log($menu);
    // console.log($contents);
    
    $menu.click(function(e){
        e.preventDefault();

        $(this).addClass('on').siblings().removeClass('on');
        //한번에 설정가능 = siblings : 나 제외한 다른 형제 -> 이거에 on 만들고 다른 형제들은 on 없애고 

        //클릭한 요소 , 움직일 요소
        var idx = $(this).index(); //li 클릭 순서
            section = $contents.eq(idx); // li 순서에 맞는 contents 
            sectionDistance = section.offset().top;

        //console.log(sectionDistance); // 937 1874 2810 4690
        // console.log(idx);
        // console.log(section);
        $('html,body').stop(true).animate({scrollTop:sectionDistance},500,"easeOutQuart");
        //menu를 클릭하면 선택한 contents의 scollTop을 sectionDistance만큼 이동한다

    }); //click

    // logo누르면 최상단으로 이동
    $(".logo").click(function () {
        $("html, body").stop().animate({scrollTop:0}, 1000,"easeOutQuart");
    });

    //moreartist 누르면 -> 나머지 li 나오고 button value 'end'로 바뀜
    $('.moreButton').click(function(){
        $('.artist_list li:nth-child(n+7)').removeClass('hide');
        $('.moreButton').attr('value','END');
    })

    function storyAni(){
        $('.about_story .txt1').animate({opacity: 1, top:'50%'}, 600, "linear");
        $('.about_story .txt2').delay(800).animate({opacity: 1, top:'50%'}, 600, "linear");
        $('.about_story .txt3').delay(1600).animate({opacity: 1, top:'50%'}, 600, "linear");
    }

    function historyAni(){
        $('.about_history .history1').delay(2300).animate({opacity: 1}, 600, "linear");
        $('.about_history .history2').delay(3000).animate({opacity: 1}, 600, "linear");
        $('.about_history .history3').delay(3700).animate({opacity: 1}, 600, "linear");
    }

    /* 각각 화면 상단에서 떨어진 거리 sectionDistance 보다 스크롤 양이 많으면 (조건) 각 요소마다 index저장 그 index에 맞는 메뉴에 'on' 추가 */
    var index;
    $(window).scroll(function(){
        $($contents).each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                //스크롤 양이 많으면
                var idx=$(this).index();
                // console.log(idx);
                $menu.removeClass('on'),
                $menu.eq(idx).addClass('on');
            }
        });//each
        // console.log(index);

        if($(window).scrollTop()>=$('.artist').offset().top){
            $('.artist_bg').stop().animate({opacity:1},700);
            $('.artist_list').stop().animate({opacity:1},1400,'easeInOutCubic');
            $('.moreArtist').stop().animate({opacity:1},1400,'easeInOutCubic');
        } else{
            if($(window).scrollTop()<$('.news').offset().top){
                $('.artist_bg').stop().animate({opacity:0},100);
                $('.artist_list').stop().animate({opacity:0},100);
                $('.moreArtist').stop().animate({opacity:0},100);
                $('.artist_list li:nth-child(n+7)').addClass('hide');
                $('.moreButton').attr('value','MORE ARTIST');
            }
        };

        // $('.about_txt').each(function(index){
        //     if($(window).scrollTop()>=$('.about').offset().top){
        //         $(this).delay(index*500).animate({'opacity':'1','top':'50%'},700);
        //     }else{
        //         $(this).stop().animate({'opacity':'0','top':'80%'},100);
        //     }
        // });

        // $('.about_history li').each(function(index){
        //     if($(window).scrollTop()>=$('.about').offset().top){
        //        //console.log($('.about').offset().top);
        //         $(this).delay(index*700).animate({'opacity':'1'},500);
        //     }else{
        //         $(this).stop().animate({'opacity':'0'},100);
        //     }
        // });

        if($(window).scrollTop()>=$('.about').offset().top){
            $('.about_before h2').stop(true).animate({opacity:1},1000);
        }else{
            if($(window).scrollTop()<$('.artist').offset().top){
                $('.about_before h2').stop(true).animate({opacity:0},100);
            }
        }

        if($(window).scrollTop()>=$('.about_before > p').offset().top){
            storyAni();
            historyAni();
        }
    }) // scroll

    var albumList = $('.album li'),
        videoList = $('.video li'),
        s_number=0;

    $('.music_prev').click(function(){
        if(s_number == 0){
            s_number = 5;
        }
        else{
            s_number = s_number - 1;
        }
        albumList.removeClass("on");
        albumList.eq(s_number).addClass("on");

        videoList.removeClass("on");
        videoList.eq(s_number).addClass("on");
    });

    $('.music_next').click(function(){
        if(s_number == 5){
            s_number = 0;
        }
        else{
            s_number = s_number + 1;
        }
        albumList.removeClass("on");
        albumList.eq(s_number).addClass("on");

        videoList.removeClass("on");
        videoList.eq(s_number).addClass("on");
    });


})
