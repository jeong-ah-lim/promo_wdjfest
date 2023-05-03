(function(){
    //start - swiper
    let swiperDesktop;
    let swiperDesktopThumb;
    let swiperMobile;

    const mediaQueryList = window.matchMedia('only screen and (max-width: 720px)');
    mediaQueryList.addEventListener('change', onChangeMediaQuery);
    onChangeMediaQuery(mediaQueryList);

    function onChangeMediaQuery(event) {
        const isMobile = event.matches;

        if (isMobile && !swiperMobile) {
            swiperMobile = new Swiper(".mySwiper3", {
                loop: true,
                spaceBetween: 20,
            });
        } else if (!isMobile && !swiperDesktopThumb && !swiperDesktop) {
            swiperDesktopThumb = new Swiper(".thumbsSwiper", {
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
            swiperDesktop = new Swiper(".mySwiper2", {
                loop: true,
                effect: 'fade',
                spaceBetween: 10,
                thumbs: {
                    swiper: swiperDesktopThumb,
                },
            });
        }
    }
    //end - swiper

    function getIsMobile() {
        return window.matchMedia('only screen and (max-width: 720px)').matches;
    }

    document.body.addEventListener('click', function (event) {
        const classList = event.target.classList;

        if (!classList) return;
        
        if (classList.contains('btnClip')) {
            onClip(event);
        }

        if (event.target.parentElement.classList.contains('ctaVideo') && event.target.tagName.toLowerCase() === 'img') {
            onClickCtaVideo(event);
        }
    });

    // start - 영상 영역
    let ctaEmbedName;
    let ctaEmbedTit;

    function onCreateIframe(promoWrap){
        const popIframe = document.createElement('div'); 
        popIframe.setAttribute('class', 'popIframe'); 
        popIframe.innerHTML = `
        <div class="iframeArea">
            <a href="#" class="btnClose">닫기</a>
            <div class="iframeWrap">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${ctaEmbedName}" title="${ctaEmbedTit}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        `;
        promoWrap.appendChild(popIframe);

        document.body.classList.add('show');

        function onClose(e){
            e.preventDefault();

            if (!document.body.classList.contains('show')) return;
            document.body.classList.remove('show');
            promoWrap.removeChild(popIframe);
            btnClose.removeEventListener('click', onClose);
            popIframe.removeEventListener('click', onClose);
        }
        const btnClose = document.querySelector('.btnClose');
        btnClose.addEventListener('click', onClose);
        popIframe.addEventListener('click', onClose);
    }

    function onClickCtaVideo(e) { 
        e.preventDefault();
        ctaEmbedName = e.target.dataset.name;
        ctaEmbedTit = e.target.dataset.title;

        const isMobile = getIsMobile();
        const promoWrap = document.querySelector('.promoWrap' + (isMobile ? '.mb' : '.pc'));

        onCreateIframe(promoWrap);
    }
    // end - 영상 영역

    //start - 해시태그 복사하기     
    function copyHashTag(text){
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function onTooltip(){
        const isMobile = getIsMobile();
        const promoWrap = document.querySelector('.promoWrap' + (isMobile ? '.mb' : '.pc'));
        promoWrap.classList.add('on');
        setTimeout(() => {
            promoWrap.classList.remove('on');
        }, 1500);
    }

    function onClip(e){
        e.preventDefault();
        const hashTag = e.target.previousElementSibling.textContent;
        copyHashTag(hashTag);
        onTooltip();
    }
    //end - 해시태그 복사하기
})();