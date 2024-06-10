"use strict";
let headerBox = document.querySelector('#header');
// let header_height = headerBox.clientHeight;
let top_menu = document.querySelector('.top_menu');
// let top_menu_height = top_menu.clientHeight;
// document.write(header_height);
// main banner height height and decrease header height and margin top(size : header height) START
// let css_mt_height = `margin-top: ${header_height}px;  `;
let banner_box = document.getElementById('main_banner');
if (banner_box) {
    // banner_box.style.cssText = css_mt_height;
}
// let css_mt = `margin-top: ${header_height}px;`;
let other_banner = document.getElementById('other_banner');

if (other_banner) {
    other_banner.style.cssText = css_mt;
}


// css_mt_height = `margin-top: ${header_height}px; `;
// banner_box = document.getElementById('sss');


// main banner height height and decrease header height and margin top(size : header height) END
// *****
// *****
// *****
// loader remove when page is loaded AND add scroll to body when loader is removed START
// document.body.setAttribute("class", "noscroll");
/*window.onload = function() {
        document.getElementById("loader").style.display = "none";
        // document.body.className = document.body.className.replace(/\bnoscroll\b/, '');
    }*/
// loader remove when page is loaded AND add scroll to body when loader is removed END
// *****
// *****
// *****
//add class on scroll top START
let scrollY = window.scrollY;
$(document).ready(function() {
    //  banner_box.style.cssText = `margin-top: -${header_height}px; padding-top: ${header_height * 1.3}px; `;

});

function addClass_on_scroll() {
    banner_box.style.cssText = `margin-top: ${header_height}px;`;
    headerBox.classList.remove("position-relative");
    headerBox.classList.add("fixed-top", "header_trans");
    // headerBox.style.cssText = `margin-top: -${top_menu_height}px;   `;

    // banner_box.style.cssText = `margin-top: 0px; `;
    // banner_box.style.cssText = `margin-top: 0px; `;

}

function removeClass_on_scroll() {
    headerBox.classList.add("position-relative");

    headerBox.classList.remove("fixed-top", "header_trans");
    // banner_box.style.cssText = `margin-top: ${header_height}px;  `;

    banner_box.style.cssText = `margin-top: 0px; `;

    // banner_box.style.cssText = `margin-top: ${header_height}px;  `;
    headerBox.style.cssText = `margin-top: 0; `;

}
window.addEventListener('scroll', function() {
    scrollY = window.scrollY;
    if (window.scrollY > `${header_height}` * 1) {

        addClass_on_scroll();
        if (window.innerWidth <= 767) {
            // headerBox.style.cssText = `margin-top: -${top_menu_height}px;   `;
        }
    } else {
        removeClass_on_scroll();
    }
});
//add class on scroll top END
//  ***
//  ***
//  ***
//  ***
// window RELOAD every resize screen START
// window.addEventListener('resize', function () {
//     window.location.reload();
// });
// window RELOAD every resize screen END

// var element = document.querySelector('.dropdown > a');

// element.classList.remove('dropdown-toggle');

// window.addEventListener('resize', function() {
//     var currentWidth = Math.min(window.innerWidth || Infinity, screen.width),
//         currentClass = currentWidth > 992 ? 'dropdown-toggle' : 'democlass';

//     // element.classList.add('no-transition');
//     element.classList.remove('dropdown-toggle', 'democlass');
//     element.classList.add(currentClass);
//     // element.classList.remove('no-transition');
// });
// $(window).on("load resize", function() {
//     if (this.matchMedia("(min-width: 992px)").matches) {
//         $('.dropdown > a').addClass("dropdown-toggle");

//     } else {
//         $('.dropdown > a').removeClass("dropdown-toggle");

//     }
// });
// lighbox gallery 
// lightGallery(document.getElementById('lightgallery'));
// lighbox gallery 
// var swiper = new Swiper(".testimonials", {

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     centeredSlides: true,
//     // autoplay: {
//     //     delay: 3000, // 5 seconds delay between each slide
//     //     disableOnInteraction: false, // Autoplay will not stop on user interaction
//     // },
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//     },
//     slidesPerView: 1, // Show one slide at a time
//     spaceBetween: 0, // Add space between slides
//     breakpoints: {
//         // When window width is >= 768px
//         0: {
//             slidesPerView: 1,
//         },
//         // When window width is >= 992px

