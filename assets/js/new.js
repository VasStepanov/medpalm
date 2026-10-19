$(document).ready(function () {
    $('.advantages-grid').slick({
        dots: false,         /* Отключаем точки пагинации */
        arrows: false,       /* Отключаем стрелки */
        infinite: false,     /* Выключаем бесконечный цикл, чтобы был понятен конец списка */
        slidesToShow: 1,     /* Базовое количество */
        slidesToScroll: 1,
        mobileFirst: true,   /* Начинаем настройку с мобильных */
        responsive: [
            {
                breakpoint: 0, /* Настройки от 0px до 640px */
                settings: {
                    slidesToShow: 1,
                    variableWidth: true, /* Важно! Позволяет карточкам сохранять свою ширину и "выглядывать" справа */
                    centerMode: false
                }
            },
            {
                breakpoint: 640, /* От 640px и выше — слайдер полностью отключается */
                settings: "unslick"
            }
        ]
    });

    // Переинициализация при изменении размера экрана (чтобы unslick работал корректно)
    $(window).on('resize', function () {
        if ($(window).width() < 640) {
            if (!$('.advantages-grid').hasClass('slick-initialized')) {
                $('.advantages-grid').slick({
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    variableWidth: true
                });
            }
        }
    });

    // Плашки навигации

    $('.directions-nav-tabs').slick({
        dots: false,
        arrows: false,
        infinite: false,
        variableWidth: true, /* Позволяет плашкам иметь разную ширину в зависимости от длины слова */
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768, /* Отключаем слайдер на планшетах и ПК */
                settings: "unslick"
            }
        ]
    });

    // GALLERY

    $('.gallery-grid').slick({
        dots: true,          /* Включаем точки пагинации */
        arrows: false,       /* Отключаем стрелки */
        infinite: true,      /* Галерею можно крутить бесконечно */
        slidesToShow: 1,     /* 1 слайд в экране на мобилке */
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 640, /* Начиная от 640px (ПК и планшеты) слайдер полностью отключается */
                settings: "unslick"
            }
        ]
    });

    // Якорные ссылки

    // 1. Проверяем, есть ли вообще такие ссылки на странице
    var $navLinks = $('.directions-nav-link');

    if ($navLinks.length > 0) {

        $navLinks.on('click', function (event) {
            var targetHash = this.hash;

            if (targetHash) {
                var $targetSection = $(targetHash);

                if ($targetSection.length > 0) {
                    event.preventDefault(); // Отменяем стандартный резкий скачок

                    // Переменная для динамического отступа
                    var headerHeight = 0;

                    // Проверяем ширину экрана в момент клика
                    if ($(window).width() < 768) {
                        headerHeight = 60;  // Отступ для мобильной версии (поменьше)
                    } else {
                        headerHeight = 120;  // Отступ для ПК версии (побольше)
                    }

                    // Вычисляем точную позицию секции с учетом адаптивного отступа
                    var targetOffset = $targetSection.offset().top - headerHeight;

                    // Запускаем плавную анимацию скролла
                    $('html, body').animate({
                        scrollTop: targetOffset
                    }, 800);
                }
            }
        });

    }

    // ==========================================================================
    // ТВОЙ СЛЕДУЮЩИЙ КОД (Продолжит работу в любом случае, даже если ссылок нет)
    // ==========================================================================
    console.log("Скрипт скролла проверен. JS продолжает выполнение...");

    $('.services-carousel').slick({
        dots: false,
        infinite: false, /* Выключаем бесконечный круг, чтобы стрелки затухали в начале/конце */
        slidesToShow: 4, /* На ПК показываем 4 карточки в ряд как на макете */
        slidesToScroll: 1,

        // Подключаем наши кастомные стрелки из верстки
        prevArrow: $('.services-slider-btn--prev'),
        nextArrow: $('.services-slider-btn--next'),

        mobileFirst: true, /* Настройка от меньшего экрана к большему */
        responsive: [
            {
                breakpoint: 0, /* От 0px до 640px (Смартфоны) */
                settings: {
                    slidesToShow: 2,       /* Строго 2 плашки в ряд в одном слайде */
                    slidesToScroll: 2,     /* Перелистывать сразу по 2 штуки */
                    variableWidth: false   /* Отключаем авто-ширину, чтобы сетка делилась ровно пополам */
                }
            },
            {
                breakpoint: 641, /* От 641px до 1024px (Планшеты) */
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            },
            {
                breakpoint: 1025, /* От 1025px и выше (ПК) */
                settings: {
                    slidesToShow: 4, /* На десктопе выстраивается 4 карточки в ряд */
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ]
    });
});
