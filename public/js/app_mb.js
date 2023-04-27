(function(){
    //start - swiper
    const swiper3 = new Swiper(".mySwiper3", {
        loop: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },
        spaceBetween: 20,
        slidesPerView: 2,
        // centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
    //end - swiper

    //start - 해시태그 복사하기 
    const btnClip = document.querySelector('.btnClip');
    
    function copyHashTag(text){
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function onTooltip(){
        const promoWrap = document.querySelector('.promoWrap');
        promoWrap.classList.add('on');
        setTimeout(() => {
            promoWrap.classList.remove('on');
        }, 1500);
    }

    function onClip(e){
        e.preventDefault();
        const hashTag = document.querySelector('.hashTag').textContent;
        copyHashTag(hashTag);
        onTooltip();
    }
    btnClip.addEventListener('click', onClip);
    //end - 해시태그 복사하기

})();