//         // // When window width is >= 1200px
//         // 992: {
//         //     slidesPerView: 2,
//         // },
//         // 1399: {
//         //     slidesPerView: 3,
//         // },
//         // 1800: {
//         //     slidesPerView: 3,
//         // },
//     },
// });


// form validation



// let inquire_form = document.getElementById("inquire_form");
// if (inquire_form) {

// }
// $(function() {
//     jQuery.validator.addMethod("phone_regex", function(value, element) {
//         return this.optional(element) || /^[0-9\.\-_]{10,30}$/i.test(value);
//     }, "Please enter only numeric value");
//     jQuery.validator.addMethod("pcode_regex", function(value, element) {
//         return this.optional(element) || /^[0-9\.\-_]{6,6}$/i.test(value);
//     }, "Please enter only numeric value");
//     jQuery.validator.addMethod("childage_regex", function(value, element) {
//         return this.optional(element) || /^[0-9\.\-_]{1,2}$/i.test(value);
//     }, "Please enter only numeric value");
//     jQuery.validator.addMethod("childage_between", function(value, element) {
//         // Convert age value to integer
//         var age = parseInt(value);
//         // Check if age is between 5 and 50 (inclusive)
//         return age >= 1 && age <= 26;
//     }, "Please enter a child age between 1 and 26.");
//     jQuery.validator.addMethod("validate_email", function(value, element) {
//         if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
//             return true;
//         } else {
//             return false;
//         }
//     }, "Please enter a valid Email.");

//     $.validator.addMethod("aplhabateonly", function(value, element) {
//         return this.optional(element) || /^[a-zA-Z.,'"\- ]*$/.test(value);
//     }, "Please enter only alphabetical characters (a-z)");
//     $.validator.addMethod("letterswithbasicpunc", function(value, element) {
//         return this.optional(element) || /^[a-zA-Z.,'"\- ]*$/.test(value);
//     }, "Please enter only alphabetical characters (a-z).");
// });
// $(document).ready(function() {
//     $("#enroll_form").validate({
//         rules: {
//             fname: {
//                 required: true,
//                 minlength: 1,
//                 maxlength: 50,
//                 letterswithbasicpunc: true
//             },
//             selectOption: {
//                 required: true,

//             },

//             message: {
//                 maxlength: 100
//             },
//             email: {
//                 required: true,
//                 validate_email: true
//             },
//             phone: {
//                 required: true,
//                 minlength: 10,
//                 maxlength: 10,
//                 phone_regex: true,
//             },

//         },
//         messages: {
//             fname: {
//                 required: "Please enter your Name",
//             },
//             selectOption: {
//                 required: "Please choose any Program",
//             },

//             email: {
//                 required: "Please enter a valid email address",
//                 validate_email: "Please enter a valid email address"
//             },
//             phone: {
//                 required: "Please enter a valid phone number",
//             },

//         },
//         submitHandler: function(form) {
//             // var $captcha = $('#recaptcha');
//             // var response = grecaptcha.getResponse();

//             // if (response.length === 0) {
//             //     alert("Captcha is mandatory");
//             //     if (!$captcha.hasClass("error")) {
//             //         $captcha.addClass("error");
//             //     }
//             //     return false
//             // } else {
//             //     form.submit();
//             // }
//             form.submit();
//         }
//     });
// });


// if (banner_box) {
//     banner_box.style.cssText = `padding-top: (${header_height}/2)px;  `;
// }
// counter 


// const acc_btn = document.querySelector('.accordion-item:first-child .accordion-button');
// const acc_cont = document.querySelector('.accordion-item:first-child .accordion-collapse ');
// acc_btn.classList.remove('collapsed');
// acc_cont.classList.remove('collapse');


// perallex effect anim

