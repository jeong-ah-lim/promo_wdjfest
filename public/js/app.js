(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    }); 

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

    function onClip(e){
        e.preventDefault();
        const hashTag = document.querySelector('.hashTag').textContent;
        copyHashTag(hashTag);
    }
    btnClip.addEventListener('click', onClip);
    //end - 해시태그 복사하기

})();