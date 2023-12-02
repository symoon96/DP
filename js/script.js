$(document).ready(function(){
    let windowWidth = window.innerWidth;
    gnbAct();
    accList();
    
    let reviewSwiper = new Swiper(".review-swiper .swiper", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $(window).resize(function(){
        windowWidth = window.innerWidth;

        if(windowWidth > 960) {
            $('#header .gnb').css('transform', '');
        }
    })
})

// 아코디언탭
function accList(){
    $('.acc-wrap [data-click]').click(function(){
        $(this).closest('.acc-list').toggleClass('on');
        if($(this).closest('.acc-list').hasClass('on')){
            $(this).closest('.acc-list').children('.acc-cont').css('display', 'flex');
        } else {
            $(this).closest('.acc-list').children('.acc-cont').css('display', 'none');
        }
        $(this).closest('.acc-list').siblings().removeClass('on');
        $(this).closest('.acc-list').siblings().children('.acc-cont').hide();
    });
}

function gnbAct(){
    gnbOpen();
    gnbClose()
}

function gnbOpen(){
    $('#header .btn-gnb-open').click(function(){
        $('#header .gnb').css('transform', 'translateX(0)');

        $('body').css('overflow', 'hidden')
    })
}

function gnbClose(){
    $('#header .btn-gnb-close').click(function(){
        $('#header .gnb').css('transform', 'translateX(100%)');

        $('body').css('overflow', '')
    })
}