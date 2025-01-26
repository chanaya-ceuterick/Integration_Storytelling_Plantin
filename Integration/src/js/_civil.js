gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('#civil-img, #civil-txt', {
    opacity: 0,
    y: '50%',
}, {
    scrollTrigger: {
        trigger: '#civil-txt',
        start: 'top 90%',
        end: 'top 10%',
        scrub: true
    },
    opacity: 1,
    y: '0%',
    duration: 1
});

gsap.to('#boy, #girl', {
    scale: 1.5,
    rotation: 60,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'power1.inOut',
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

wrapWords('#text');
const words = gsap.utils.toArray('.c-word');


gsap.fromTo(words, {
    opacity: 0.3,
}, {
    opacity: 1,
    duration: 0.5,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '#civil-txt',
        start: 'top 60%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "play none none reverse",
        // markers: true
    }
});