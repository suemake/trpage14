$(function () {
    const main_product_slide = new Swiper('.main_product_slide', {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 24,
        // 슬라이드 갯수 조정
        scrollbar: {
            el: ".main_product .inner .scroll",
            hide: false,
            draggable: true,
            dragSize: 240,
        },
    });



    $('.main_product .prev').on('click', function () {
        main_product_slide.slidePrev();
    });

    $('.main_product .next').on('click', function () {
        main_product_slide.slideNext();
    });


    const main_service_slide = new Swiper('.main_service_slide', {
        loop: true,
        slidesPerView: "auto",
        slidesToScroll: 1,
        spaceBetween: 80,
        speed: 1000,

    });


    const main_scroll_slide = new Swiper('.main_scroll_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3000,                // 3초마다 자동 전환
            disableOnInteraction: false // 사용자가 조작해도 자동재생 유지
        },
    });

    const main_scroll_slide2 = new Swiper('.main_scroll_slide2', {
        loop: true,
        effect: "fade",
    });


    main_scroll_slide.controller.control = main_scroll_slide2;
    main_scroll_slide2.controller.control = main_scroll_slide;


});


$(function () {
    const cursor = document.querySelector("#cursor");
    const areas = document.querySelectorAll(".main_service, .main_product .right");
    const arrowBtns = document.querySelectorAll(".main_service .arrow_btn");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let active = false;

    areas.forEach(area => {
        area.addEventListener("mouseenter", () => {
            cursor.style.opacity = 1;
            active = true;
        });

        area.addEventListener("mouseleave", () => {
            cursor.style.opacity = 0;
            active = false;
        });
    });


    arrowBtns.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            cursor.style.opacity = 0;
        });
        btn.addEventListener("mouseleave", () => {
            if (active) cursor.style.opacity = 1;
        });
    });


    document.addEventListener("mousemove", (e) => {
        if (!active) return;
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // 부드럽게 따라가는 움직임 (lerp)
        cursorX += (mouseX - cursorX) * 1;
        cursorY += (mouseY - cursorY) * 1;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        requestAnimationFrame(animate);
    }

    animate();
});