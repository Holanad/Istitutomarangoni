// Ленивая загрузка
//var myLazyLoad = new LazyLoad();

// Swiper slider Teacher
const teacher = new Swiper(".teacher-slider", {
    slidesPerView: "auto",
    freeMode: true,
});
// Swiper slider RECALL
const swiper = new Swiper(".recall-slider", {
    navigation: {
      nextEl: ".recall-slider-manager__next",
      prevEl: ".recall-slider-manager__prev",
    },
    slidesPerView: "auto",
    freeMode: true,
    pagination: {
        el: ".swiper-scrollbar",
        type: "progressbar",
    },
});
const sliderRecall = () => {
    let countSlide = document.querySelectorAll('.recall-item').length;
    let recallItemCount = document.querySelector('.recall-item-count');
    
    if (countSlide <= 9) {
        recallItemCount.innerHTML = '0' + countSlide;
    } else {
        recallItemCount.innerHTML = countSlide;
    }
};
sliderRecall();
//----------------------//

/*function scrollTeacher () {
    let activateAnimation = true;
    const teacherBlockElem = document.querySelector('.teacher-block');
    const teacherItemElem = document.querySelectorAll('.teacher-item');
    
    function teacherAmination () {
        if (activateAnimation === true) {
            function cyrcleTeacher () {
                for (let i = 0; i < teacherItemElem.length; i++) {
                    setTimeout(function timer() {
                        if(teacherItemElem[i].previousElementSibling == null) {
                            teacherItemElem[i].classList.add('active');
                            let lastItemElem = teacherBlockElem.lastChild.previousSibling;
                            lastItemElem.classList.remove('active');
                        } else {
                            teacherItemElem[i].previousElementSibling.classList.remove('active');
                            teacherItemElem[i].classList.add('active');
                            teacherItemElem[i].previousElementSibling.classList.remove('active');
                        }
                    }, i * 3000);
                }
            }
            cyrcleTeacher();
            setInterval(function() {
                cyrcleTeacher();
            },teacherItemElem.length * 300);
        } else {
            console.log('22')
        }
    }
    teacherAmination();
   /* teacherItemElem.forEach(e => {
        e.addEventListener('mouseover', () => {
            activateAnimation = false;
        })
    })*/
/*}
scrollTeacher();*/


// jQuery function
$(document).ready(function() {
    // accordion
    function accordion() {
        $(".price-item-head").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".price-item-head").not(this).removeClass("open").next().slideUp();
        });
    };
    accordion();
    // activeSelect
    function activeSelect () {
        $(".intro-form-elem__select").each(function() {
            $(this).click(function () {
                if ($(this).parent().hasClass('active')) {                   
                    $(this).parent().removeClass('active');
                } else {
                    $('.intro-form-elem__select').parent().removeClass('active');
                    $(this).parent().toggleClass('active');
                }
            })
        });
    }
    activeSelect();

    // Burger menu
    function headerBurger (){
        $('.header-burger').click(function () {
        $('.header-burger').toggleClass('active');
        $('.header-mobile').toggleClass('active ');
        $('html').toggleClass('hidden');
        });
    };
    headerBurger();

    // Arrow UP
    function scrollUp () {
        $('.footer-arrow').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, 1500);
        });
    };
    scrollUp();

    // navPosition RECALL
    function navPosition() {
        if ($('.indent-wrapper').length) {
            $(window).on('load resize', function() {
                navAbsolute();
            });

            function navAbsolute() {
                let sectionWidth = $('.recall').width();
                let contWidth = $('.recall .container').width();

                let totalRight = (sectionWidth - contWidth) / 2;

                $('.indent').css("padding-left", totalRight);
                $('.indent').css("padding-right", totalRight);
            };
            navAbsolute();
        }
    };
    navPosition();
    // Marquee
    function marqueeTeacher() {
        if ($('.teacher-block').length) {
          $('.teacher-slider').marquee({
              direction: 'left',
              duplicated: true,
              duration: 10000,
              pauseOnHover: true,
              gap: 30,
              delayBeforeStart: 0,
              startVisible: true,
          });
      };
    };
    marqueeTeacher();
    // Marquee
    function marquee() {
    if ($('.tablet-wrapper').length) {
          $('.tablet-wrapper').marquee({
              direction: 'left',
              duplicated: true,
              duration: 30000,
              gap: 50,
              delayBeforeStart: 0,
              startVisible: true,
          });
      };
    };
    marquee();

    // CheckboxFORM 
    function checkboxForm () {
        $('.question-form-checkbox__input').click(function () {
            $('.question-form__btn').toggleClass('disable');
        });
    }
    checkboxForm();


    //Валидации сайта
    function formValidate() {
        $('.question-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 5
                },
                phone: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                }
            }
        });
    };
    formValidate();
});

