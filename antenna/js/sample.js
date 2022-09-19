$(function(){
    var s_number = 0;

    // 슬라이더 자동재생
    var autoSlider = setInterval(function(){
        if(s_number == 4){
            s_number = 0;
        }
        else{
            s_number = s_number + 1;
        }
        $(".s-btn li").removeClass("on");
        $(".s-btn li").eq(s_number).addClass("on");
        
        $(".sliderBox .photoBox").stop().fadeOut(2000);
        $(".sliderBox .photoBox").eq(s_number).stop().fadeIn(2000);

        $(".m-slider li").stop().fadeOut(2000);
        $(".m-slider li").eq(s_number).stop().fadeIn(2000);
    },4000);


    // 슬라이더 마우스 올리면 멈춤
    $(".photoBox").mouseenter(function(){
        clearInterval(autoSlider);
    });


    // 마우스 떼면 다시 재생
    $(".photoBox").mouseleave(function(){
        autoSlider = setInterval(function(){
            if(s_number == 4){
                s_number = 0;
            }
            else{
                s_number = s_number + 1;
            }
            $(".s-btn li").removeClass("on");
            $(".s-btn li").eq(s_number).addClass("on");
            
            $(".sliderBox .photoBox").stop().fadeOut(2000);
            $(".sliderBox .photoBox").eq(s_number).stop().fadeIn(2000);
        },4000);
    });

    // 슬라이더 버튼
    $(".prev").click(function(){
        if(s_number == 0){
            s_number = 4;
        }
        else{
            s_number = s_number - 1;
        }
        $(".s-btn li").removeClass("on");
        $(".s-btn li").eq(s_number).addClass("on");

        $(".sliderBox .photoBox").stop().fadeOut(2000);
        $(".sliderBox .photoBox").eq(s_number).stop().fadeIn(2000);
    });

    $(".next").click(function(){
        if(s_number == 4){
            s_number = 0;
        }
        else{
            s_number = s_number + 1;
        }
        $(".s-btn li").removeClass("on");
        $(".s-btn li").eq(s_number).addClass("on");

        $(".sliderBox .photoBox").stop().fadeOut(2000);
        $(".sliderBox .photoBox").eq(s_number).stop().fadeIn(2000);
    });

    $(".s-btn li").click(function(){

        $(".s-btn li").removeClass("on");
        $(this).addClass("on");

        s_number = $(this).index();
        
        $(".sliderBox .photoBox").stop().fadeOut(2000);
        $(".sliderBox .photoBox").eq(s_number).stop().fadeIn(2000);
    });

    //휠 구간 작업(휠 이벤트 적용시 내릴때는 footer가 올라오고 올리면 footer가 내려감)
    var wheelDelta = 0;

    //휠 동작 시 체크하는 변수 역할
    var wheelCheck = 0;

    $(".slider").on("mousewheel",function(event){

        

        //휠 감도 값 받아줄 변수 세팅
        wheelDelta = event.originalEvent.wheelDelta;

        //마우스 휠 감도값 변수 콘솔창에서 확인
        console.log(wheelDelta);

       

        if(wheelDelta > 0) { //휠 올릴때

            if(wheelCheck == 0) {

                 //휠 하는 순간 0에서 1로 데이터 교체
                wheelCheck = 1;
                $(".header").removeClass("on");
                $(".textBox").stop().fadeIn();

                $(".footer").stop().animate({"bottom":-200},500);
                $(".slider").stop().animate({"top":0},500,function(){

                    wheelCheck = 0;
                });

            }
        }

        else if(wheelDelta < 0) {  //휠 내렸을 때

            if(wheelCheck == 0) {

                wheelCheck = 1;
                $(".header").addClass("on");
                $(".textBox").stop().fadeOut();
                $(".footer").stop().animate({"bottom":0},500);
                $(".slider").stop().animate({"top":-150},500,function(){
            
                    wheelCheck = 0;

                });
                

            }

        }

    });

    // gnb 클릭시 각 서브페이지로 이동
    var gnblist = 0;

    $(".gnb li").click(function(){
       gnblist = $(this).index();

        $("html,body").css({"overflow-y":"visible"});
        $("#subpage > div").eq(gnblist).stop().fadeIn();
        $(".sub-about,.blackBG,.sub-galley,.sub-reservation,.sub-qna").addClass("on");
    });

    // 모바일 gnb 메뉴 
    $(".ham").click(function(){
        $(".m-tab").stop().animate({"right":0},1000);
        $(".textBox").stop().fadeOut();
    });
    $(".m-tab .close").click(function(){
        $(".m-tab").stop().animate({"right":-341},1000);
        $(".textBox").stop().fadeIn();
    });

    $(".m-gnb li").click(function(){
        
        gnblist = $(this).index();

        $("html,body").css({"overflow":"visible"});
        $("#subpage > div").eq(gnblist).stop().fadeIn();
        $(".sub-about,.blackBG,.sub-galley,.sub-reservation,.sub-qna").addClass("on");

        $(".m-tab").stop().animate({"right":-341},1000);
    });
    $(".m-gnb li").mouseenter(function(){
        $(this).siblings().children("a").css({"color":"#d1d8c6"});
    });
    $(".m-gnb li").mouseleave(function(){
        $(this).siblings().children("a").css({"color":"#41670a"});
    });

    // 서브페이지 닫기 버튼
    $("#subpage .close").click(function(){
        $("#subpage > div").stop().fadeOut();
        $("html,body").css({"overflow":"hidden"});
        $(".sub-about,.blackBG,.sub-galley,.sub-reservation,.sub-qna").removeClass("on");

        $(".textBox").stop().fadeIn();
    });


    // 큐앤에이 정렬
    $(".left-btn li").click(function(){
        $(".left-btn li").removeClass("on");
        $(this).addClass("on");
    });

    $(".left-btn li").eq(0).click(function(){
        $(".all").show();
    });

    $(".left-btn li").eq(1).click(function(){
        $(".app").show();
        $(".fin").hide();
    });

    $(".left-btn li").eq(2).click(function(){
        $(".fin").show();
        $(".app").hide();
    });

    /*up클릭시 스크롤바 가장 최상단으로 이동*/
    $(".up").click(function(event){
        event.preventDefault();
        //a태그의 기본기능 중단 
        
        $("html,body").stop().animate({"scrollTop":0});

    });


    //웹브라우저 창 리사이즈 이벤트(창크기 조절 했을 때)
    var photo; // 갤러리 사진 높이값 받아올 부분

    var webWidth = $(window).outerWidth();// 웹브라우저 창 가로사이즈

    $(window).resize(function(){

        webWidth = $(window).outerWidth(); //리사이즈 할 때마다 웹브라우저 가로크기 계속 갱신
        

        if(webWidth <= 1024) {
            
            photo = $(".photo").height();
            $(".g-Box li").height(photo);
        }
        else {

            $(".g-Box li").height(380);
        }
         

    });  



});


