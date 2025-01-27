import '../css/style.css';
gsap.registerPlugin(ScrollTrigger);

// intro 

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

// civil rights

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

gsap.to('#boy, #girl, #star', {
    scale: 1.5,
    rotation: 60,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'power1.inOut',
});

// language

gsap.fromTo('.c-language__imgone', {
    x: '-150%',
    rotation: 30
}, {
    scrollTrigger: {
        trigger: '.c-language__imgone',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    x: '0%',
    rotation: 10,
    duration: 1
});

gsap.fromTo('.c-language__imgtwo', {
    x: '-200%',
    rotation: -30
}, {
    scrollTrigger: {
        trigger: '.c-language__imgtwo',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    x: '0%',
    rotation: -10,
    duration: 1
});

// quote

gsap.fromTo('#quote-title-one, #quote-title-two, #quote-title-three, #quote-title-four, #star, #quote-one, #quote-two, #quote-three', {
    y: '120%',
    opacity: 0,
    rotation: 10
}, {
    scrollTrigger: {
        trigger: '.c-quote',
        start: 'top 60%',
        end: 'top 10%',
        scrub: true,
    },
    y: '0%',
    rotation: 0,
    opacity: 1,
    duration: 5,
    delay: 0.5,
    stagger: .5
});

gsap.fromTo('.c-quote', {
    opacity: 0,
    y: 50
}, {
    scrollTrigger: {
        trigger: '.c-quote',
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
    },
    opacity: 2,
    y: 0
})

// indicator

gsap.utils.toArray('#right .line').forEach((line) => {
    gsap.fromTo(
        line,
        { opacity: 0, x: 100 },
        {
            scrollTrigger: {
                trigger: line,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
            },
            opacity: 1,
            x: 0,
            duration: 3,
            ease: 'power1.out',
            stagger: 0.2,
        }
    );
});

gsap.utils.toArray('#left .line').forEach((line) => {
    gsap.fromTo(
        line,
        { opacity: 0, x: -200 },
        {
            scrollTrigger: {
                trigger: line,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
            },
            opacity: 1,
            x: 0,
            duration: 3,
            ease: 'power1.out',
            stagger: 0.2,
        }
    );
});

//business women

gsap.fromTo('.c-women__worker, .c-women__speaking', {
    x: '-200%',
    rotation: -30
}, {
    scrollTrigger: {
        trigger: '.c-women__middle',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    x: '0%',
    rotation: 0,
    duration: 1
});

gsap.fromTo('.c-women__img', {
    x: '200%',
    rotation: 30
}, {
    scrollTrigger: {
        trigger: '.c-women__top',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    x: '0%',
    rotation: 0,
    duration: 1
});

gsap.fromTo('.c-women__top', {
    y: '50%',
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.c-women',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    y: '0%',
    opacity: 1,
    duration: 1
});

gsap.utils.toArray('.c-women__option').forEach((option, index) => {
    gsap.fromTo(
        option,
        { opacity: 0.3, x: 200 },
        {
            scrollTrigger: {
                trigger: '.c-women__options',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none restart reverse',
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power1.out',
            delay: index * 0.5,
        }
    );
});

// Interest
gsap.fromTo('.c-interest', {
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: '.c-interest',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    opacity: 1,
    duration: 1
});

gsap.fromTo('.c-interest__txt', {
    y: '100%',
}, {
    scrollTrigger: {
        trigger: '.c-interest',
        start: 'top 60%',
        end: 'top 30%',
        scrub: true,
    },
    y: 0,
    duration: 1
});

// word animation

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

function textAnimationIntro() {
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
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
}

function textAnimationCivil() {
    wrapWords('#text');
    const words = gsap.utils.toArray('.c-word');

    gsap.fromTo(words, {
        opacity: 0.3,
    }, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '#text',
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
}

function textAnimationLanguage() {
    wrapWords('#language-textone, #language-texttwo');
    const words = gsap.utils.toArray('.c-word');

    gsap.fromTo(words, {
        opacity: 0.3,
    }, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '#language-textone',
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
}

function textAnimationWomanTop() {
    wrapWords('#text-women-one, #text-women-two');
    const words = gsap.utils.toArray('.c-word');

    gsap.fromTo(words, {
        opacity: 0.3,
    }, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.c-woman__txttop h2',
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
}

function textAnimationWomanBottom() {
    wrapWords('.c-woman__paragraph');
    const words = gsap.utils.toArray('.c-word');

    gsap.fromTo(words, {
        opacity: 0.3,
    }, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.c-woman__txt h2',
            start: 'top 40%',
            end: 'top 20%',
            scrub: true,
            toggleActions: "play none none reverse"
        }
    });
}

// Initialisatie van animaties
textAnimationIntro();
textAnimationCivil();
textAnimationLanguage();
textAnimationWomanTop();
textAnimationWomanBottom();