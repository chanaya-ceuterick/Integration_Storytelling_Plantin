gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('#imgone', {
    x: '-120%',
    rotation: 30
}, {
    scrollTrigger: {
        trigger: '#imgone',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    x: '0%',
    rotation: 0,
    duration: 1
});


gsap.fromTo('#imgtwo', {
    x: '120%',
    rotation: -30
}, {
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


gsap.fromTo('.c-intro__txt h2, .c-intro__txt p', {
    color: 'transparent'
}, {
    scrollTrigger: {
        trigger: '.c-intro__txt',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    color: '#FCFCFC',
    duration: 1
});


gsap.fromTo('.u-highlight', {
    color: 'transparent'
}, {
    scrollTrigger: {
        trigger: '.c-intro__txt',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    color: '#CB4F4F',
    duration: 1
});

function wrapWords(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const textNodes = Array.from(element.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        textNodes.forEach(node => {
            const words = node.textContent.split(' ');
            const wrappedWords = words.map(word => `<span class="c-word">${word}</span>`).join(' ');
            const span = document.createElement('span');
            span.innerHTML = wrappedWords;
            element.replaceChild(span, node);
        });
    });
}

wrapWords('#text-intro');
const words = gsap.utils.toArray('.c-word');


gsap.fromTo(words, {
    opacity: 0.3,
}, {
    opacity: 1,
    duration: 0.4,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#text-intro',
        start: 'top 60%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "play none none reverse"
    }
});