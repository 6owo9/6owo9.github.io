
console.log("스크롤트리거");
gsap.registerPlugin(ScrollTrigger);

    // gsap.to(".st3", {
    //     scrollTrigger: {
    //         trigger: "body",
    //         start: "top top",
    //         scrub: true,
    //         end: "+=2000",
    //         markers:true,
    //         pin:true
    //     },
    //     stroke:"red",
    //     strokeDashoffset:"5000",
    //     //strokeDasharray:"10 10",
    //     //duration: 2, ease:"none"
    // });
  
    const Tline = gsap.timeline({
        scrollTrigger:{
                trigger: "body",
                start: "top top",
                scrub: true,
                end: "+=2000",
                markers:false,
                pin:true
            }});
   

        Tline.to("#location01",{opacity:1,duration:700});
        Tline.to("#line01",{strokeDashoffset:"2000",duration:2000});


        Tline.to("#location02",{opacity:1,duration:700});
        Tline.to("#line02",{strokeDashoffset:"2000",duration:4000});  

        Tline.to("#location03",{opacity:1,duration:700});
        Tline.to("#line03",{strokeDashoffset:"2000",duration:2000});

        Tline.to("#location04",{opacity:1,duration:700});
        Tline.to("#line04",{strokeDashoffset:"2000",duration:2000});

        Tline.to("#location05",{opacity:1,duration:700});
        Tline.to("#line05",{strokeDashoffset:"2000",duration:2000});

        Tline.to("#location06",{opacity:1,duration:700});
        Tline.to("#line06",{strokeDashoffset:"2000",duration:2000});

        Tline.to("#location07",{opacity:1,duration:700});
        Tline.to("#line07",{strokeDashoffset:"2000",duration:2000});









        
    
