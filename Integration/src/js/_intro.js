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


gsap.registerPlugin(ScrollTrigger);

gsap.to('.c-intro__txt h2, .c-intro__txt p', {
    scrollTrigger: {
        trigger: '.c-intro__txt', // The element that triggers the animation
        start: 'top 80%', // Start the animation when the top of the text is at 80% of the viewport height
        end: 'top 30%', // End the animation when the top of the text is at 30% of the viewport height
        scrub: true, // Smoothly animate as you scroll
        // once: true // Only animate once
    },
    color: '#FCFCFC', // Animate to the original color
    duration: 1 // Duration of the animation
});