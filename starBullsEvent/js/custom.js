/* Call functions on document ready */
$(document).ready(function () {
    //testimonial
    $(".testimonial-bullets span").click(function () {
        var gettestno = $(this).attr("testi");
        $(".testimonial-bullets span").removeClass("test-bullet-active");
        $(this).addClass("test-bullet-active");
        $(".testimonials").hide();
        $(gettestno).fadeIn(1000);
    });

    $(".service-category").click(function () {
        $(".service-category").removeClass("category-active");
        $(this).addClass("category-active");
        var get_cat = $(this).attr("set-cat");
        $(".service-box-outer").hide();
        $(get_cat).fadeIn();
    });

    $('.backtotop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    eqHeight({
        source: '#homepage-quotes img',
        target: '.quotes-text',
        condition: 'oh'
    });

    eqHeight({
        source: '.about-box-content',
        target: '.about-box-red',
        condition: 'oh'
    });

    //    $(".sb-form-input").click(function(){
    //        $(".sb-form-input p").removeClass("form-active");
    //        $(this).find("p").addClass("form-active");
    //        $(".contact-field").css("border-bottom","1px solid #bbb");
    //        $(this).find(".contact-field").css("border-bottom","1px solid #e51e3b");
    //    });
    $(".contact-field").focusin(function () {
        $(this).parentsUntil("form").find("p").addClass("form-active");
        $(".contact-field").css("border-bottom", "1px solid #bbb");
        $(this).css("border-bottom", "1px solid #e51e3b");
    });
    $(".contact-field").focusout(function () {
        $(".contact-field").each(function () {
            var checkval = $(this).val();
            if (checkval != "") {
                $(this).parentsUntil("form").find("p").css("color", "#999");
            } else {
                $(this).parentsUntil("form").find("p").removeClass("form-active");
                $(".contact-field").css("border-bottom", "1px solid #bbb");
            }
        });
    });

    //menu-dropdown on hover
    $(".dropdown").mouseover(function () {
        $(this).children(".dropdown-menu").show();
    });
    $(".dropdown").mouseout(function () {
        $(".dropdown-menu").hide();
    });

   
});


//effect left

$(document).ready(function () {
    var $animation_elements = $('.effect-left');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        var effectdelay = 0;
        $.each($animation_elements, function () {
            var $element = $(this);
            effectdelay = $element.attr("effect-delay");
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position - 100)) {
                window.setTimeout(function () {
                    $element.addClass('in-view');
                }, effectdelay);
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});

//effect right

$(document).ready(function () {
    var $animation_elements = $('.effect-right');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        var effectdelay = 0;
        $.each($animation_elements, function () {
            var $element = $(this);
            effectdelay = $element.attr("effect-delay");
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position - 100)) {
                window.setTimeout(function () {
                    $element.addClass('in-view');
                }, effectdelay);

            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});






/* Call functions on window load */
$(window).load(function () {
    var img_height = $(".img-height").height();
    var quote_height = $(".quote-height").height();
    var height_diff = img_height - quote_height;
    $(".quote-height").css("margin-top", height_diff / 2);
});

/* Call function on window scroll */
$(window).scroll(function () {
    // Add class on scroll
    fixScrollNav({
        target: '.navbar',
        offset: 0
    });
    var conthead_height = $(".contact-header").height();
    var headscroll = $(window).scrollTop();
    //    alert(conthead_height);
    //    alert(headscroll);
    /*if (headscroll > 500) {
        $('.backtotop').show();
    } else {
        $('.backtotop').hide();
    }*/

    if (headscroll > conthead_height) {
        $("#myNavbar").addClass("fix-navbar");
        $("#myNavbar").addClass("scrollFixed");
        $("#switch-cont").addClass("container-fluid").removeClass("container");
        $(".fix-logo-top").css("top", "0");
    } else {
        $("#myNavbar").removeClass("fix-navbar");
        $("#myNavbar").removeClass("scrollFixed");
        $("#switch-cont").addClass("container").removeClass("container-fluid");
        $(".fix-logo-top").css("top", "-100px");
    }

    goToTop('.backtotop');
});

/* Call functions on window resize */
$(window).resize(function () {
    eqHeight({
        source: '#homepage-quotes img',
        target: '.quotes-text',
        condition: 'oh'
    });
    eqHeight({
        source: '.about-box-content',
        target: '.about-box-red',
        condition: 'oh'
    });
});


/* Declare all Functions below */


// Start Add/remove class on scroll
var fixScrollNav = function (options) {
        // Target declaration
        var target = options.target;

        // offset and offsetHeight declaration
        var offset = options.offset;
        var offsetHeight = 0;
        if (isNaN(offset)) {
            offsetHeight = $(offset).outerHeight();
        } else {
            offsetHeight = offset;
        }

        if ($(window).scrollTop() > offsetHeight) {
            $(target).addClass("scrollFixed");
        } else {
            $(target).removeClass("scrollFixed");
        }
    }
    // End Add/remove class on scroll

/* Start of GOTOTOP function */
var goToTop = function (target) {
        if (($(window).scrollTop() > 100)) {
            $(target).addClass('active');
        } else {
            $(target).removeClass('active');
        }
    }
    /* End of GOTOTOP function */


// Equal height function
var eqHeight = function (options) {
    var targetH,
        source = $(options.source),
        target = $(options.target),
        condition = options.condition;

    if (condition == 'oh') {
        targetH = source.outerHeight();
    } else if (condition == 'ih') {
        targetH = source.innerHeight();
    } else if (condition == undefined) {
        targetH = source.height();
    }

    target.css('height', targetH);
}