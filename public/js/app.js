(function(){
    //start - swiper
    const swiper = new Swiper(".thumbsSwiper", {
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        effect: 'fade',
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });
    //end - swiper

    // start - 영상 영역
    const promoWrap = document.querySelector('.promoWrap');
    const ctaVideo = document.querySelector('.swiper-wrapper');
    let ctaEmbedName;
    let ctaEmbedTit;

    function onCreateIframe(){
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
            document.body.classList.remove('show');
            promoWrap.removeChild(popIframe);
        }
        const btnClose = document.querySelector('.btnClose');
        const iframeArea = document.querySelector('.iframeArea');
        btnClose.addEventListener('click', onClose);
        iframeArea.addEventListener('click', onClose);
    }

    ctaVideo.addEventListener('click', function(e) { 
        e.preventDefault();
        ctaEmbedName = e.target.dataset.name;
        ctaEmbedTit = e.target.dataset.title;
        onCreateIframe();
    })
    // end - 영상 영역

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