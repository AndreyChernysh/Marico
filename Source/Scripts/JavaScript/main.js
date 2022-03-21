// Includes

// Main
// Preloader
window.onload = function done() {
    let preloader = document.getElementById('preloader');
    if(!preloader.classList.contains("done"))
        preloader.classList.add("done");
}
// SendMessage
console.log("Width:Height ( " + innerWidth + " : " + innerHeight + " )");
// Burger Memu
function DropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Function JQuery
$(function () {
    // SeconScreen Animated Effect Title Block
    $(window).scroll(function () {
        $('.second_screen .list-title').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__backInLeft");
            }
        })
    })
    // SecondScreen Animated Effect Item list
    $(window).scroll(function () {
        $('.second_screen .feature-list').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInLeft");
            }
        })
    })
    // BlockStep All
    $(window).scroll(function () {
        $('.block-step .step__wrapper').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInUp");
            }
        })
    })
    // BlockHero All
    $(window).scroll(function () {
        $('.block-hero .wrapper_hero').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInRight");
            }
        })
    })
    // SixthScreen 
    // OneLink
    $(window).scroll(function () {
        $('.sixth_screen .one-link').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInBottomLeft");
            }
        })
    })
    // GetSubs
    $(window).scroll(function () {
        $('.sixth_screen .get-subscribers').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInBottomRight");
            }
        })
    })
    // Btn Started
    $(window).scroll(function () {
        $('.sixth_screen .card-btn').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInUp");
            }
        })
    })
    // NinethScreen
    $(window).scroll(function () {
        $('.nineth_screen .twits_wrapper').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeIn");
            }
        })
    })
    // TenthScreen
    $(window).scroll(function () {
        $('.tenth_screen .smile_wrapper').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+820) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeIn");
            }
        })
    })
    // EleventhScreen site-logo 
    $(window).scroll(function () {
        $('.eleventh_screen .site-logo').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+1020) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInDown");
            }
        })
    })
    // EleventhScreen site-title 
    $(window).scroll(function () {
        $('.eleventh_screen .site-title').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+1020) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInTopLeft");
            }
        })
    })
    // EleventhScreen site-sub-title
    $(window).scroll(function () {
        $('.eleventh_screen .site-sub-title').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+1020) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInTopRight");
            }
        })
    })
    // EleventhScreen Btn
    $(window).scroll(function () {
        $('.eleventh_screen .btn').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+1020) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInBottomLeft");
            }
        })
    })
    // EleventhScreen Btn
    $(window).scroll(function () {
        $('.eleventh_screen .result').each(function () {
            var ImgPos = $(this).offset().top;
            var TopOfWindow = $(window).scrollTop();
            if (ImgPos < TopOfWindow+1020) {
                $(this).removeClass("invisible");
                $(this).addClass("animate__animated");
                $(this).addClass("animate__fadeInBottomRight");
            }
        })
    })
})