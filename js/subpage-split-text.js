/**
 * Royal Auto Paints - Subpage Typography SplitText Animation
 * Exactly mirrors the index.html section-title-split-text animation
 * Powered by GSAP 3, ScrollTrigger & SplitText (Zero jQuery dependency)
 */

(function() {
    'use strict';

    function initSplitText() {
        var elements = document.querySelectorAll(".tm-split-text");
        if(elements.length === 0 || typeof gsap === 'undefined' || typeof SplitText === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(SplitText, ScrollTrigger);
        
        elements.forEach(function(el) {
            // Avoid duplicate splits
            if (el.split) return;

            el.split = new SplitText(el, { 
                type: "lines,words,chars",
                linesClass: "split-line"
            });
            gsap.set(el, { perspective: 400 });

            if( el.classList.contains('split-in-fade') ){
                el.classList.add('active');
                gsap.set(el.split.chars, {
                    opacity: 0,
                    ease: "Back.easeOut",
                });
            }
            if( el.classList.contains('split-in-right') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "50",
                    ease: "Back.easeOut",
                });
            }
            if( el.classList.contains('split-in-left') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "-50",
                    ease: "circ.out",
                });
            }
            if( el.classList.contains('split-in-up') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "80",
                    ease: "circ.out",
                });
            }
            if( el.classList.contains('split-in-down') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "-80",
                    ease: "circ.out",
                });
            }
            if( el.classList.contains('split-in-rotate') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    rotateX: "50deg",
                    ease: "circ.out",
                });
            }
            if( el.classList.contains('split-in-scale') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    scale: "0.5",
                    ease: "circ.out",
                });
            }
            if (el.classList.contains('split-on-load')) {
                el.anim = gsap.to(el.split.chars, {
                    delay: 0.35,
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    scale: 1,
                    opacity: 1,
                    duration: 0.8, 
                    stagger: 0.02,
                    ease: "power2.out"
                });
            } else {
                el.anim = gsap.to(el.split.chars, {
                    scrollTrigger: {
                        trigger: el,
                        toggleActions: "restart pause resume reverse",
                        start: "top 90%",
                    },
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    scale: 1,
                    opacity: 1,
                    duration: 0.8, 
                    stagger: 0.02,
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initSplitText, 200);
        });
    } else {
        setTimeout(initSplitText, 200);
    }

    window.addEventListener('load', function() {
        setTimeout(initSplitText, 200);
    });

    window.initSubpageSplitText = initSplitText;
})();
