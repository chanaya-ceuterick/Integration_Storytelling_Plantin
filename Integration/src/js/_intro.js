gsap.registerPlugin(ScrollTrigger);

gsap.to('#imgone', {
    scrollTrigger: {
        trigger: '#imgone',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
        // markers: true,
    },
    x: '0%',
    rotation: 0,
    duration: 1
});

gsap.to('#imgtwo', {
    scrollTrigger: {
        trigger: '#imgtwo',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    x: '0%',
    rotation: 0,
    duration: 1
});