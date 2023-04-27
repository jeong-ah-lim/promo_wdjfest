(function(){
    //start - swiper
    const swiper3 = new Swiper(".mySwiper3", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        spaceBetween: 20,
        slidesPerView: 2,
        // centeredSlides: true,
    });
    //end - swiper

    const promoWrap = document.querySelector('.promoWrap');
    const ctaVideo = document.querySelector('.swiper-wrapper');
    let ctaEmbedName;

    function onCreateIframe(){
        const popIframe = document.createElement('div'); //div 생성
        popIframe.setAttribute('class', 'popIframe'); //class 추가
        //iframe URL id 추가
        popIframe.innerHTML = `
        <a href="#" class="btnClose">닫기</a>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${ctaEmbedName}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
        //popup DOM 추가
        promoWrap.appendChild(popIframe);

        //body에 show 클래스 추가해서 dim 처리
        document.body.classList.add('show');

        function onClose(){
            document.body.classList.remove('show');
            promoWrap.removeChild(popIframe);
        }
        const btnClose = document.querySelector('.btnClose');
        btnClose.addEventListener('click', onClose);
    }

    //요소 클릭
    ctaVideo.addEventListener('click', function(e) { 
        ctaEmbedName = e.target.dataset.name;
        onCreateIframe();
    })

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