//원페이지 스크롤

var scroll = function(){
    
    var $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $(".content");
        $nav = $(".header a");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $nav.on("click", function(){
            moveIndex = $(this).parent("li").index();
            moving(moveIndex);
            return false;
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        time = true // 휠 이벤트가 실행 동시에 트루로 변경
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 3){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false; // 휠 이벤트가 끝나면 펄스로 변경
        });
        $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
    };
    
};
scroll();

//sm bxslider

var mainVisualSlide = mainVisual.find(".visual_slide").removeClass("load").bxSlider({
    touchEnabled:false,
    auto:false,
    pause:10000,
    speed:1600,
    pager:false,
    controls:false,
    onSlideAfter: function(slide, prev, next) {
        if(next != issuePrev) {
            mainVisualSlide.goToSlide(issuePrev);
        }
    }
});
var mainTextSlide = mainVisual.find(".text_slide").removeClass("load").bxSlider({
    auto:true,
    mode:"fade",
    auto:false,
    pause:10000,
    speed:1600,
    pager:false,
    controls:false,
    onSlideBefore: function(slide,prev,next) {
        issueSlideCheck = false;
        issuePrev = next;
        mainTextSlide.stopAuto();
        if(prev != next) {
            if(prev < next && prev + 1 == next) {
                mainVisualSlide.goToNextSlide();
            }
            else if(prev > next && next + 1 == prev) {
                mainVisualSlide.goToPrevSlide();
            }
            else if(next == 0) {
                mainVisualSlide.goToNextSlide();
            }
            else {
                mainVisualSlide.goToSlide(next);
            }
        }
        
        $(".main_visual .obj_line").removeClass("slide_0 slide_1 slide_2 slide_3 slide_4").addClass("slide_" + next);
    },
    onSlideAfter: function(slide,prev,next) {
        setTimeout(function() {
            issueSlideCheck = true;
        }, 100);
        mainTextSlide.startAuto();
    }
});

