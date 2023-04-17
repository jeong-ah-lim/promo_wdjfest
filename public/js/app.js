$(document).ready(function(){
        const winWidth = window.innerWidth;

        //nav scroll to section start
        var scrollLink = $('.scroll');
        scrollLink.click(function(e){
            e.preventDefault();
            $('body,html').stop().animate({
                scrollTop: $(this.hash).offset().top - 160
            }, 1000);
        });

        $(window).scroll(function(){
            var scrollbarLocation = $(this).scrollTop();

            scrollLink.each(function(){
                var sectionOffset = $(this.hash).offset().top - 30;
                if(sectionOffset <= scrollbarLocation){
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            });
        });
        //nav scroll to section end

        //static video start
        // const myPix = new Array("public/video/creator_24_static.mp4");
        const creatorBox = document.querySelector('.creator--box');
        // const video = document.querySelector('.creator--box video');
        // const videoSrc = document.createElement('source');
        // function createVid(){
        //     videoSrc.src = myPix[0];
        //     videoSrc.setAttribute('type', 'video/mp4');
        //     video.append(videoSrc);
        // } 
        //static video end

        //play video only when visible start
        // const topPos = creatorBox.offsetTop;
        // let isActive = false;
        // window.addEventListener('scroll', function(){
        //     var scrollbarPos = window.scrollY;
        //     if(!isActive && scrollbarPos > topPos - window.innerHeight / 2){
        //         isActive = true;
        //         createVid();
        //     }
        // })
        //play video only when visible end

        //mb nav start
        const burgerMenu = document.querySelector('.burger--menu');
        burgerMenu.addEventListener('click', function(e){
            const target = e.target.nodeName === 'DIV' ? e.target : e.target.parentNode;
            console.log(target);
            target.parentNode.classList.toggle('active');
        })

        window.addEventListener('resize', function(){
            if(winWidth > 375){
                burgerMenu.parentNode.classList.remove('active');
            }
        });
        //mb nav end

        //insta list start 2022.09.14 인스타 피드 내리기
        // const instaItem = document.querySelectorAll('.instafeed--gallery li');
        // const moreBtn = document.querySelector('.btn--more__art');
        // function pcList (){
        //     $('.instafeed--gallery li:hidden').slice(0, 12).show(); 
        //     if ($(".instafeed--gallery li:hidden").length == 0) { 
        //         moreBtn.style.display = 'none'; 
        //     }
        // }
        // function mbList (){
        //     $('.instafeed--gallery li:hidden').slice(0, 12).show(); 
        //     if ($(".instafeed--gallery li:hidden").length == 0) { 
        //         moreBtn.style.display = 'none';
        //     }
        // }
        // function checkWidth(){
        //     if(winWidth > 768){
        //         $(instaItem).slice(0, 12).show();
        //     }else{
        //         $(instaItem).slice(0, 12).show();
        //     }
        // }
        // checkWidth();
        // window.addEventListener('resize', function(){
        //     checkWidth();
        // });
        // moreBtn.addEventListener('click', function(e){
        //     e.preventDefault();
        //     if(winWidth > 768){
        //         pcList();
        //     }else{
        //         mbList();
        //     }
        // });
        //insta list end 2022.09.14 인스타 피드 내리기

        //family site start
        const siteBtn = document.querySelector("#siteLink");
        const siteList = document.querySelector("#siteLinkList");

        siteBtn.addEventListener("click", function(e){
            const target = e.target;
            target.classList.toggle("active");
            target.nextElementSibling.classList.toggle("open");
        });
        //family site end

        //gallery layer popup start
        var gallery_popup = {
            init:function(){
                var $t = this;
                $('.instafeed--gallery>li').click(function(e){
                    e.preventDefault();
                    var link = $(this).find('a').attr('href');
                    var img_src = $(this).find('img').attr('src');
                    var caption = $(this).find('.instafeed--hover p').text();
                    $('.insta--overlay .popup--insta__detail a').attr('href',link);
                    $('.insta--overlay .insta--contents img').attr('src',img_src);
                    $('.insta--overlay .popup--insta__detail p').text(caption);
                    $t.open();
                })

                $('.insta--btn__close').click(function(){
                    $t.close();
                })
            },
            open:function(){
                $('body').addClass('open');
                $('.insta--overlay').addClass('on');
            },
            close:function(){
                $('body').removeClass('open');
                $('.insta--overlay').removeClass('on');
            }
        }
        gallery_popup.init();
        //gallery layer popup end

        //when it scrolling, how to add style on sections start
        const faders = document.querySelectorAll('.observe-item');

        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -250px 0px",
            // threshold: 0.6,
        };

        const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
        ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
            return;
            } else {
            entry.target.classList.add("active");
            appearOnScroll.unobserve(entry.target);
            }
        });
        },
        appearOptions);

        faders.forEach(fader => {
        appearOnScroll.observe(fader);
        });
        
        //when it scrolling, how to add style on sections end

    });