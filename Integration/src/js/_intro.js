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

gsap.to('.c-intro__txt h2, .c-intro__txt p', {
    scrollTrigger: {
        trigger: '.c-intro__txt',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    color: '#FCFCFC',
    duration: 1
});

gsap.to('.u-highlight', {
    scrollTrigger: {
        trigger: '.c-intro__txt',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    color: '#CB4F4F',
    duration: 1
});