// perallex effect anim
// change video on click modal

// change video on click modal

// AOS.init({
//     duration: 1000,
//     once: true
// });

let counter_tag = document.getElementById("counter");
var counted = 0;
$(window).scroll(function() {
    if (counter_tag) {
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
            counted = 1;
        }
    }
});
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.progress-wrap').addClass('active-progress');
        } else {

            $('.progress-wrap').removeClass('active-progress');
        }
    });

    // // get the path element
    // var path = $(".progress-circle path");

    // // get the total length of the path
    // var pathLength = path[0].getTotalLength();

    // // set the initial value of stroke-dashoffset to the total length
    // path.css("stroke-dashoffset", pathLength);

    // // track the scroll position and update the stroke-dashoffset
    // $(document).scroll(function() {
    //     var scrollPercentage = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    //     var dashoffset = pathLength * (1 - scrollPercentage / 100);
    //     path.css("stroke-dashoffset", dashoffset);
    // });
    // var btn = $('.progress-wrap');
    // btn.on('click', function(e) {
    //     e.preventDefault();
    //     $('html, body').animate({ scrollTop: 0 }, '300');
    // });

});


// cursor
/*
const cursor = document.querySelector("#cursor"),
    cursorBorder = document.querySelector("#cursor-border"),
    cursorPos = { x: 0, y: 0 },
    cursorBorderPos = { x: 0, y: 0 };
document.addEventListener("mousemove", r => { cursorPos.x = r.clientX, cursorPos.y = r.clientY, cursor.style.transform = `translate(${r.clientX}px, ${r.clientY}px)` }), requestAnimationFrame(function r() { cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / 8, cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / 8, cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`, requestAnimationFrame(r) }), document.querySelectorAll("[data-cursor]").forEach(r => { r.addEventListener("mouseover", e => { "pointer" === r.dataset.cursor && (cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)", cursorBorder.style.setProperty("--size", "50px")), "pointer2" === r.dataset.cursor && (cursorBorder.style.backgroundColor = "white", cursorBorder.style.mixBlendMode = "difference", cursorBorder.style.setProperty("--size", "50px")) }), r.addEventListener("mouseout", r => { cursorBorder.style.backgroundColor = "unset", cursorBorder.style.mixBlendMode = "unset", cursorBorder.style.setProperty("--size", "30px") }) });*/
// cursor




//

// particals
// Some random colors

// particals

// fixed on scroll
// let other_banner_Box = document.querySelector('#other_banner_Box');
// let other_banner_height = other_banner_Box.clientHeight;
// let footer_Box = document.querySelector('#footer_Box');
// let footer_height = other_banner_Box.clientHeight;

// $(window).scroll(function() {
//     let threshold_both = header_height + other_banner_height;

//     let threshold = `${threshold_both}`;
//     // alert(threshold_both);
//     if ($(window).scrollTop() >= threshold)
//         $('#sidebar').addClass('fixed');
//     else
//         $('#sidebar').removeClass('fixed');
//     var check = $("#content").height() - $("#sidebar").height() - 21;
//     if ($(window).scrollTop() >= check)
//         $('#sidebar').addClass('bottom');
//     else
//         $('#sidebar').removeClass('bottom');
// });


// fixed on scroll



// activ on scroll
// $('a').click(function() {
//     $('html, body').animate({
//         scrollTop: $($(this).attr('href')).offset().top
//     }, 500);
//     return false;
// });

// Cache selectors


// Bind to scroll
// $(window).scroll(function() {
//     // Get container scroll position
//     var fromTop = $(this).scrollTop() + topMenuHeight;

//     // Get id of current scroll item
//     var cur = scrollItems.map(function() {
//         if ($(this).offset().top < fromTop)
//             return this;
//     });
//     // Get the id of the current element
//     cur = cur[cur.length - 1];
//     var id = cur && cur.length ? cur[0].id : "";
//     // Set/remove active class
//     menuItems
//         .parent().removeClass("active")
//         .end().filter("[href='#" + id + "']").parent().addClass("active");
// });
// activ on scroll