mainVisual.find(".btn_slide").on("click", function() {
    if($(this).hasClass("prev")) {
        mainVisualSlide.goToPrevSlide();
        mainTextSlide.goToPrevSlide();
    }
    else {
        mainVisualSlide.goToNextSlide();
        mainTextSlide.goToNextSlide();
    }
    return false;
});


// 글씨 움직이는거
$(document).ready(function () {
    $('.count').counterUp({
        delay: 10,
        time: 1500
    });
    //  메인탑 에니메이션
    $('.main-top-bottom').delay(1400).animate({top:"710px", opacity: 1, letterSpacing: "-.8px"}, 600, "linear");
    $('.biz1').delay(1200).animate({opacity: 1}, 600, "linear");
    $('.biz2').delay(2600).animate({opacity: 1}, 600, "linear");
    $('.biz3').delay(4000).animate({opacity: 1}, 600, "linear");
    $('.biz4').delay(5500).animate({opacity: 1}, 600, "linear");
    // 하단 인재 에니메이션
    function recuAni(){
        $('.main-ksi-recruit-inner .sub-title').delay(300).animate({opacity: 1}, 1000, "linear");
        $('.main-recruit-people').delay(600).animate({opacity: 1}, 600, "linear");
        $('.rec-imgs .rec1').delay(800).animate({opacity: 1}, 600, "linear");
        $('.rec-imgs .rec2').delay(1200).animate({opacity: 1}, 600, "linear");
        $('.rec-imgs .rec3').delay(1600).animate({opacity: 1}, 600, "linear");
    }

    // 스크롤에 따른 이벤트
    $(window).scroll(function(){
        var scrTop = $(window).scrollTop();
        console.log(scrTop);

            if(scrTop>300) {
                $('.main-contents .ani-title1, .main-contents .ani-box1, .main-contents .ani-box2').addClass('scr-ani');
            } else {
                $('.main-contents .ani-title1, .main-contents .ani-box1, .main-contents .ani-box2').removeClass('scr-ani');
            }

            if(scrTop>600) {
                $('.main-contents .ani-box2').addClass('scr-ani');
            } else {
                $('.main-contents .ani-box2').removeClass('scr-ani');
            }

            if(scrTop>1100) {
                $('.main-ksi-ad .ani-title1, .main-ksi-ad .ani-box1').addClass('scr-ani');
            } else {
                $('.main-ksi-ad .ani-title1, .main-ksi-ad .ani-box1').removeClass('scr-ani');
            }

            if(scrTop>1900) {
                $('.main-ksi-stat .ani-title1, .main-ksi-stat .main-stat-graph').addClass('scr-ani');
            } else {
                $('.main-ksi-stat .ani-title1, .main-ksi-stat .main-stat-graph').removeClass('scr-ani');
            }

            if(scrTop>2270) {
                $('.main-ksi-recruit .ani-title1').addClass('scr-ani');
            } else {
                $('.main-ksi-recruit .ani-title1').removeClass('scr-ani');
            }

            if(scrTop>2700) {
                recuAni();
            }
        }
    );
});