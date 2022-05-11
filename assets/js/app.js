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
    if(recallItemCount === null) {
        return 0;
    } else {
        if (countSlide <= 9) {
            recallItemCount.innerHTML = '0' + countSlide;
        } else {
            recallItemCount.innerHTML = countSlide;
        }
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
    // dataSelects
    function dataSelects () {
        function newsSelect () {      
            $('.news-filter__btn').click(function (e) {
                let inputNews = $('.news-filter__input');
                let button = $('.news-filter__btn span');
                e.preventDefault();
                $('.news-filter-select').toggleClass('active');
                $('.news-filter-select__item').click(function () {
                    let dataItem = $(this).text().trim();
                    console.log($(this).text().trim())
                    inputNews.val(dataItem);
                    button.text(dataItem);
                    $('.news-filter-select').removeClass('active');
                })
            });
        }
        newsSelect();
        //
        function recallSelectCity () {      
            $('.recall-filter__btn-city').click(function (e) {
                let inputNews = $('.recall-filter__input-city');
                let button = $('.recall-filter__btn-city span');
                e.preventDefault();
                $('.recall-filter-select-city').toggleClass('active');
                $('.recall-filter-select__item-city').click(function () {
                    let dataItem = $(this).text().trim();
                    console.log($(this).text().trim())
                    inputNews.val(dataItem);
                    button.text(dataItem);
                    $('.recall-filter-select-city').removeClass('active');
                })
            });
        }
        recallSelectCity();
        function recallSelectEducation () {      
            $('.recall-filter__btn-education').click(function (e) {
                let inputNews = $('.recall-filter__input-education');
                let button = $('.recall-filter__btn-education span');
                e.preventDefault();
                $('.recall-filter-select-education').toggleClass('active');
                $('.recall-filter-select__item-education').click(function () {
                    let dataItem = $(this).text().trim();
                    console.log($(this).text().trim())
                    inputNews.val(dataItem);
                    button.text(dataItem);
                    $('.recall-filter-select-education').removeClass('active');
                })
            });
        }
        recallSelectEducation();
        function recallSelectDirection () {      
            $('.recall-filter__btn-direction').click(function (e) {
                let inputNews = $('.recall-filter__input-direction');
                let button = $('.recall-filter__btn-direction span');
                e.preventDefault();
                $('.recall-filter-select-direction').toggleClass('active');
                $('.recall-filter-select__item-direction').click(function () {
                    let dataItem = $(this).text().trim();
                    console.log($(this).text().trim())
                    inputNews.val(dataItem);
                    button.text(dataItem);
                    $('.recall-filter-select-direction').removeClass('active');
                })
            });
        }
        recallSelectDirection();
    }
    dataSelects();
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
        $(".select-form-elem__select").each(function() {
            $(this).click(function () {
                if ($(this).parent().hasClass('active')) {                   
                    $(this).parent().removeClass('active');
                } else {
                    $('.select-form-elem__select').parent().removeClass('active');
                    $(this).parent().toggleClass('active');
                }
            });
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

