(function ($) {
  "use strict";

  let isInitialized = false;

  // Listing All Animation Functions For Frontend
  function int_all_animations() {
    if (isInitialized) return;
    isInitialized = true;
    gsap_fixed_elements();
  }

  // Initialize immediately if DOM ready, or on DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", int_all_animations);
  } else {
    int_all_animations();
  }

  // Also refresh triggers once all images/resources load
  window.addEventListener("load", function() {
    int_all_animations();
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  });

  // Fixed Elements on Scroll
  function gsap_fixed_elements() {
    const scrollFixedTarget = document.querySelectorAll(".gsap-pin-fixed-boxed, .gsap-pin-fixed-fullwidth");

    if (scrollFixedTarget.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    scrollFixedTarget.forEach((container) => {
      let stopUnder = container.dataset.stopUnder;

      if (stopUnder === "mobile") {
        stopUnder = 767;
      } else if (stopUnder === "tablet") {
        stopUnder = 991;
      } else if (stopUnder === "laptop") {
        stopUnder = 1199;
      } else {
        stopUnder = 0;
      }

      if (window.innerWidth <= stopUnder) {
        return;
      }

      const elements = container.querySelectorAll(".gsap-pin-fixed-boxed > .e-con-inner > *, .gsap-pin-fixed-fullwidth > *");

      // Scroll Trigger Loop
      elements.forEach((element, index) => {
        const startClass = Array.from(container.classList).find((className) => className.startsWith("start-"));
        const startOffset = startClass ? parseInt(startClass.split("-")[1]) : 40;

        gsap.set(element, {
          force3D: true,
        });
        element.style.willChange = "transform";
        setTimeout(() => {
          ScrollTrigger.create({
            trigger: element,
            start: `top-=${startOffset + 80}`,
            end: `top-=${startOffset}`,
            onEnter: () => {
              for (let k = 0; k < index; k++) {
                const sp = elements[k].closest('.pin-spacer') || document.querySelector(`.pin-spacer--trigger-${k}`);
                if (sp) {
                  sp.classList.add("spacer-before-active");
                }
              }
            },
            onLeaveBack: () => {
              for (let k = index - 1; k < elements.length; k++) {
                if (k >= 0) {
                  const sp = elements[k].closest('.pin-spacer') || document.querySelector(`.pin-spacer--trigger-${k}`);
                  if (sp) {
                    sp.classList.remove("spacer-before-active");
                  }
                }
              }
            },
          });
          ScrollTrigger.create({
            trigger: element,
            start: `top-=${startOffset}`,
            end: `bottom top+=${element.offsetHeight + startOffset}`,
            endTrigger: container,
            pin: true,
            pinSpacing: false,
            id: `${container.id}-trigger-${index}`,
            invalidateOnRefresh: true,
          });
        }, 10);
      });
    });
  }
})(jQuery);
