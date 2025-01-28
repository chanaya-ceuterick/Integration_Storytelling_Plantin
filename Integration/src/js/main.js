gsap.registerPlugin(ScrollTrigger);

//Nav
const languageBtn = document.querySelector('.c-nav__btn');
const languageDropdown = document.querySelector('.c-nav__dropdown');
const languageItems = document.querySelectorAll('.c-nav__dropdown li');

languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
    languageDropdown.classList.remove('open');
});

languageItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const selectedLang = e.target.getAttribute('data-lang');
        languageBtn.innerHTML = selectedLang.toUpperCase();
        languageDropdown.classList.remove('open');
    });
});

//Header
gsap.fromTo('.c-header__title h1', {
    scale: 1.1,
    opacity: 0,
},
    {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
    });

gsap.fromTo('.c-header__subtitle', {
    x: -50,
    opacity: 0,
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
    });

gsap.fromTo('.c-header__img', {
    opacity: 0,
},
    {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
    });

gsap.fromTo('.c-header__img picture img', {
    x: 50,
},
    {
        x: 0,
        duration: 1,
        ease: 'power1.inOut',
    });

gsap.to('.c-btnsec', {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'power1.inOut',
});

gsap.to('.c-btnsec__svg', {
    rotation: 0.1,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'power1.inOut',
});

//Footer
gsap.to('.c-footer__star', {
    rotation: 60,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'power1.inOut',
});

// responsive
let mm = gsap.matchMedia();
mm.add("(min-width: 955px)", () => {
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


});

mm.add("(min-width: 769px)", () => {
    // intro desktop
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

    gsap.to('#boy, #girl, #star, .c-newsletter__star', {
        scale: 1.5,
        rotation: 60,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
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


    // Daughters
    gsap.fromTo('.c-daughters__book', {
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: '.c-daughters__book',
            start: 'top 60%',
            end: 'bottom 50%',
            scrub: true,
        },
        opacity: 1,
        duration: 1
    });

    gsap.utils.toArray('.left-daughter').forEach((daughter) => {
        gsap.fromTo(
            daughter,
            { opacity: 0, x: 200, rotation: 90 },
            {
                scrollTrigger: {
                    trigger: daughter,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: true,
                },
                opacity: 1,
                x: 0,
                rotation: 10,
                duration: 3,
                ease: 'power1.out',
                stagger: 0.2,
            }
        );
    });

    gsap.utils.toArray('.right-daughter').forEach((daughter) => {
        gsap.fromTo(
            daughter,
            { opacity: 0, x: -200, rotation: -90 },
            {
                scrollTrigger: {
                    trigger: daughter,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: true,
                },
                opacity: 1,
                x: 0,
                duration: 3,
                rotation: -10,
                ease: 'power1.out',
                stagger: 0.2,
            }
        );
    });


    //Family business
    gsap.fromTo('.c-business', {
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: '.c-business',
            start: 'top 60%',
            end: 'bottom 50%',
            scrub: true,
        },
        opacity: 1,
        duration: 1
    });

    gsap.fromTo('.c-business__content', {
        y: 50,
    }, {
        scrollTrigger: {
            trigger: '.c-business__content',
            start: 'top 60%',
            end: 'bottom 50%',
            scrub: true,
        },
        y: 0,
        duration: 1
    });

    //Newsletter

    gsap.fromTo('#newsletter-img', {
        x: "200%",
        rotation: 30

    }, {
        scrollTrigger: {
            trigger: '#newsletter-img',
            start: 'top 60%',
            end: 'top 20%',
            scrub: true,
        },
        x: 0,
        rotation: 0,
        duration: 1
    });

    //Footer
    gsap.fromTo('.c-footer', {
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: '.c-footer',
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
            ease: 'power1.inOut',
        },
        opacity: 1,
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

    function textAnimationDaughters() {
        wrapWords('.c-daughters__txt p');

        gsap.utils.toArray('.c-daughters__txt p').forEach((paragraph) => {
            const words = paragraph.querySelectorAll('.c-word');

            gsap.fromTo(
                words,
                { opacity: 0.3 },
                {
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: paragraph,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        toggleActions: "play none none reverse",
                    },
                }
            );

        });
    }

    // Initialisatie van animaties
    textAnimationIntro();
    textAnimationCivil();
    textAnimationLanguage();
    textAnimationWomanTop();
    textAnimationWomanBottom();
    textAnimationDaughters();
});

