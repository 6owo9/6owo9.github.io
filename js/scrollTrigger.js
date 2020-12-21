(function($) {
    $(document).ready(function() {
        console.log("스크롤트리거");
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#mainBox", {
            scrollTrigger:{
                trigger:"#main",
                start:"top top",
                end:"+=1000",
                scrub:2,
                pin:true,
            },scale:1.1,duration: 2, ease:"none"});
        
        
            var width_size = $(window).width();
            if (width_size <= 767) {
            console.log('모바일' +width_size);
            gsap.to("#page01_img", {
                scrollTrigger:{
                    trigger:"#page01_img",
                    start:"top 80%",
                    end:"top 200px",
                    scrub:1, 
                },top: 25 +"%",duration:2, ease:"none"});
            gsap.to("#page01_text", {
                scrollTrigger:{
                    trigger:"#page01_text",
                    start:"top 80%",
                    end:"top 60%",
                    scrub:2, 
                },opacity:1,left: 0+"%",duration: 2,ease:"none"}); 
            gsap.to("#page02_img", {
                scrollTrigger:{
                    trigger:"#page02_img",
                    start:"top 80%",
                    end:"top 200px",
                    scrub:1, 
                },width: 110 +"%",height: 75 +"%",duration: 2, ease: "none"});  
            gsap.to("#page02_text", {
                scrollTrigger:{
                    trigger:"#page02_text",
                    start:"top 80%",
                    end:"top 60%",
                    scrub:2, 
                },opacity:1,top: 20+"%",duration: 2, ease: "none"});

            gsap.to("#page03_img", {
                scrollTrigger:{
                    trigger:"#page03_img",
                    start:"top 80%",
                    end:"top 200px",
                    scrub:1, 
                },top:0,left:0,duration: 2, ease: "none"});  
            
            gsap.to("#page03-1_img", {
                scrollTrigger:{
                    trigger:"#page03_img",
                    start:"top 80%",
                    end:"top 200px",
                    scrub:2, 
                },left: 5+"%",duration: 2, ease: "none"}); 
            gsap.to("#page03_text", {
                scrollTrigger:{
                    trigger:"#page03_text",
                    start:"top 80%",
                    end:"top 60%",
                    scrub:2, 
                },opacity:1,duration: 2, ease: "none"});  
            }


            else if(width_size <= 1024) {
                console.log('태블릿' + width_size);
                $('#listBox').removeClass('op');
                $('.boxop').css({'width':'250px','height':'300px'});
                gsap.to("#page01_img", {
                    scrollTrigger:{
                        trigger:"#page01_img",
                        start:"top 80%",
                        end:"top 200px",
                        scrub:1, 
                    },top: 15 +"%",duration:2, ease:"none"});

                gsap.to("#page01_text", {
                    scrollTrigger:{
                        trigger:"#page01_text",
                        start:"top 80%",
                        end:"top 60%",
                        scrub:2, 
                    },opacity:1,left:0+"%",duration: 2,ease:"none"}); 
                
                gsap.to("#listBox", {
                    scrollTrigger:{
                        trigger:"#page04",
                        start:"5% 80%",
                        end:"top 40%",
                        scrub:2,
                    },marginLeft:'-75%',duration: 2, ease:"none"});

                const tl = gsap.timeline({
                    scrollTrigger:{
                        trigger:"#page03-1_img",
                        start:"bottom 80%",
                        end: "+=1000",
                        scrub:2,
                    }
                    });    
                    tl.to("#listBox",{opacity:1,marginLeft:'-5%',duration:200});
                    tl.to("#listBox",{marginLeft:'-7%',duration:100});
            }
            else if(width_size > 1024) {
                console.log('PC' + width_size);

                gsap.to("#page01_img", {
                    scrollTrigger:{
                        trigger:"#page01_img",
                        start:"top 80%",
                        end:"top 200px",
                        scrub:1, 
                    },top: 25 +"%",duration:2, ease:"none"});
                gsap.to("#page01_text", {
                    scrollTrigger:{
                        trigger:"#page01_text",
                        start:"top 80%",
                        end:"top 60%",
                        scrub:2, 
                    },opacity:1,left: 10+"%",duration: 2,ease:"none"}); 
                gsap.to("#page02_img", {
                    scrollTrigger:{
                        trigger:"#page02_img",
                        start:"top 80%",
                        end:"top 200px",
                        scrub:1, 
                    },width: 90 +"%",duration: 2, ease: "none"}); 

                gsap.to("#page02_text", {
                    scrollTrigger:{
                        trigger:"#page02_text",
                        start:"top 80%",
                        end:"top 60%",
                        scrub:2, 
                    },opacity:1,top: 30+"%",duration: 2, ease: "none"});

                    gsap.to("#page03_img", {
                        scrollTrigger:{
                            trigger:"#page03_img",
                            start:"top 80%",
                            end:"top 200px",
                            scrub:1, 
                        },top: 0,duration: 2, ease: "none"});  
                    
                    gsap.to("#page03-1_img", {
                        scrollTrigger:{
                            trigger:"#page03_img",
                            start:"top 80%",
                            end:"top 200px",
                            scrub:2, 
                        },left: 30+"%",duration: 2, ease: "none"});       
                    gsap.to("#page03_text", {
                        scrollTrigger:{
                            trigger:"#page03_text",
                            start:"top 80%",
                            end:"top 60%",
                            scrub:2, 
                        },opacity:1,duration: 2, ease: "none"});    
                    gsap.to("#listBox", {
                        scrollTrigger:{
                            trigger:"#page04",
                            start:"5% 80%",
                            end:"top 40%",
                            scrub:2,
                        },marginLeft:'-75%',duration: 2, ease:"none"});
                const tl = gsap.timeline({
                    scrollTrigger:{
                        trigger:"#page03-1_img",
                        start:"bottom 80%",
                        end: "+=1000",
                        scrub:2,
                    }
                    });    
                    tl.to("#listBox",{opacity:1,marginLeft:'-5%',duration:200});
                    tl.to("#listBox",{marginLeft:'-7%',duration:100});
                        
            }
        
        

  




      









        
    
    
    
        });
})(jQuery);

