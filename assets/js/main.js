let swiper = new Swiper(".questions__list", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {

        el: ".swiper-pagination",
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1146: {
            slidesPerView: 3
        },
    }
});
let swiper1 = new Swiper(".first__list", {
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    }
});
document.querySelectorAll('.menu').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
        document.querySelector('.mobile-menu').classList.toggle('active');
    });
});
$(document).ready(function () {
    $('.img-map__item').on('click', function () {
        const show = $(this).data('show')
        $('.map .map-item').slideUp()
        $(show).slideDown()
    })

})
$(document).ready(function () {
        $(".modal .modal__container").on("click", function (e) {
            e.stopPropagation();
        });

        $(".open__modal").on("click", function (e) {
            e.preventDefault();
            const open = $(this).data('open');
            $(open).fadeIn();
        });

        $(".modal .close, .modal, .modal-close ").on("click", function (e) {
            e.preventDefault();
            $(".modal").fadeOut(function () {
                $("body").css("overflow", "auto");
            });
        });
})