mm.add("(max-width: 954px)", () => {

    // Quote
    gsap.fromTo('.c-quote__txt', {
        x: '250',
    }, {
        x: '-105%',
        repeat: -1,
        duration: 15,
        ease: 'power1.inOut',
    });
});

mm.add("(max-width: 768px)", () => {
    // Intro
    gsap.to('#boy, #girl, #star', {
        scale: 1.2,
        rotation: 60,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
    });

    // Language
    gsap.to('.c-language__btn , .c-newsletter__star', {
        scale: 1.2,
        rotation: 6,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
    });

    // Indicator
    gsap.utils.toArray('#left .u-active-line').forEach((line) => {
        gsap.fromTo(
            line,
            {
                x: '0',
            }, {
            x: '2',
            repeat: -1,
            yoyo: 1,
            duration: 1,
            ease: 'power1.inOut',
        }
        );
    });

    gsap.utils.toArray('#right .u-active-line').forEach((line) => {
        gsap.fromTo(
            line,
            {
                x: '0',
            }, {
            x: '-2',
            repeat: -1,
            yoyo: 1,
            duration: 1,
            ease: 'power1.inOut',
        }
        );
    });

    // Women
    gsap.to('.c-accent', {
        scale: 0.9,
        rotation: 0,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut',
    });

    //Daughters
    const viewportHeight = window.innerHeight;
    gsap.utils.toArray('.left-daughter').forEach((daughter) => {
        ScrollTrigger.create({
            trigger: daughter,
            start: `top ${viewportHeight * 0.9}px`,
            end: `bottom ${viewportHeight * 0.8}px`,
            scrub: true,
            animation: gsap.fromTo(
                daughter,
                {
                    opacity: 0,
                    x: 200,
                    rotation: 90,

                },
                {
                    opacity: 1,
                    x: 0,
                    rotation: 10,
                    ease: 'power1.out',
                }
            ),
        });
    });

    gsap.utils.toArray('.right-daughter').forEach((daughter) => {
        ScrollTrigger.create({
            trigger: daughter,
            start: `top ${viewportHeight * 1}px`,
            end: `bottom ${viewportHeight * 0.8}px`,
            scrub: true,
            animation: gsap.fromTo(
                daughter,
                {
                    opacity: 0,
                    x: -200,
                    rotation: -90,

                },
                {
                    opacity: 1,
                    x: 0,
                    rotation: -10,
                    ease: 'power1.out',
                }
            ),
        });
    });
});


//Language
const buttons = document.querySelectorAll('.c-language__btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const interactionElement = button.closest('.c-language__images').querySelector('.c-language__click');
        const noninteractionElement = button.closest('.c-language__images').querySelector('.c-language__imgone');
        interactionElement.classList.toggle('c-language__click--active');
        noninteractionElement.classList.toggle('c-language__imgone--nonactive');
    });
});


//civil rights
const boySvg = document.getElementById('boy');
const girlSvg = document.getElementById('girl');
const boyPopup = document.getElementById('popup-boy');
const girlPopup = document.getElementById('popup-girl');

function showPopup(popup) {
    popup.classList.add('visible');
}

function hidePopups() {
    boyPopup.classList.remove('visible');
    girlPopup.classList.remove('visible');
}

boySvg.addEventListener('click', (e) => {
    e.stopPropagation();
    hidePopups();
    showPopup(boyPopup);
});

girlSvg.addEventListener('click', (e) => {
    e.stopPropagation();
    hidePopups();
    showPopup(girlPopup);
});

document.addEventListener('click', () => {
    hidePopups();
});

