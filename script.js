document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. ENGINE PRELOADER CONTROLLER
    // ==========================================
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                preloader.classList.add("fade-out");
            }, 500); 
        });
        
        // Safety Outbound Trigger
        setTimeout(() => {
            if (!preloader.classList.contains("fade-out")) {
                preloader.classList.add("fade-out");
            }
        }, 2200);
    }

    // ==========================================
    // 2. STICKY GLASSMORPHISM NAVBAR INTERCEPTOR
    // ==========================================
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // ==========================================
    // 3. RESPONSIVE MOBILE MENU SELECTION PORT
    // ==========================================
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinksContainer = document.querySelector(".nav-links");
    const individualLinks = document.querySelectorAll(".nav-links a");

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuBtn.classList.toggle("open");
            navLinksContainer.classList.toggle("active");
        });

        individualLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("open");
                navLinksContainer.classList.remove("active");
            });
        });
    }

    // ==========================================
    // 4. ALPHANUMERIC EDITORIAL TYPING ENGINE
    // ==========================================
    const typingTextElement = document.getElementById("typing-text");
    if (typingTextElement) {
        const structuralPhrases = ["The Ordinary.", "Improper Roasts.", "Sub-Standard Extractions."];
        let runningPhraseIdx = 0;
        let charCursorIdx = 0;
        let activeDeletionSequence = false;

        function renderTypingCycle() {
            const currentStringTarget = structuralPhrases[runningPhraseIdx];
            
            if (!activeDeletionSequence) {
                typingTextElement.textContent = currentStringTarget.substring(0, charCursorIdx + 1);
                charCursorIdx++;

                if (charCursorIdx === currentStringTarget.length) {
                    activeDeletionSequence = true;
                    setTimeout(renderTypingCycle, 2200);
                    return;
                }
            } else {
                typingTextElement.textContent = currentStringTarget.substring(0, charCursorIdx - 1);
                charCursorIdx--;

                if (charCursorIdx === 0) {
                    activeDeletionSequence = false;
                    runningPhraseIdx = (runningPhraseIdx + 1) % structuralPhrases.length;
                }
            }
            const calculatedPacingSpeed = activeDeletionSequence ? 35 : 85;
            setTimeout(renderTypingCycle, calculatedPacingSpeed);
        }
        setTimeout(renderTypingCycle, 1000);
    }

    // ==========================================
    // 5. COLOR SCHEME MATRIX SURFACE DEPLOYMENT
    // ==========================================
    const themeToggleBtn = document.getElementById("theme-toggle");
    const bodyDom = document.body;

    const cachedTheme = localStorage.getItem("may-theme-reserve");
    if (cachedTheme === "light") {
        bodyDom.classList.remove("dark-theme");
        bodyDom.classList.add("light-theme");
        updateThemeIcon(true);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            bodyDom.classList.toggle("dark-theme");
            const lightThemeIsActive = bodyDom.classList.toggle("light-theme");
            
            localStorage.setItem("may-theme-reserve", lightThemeIsActive ? "light" : "dark");
            updateThemeIcon(lightThemeIsActive);
        });
    }

    function updateThemeIcon(isLightModeActive) {
        const renderedIcon = themeToggleBtn.querySelector("i");
        renderedIcon.className = isLightModeActive ? "fas fa-sun" : "fas fa-moon";
    }

    // ==========================================
    // 6. INTERACTIVE MENU ARRAYS FILTERING ENGINE
    // ==========================================
    const operationalFilterButtons = document.querySelectorAll(".filter-btn");
    const targetsMenuContainerItems = document.querySelectorAll(".menu-item");

    operationalFilterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            operationalFilterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterToken = btn.getAttribute("data-filter");

            targetsMenuContainerItems.forEach(item => {
                if (filterToken === "all" || item.classList.contains(filterToken)) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            });
        });
    });

    // ==========================================
    // 7. HARDWARE ACCELERATED 3D DEPTH ENGINE
    // ==========================================
    const processingCards3d = document.querySelectorAll(".product-card3d, .about-img-container");

    processingCards3d.forEach(card => {
        const innerElementWrapper = card.querySelector(".card3d-inner");
        if(!innerElementWrapper) return;
        
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const pointerX = event.clientX - rect.left;
            const pointerY = event.clientY - rect.top;
            
            const vectorRotationX = ((rect.height / 2) - pointerY) / 10;
            const vectorRotationY = (pointerX - (rect.width / 2)) / 10;
            
            innerElementWrapper.style.transform = `rotateX(${vectorRotationX}deg) rotateY(${vectorRotationY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            innerElementWrapper.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
    });

    // ==========================================
    // 8. ACCORDION FAQ ENGINE MODULE
    // ==========================================
    const structuralFaqItems = document.querySelectorAll(".faq-item");

    structuralFaqItems.forEach(faq => {
        const componentHeader = faq.querySelector(".faq-header");
        componentHeader.addEventListener("click", () => {
            const openVerification = faq.classList.contains("open");
            
            structuralFaqItems.forEach(f => {
                f.classList.remove("open");
                f.querySelector(".faq-body").style.maxHeight = null;
            });

            if (!openVerification) {
                faq.classList.add("open");
                const dynamicBody = faq.querySelector(".faq-body");
                dynamicBody.style.maxHeight = dynamicBody.scrollHeight + "px";
            }
        });
    });

    // ==========================================
    // 9. HIGH-FIDELITY TESTIMONIAL SLIDER INTERFACE
    // ==========================================
    const horizontalSliderTrack = document.getElementById("testimonial-slider");
    const aggregateSlides = document.querySelectorAll(".slide");
    const triggerPrevBtn = document.getElementById("slide-prev");
    const triggerNextBtn = document.getElementById("slide-next");
    const dotsContainer = document.getElementById("slider-dots");
    
    let activeSlideIdx = 0;

    if (horizontalSliderTrack && aggregateSlides.length > 0) {
        aggregateSlides.forEach((_, idx) => {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (idx === 0) dot.classList.add("active");
            dot.addEventListener("click", () => navigateSliderTo(idx));
            dotsContainer.appendChild(dot);
        });

        const activeUiDots = document.querySelectorAll(".dot");

        function navigateSliderTo(targetIndex) {
            aggregateSlides[activeSlideIdx].classList.remove("active");
            activeUiDots[activeSlideIdx].classList.remove("active");

            activeSlideIdx = (targetIndex + aggregateSlides.length) % aggregateSlides.length;

            aggregateSlides[activeSlideIdx].classList.add("active");
            activeUiDots[activeSlideIdx].classList.add("active");
            horizontalSliderTrack.style.transform = `translateX(-${activeSlideIdx * 100}%)`;
        }

        triggerNextBtn.addEventListener("click", () => navigateSliderTo(activeSlideIdx + 1));
        triggerPrevBtn.addEventListener("click", () => navigateSliderTo(activeSlideIdx - 1));

        let autoInterval = setInterval(() => navigateSliderTo(activeSlideIdx + 1), 7000);
        const resetCadence = () => {
            clearInterval(autoInterval);
            autoInterval = setInterval(() => navigateSliderTo(activeSlideIdx + 1), 9000);
        };
        triggerNextBtn.addEventListener("click", resetCadence);
        triggerPrevBtn.addEventListener("click", resetCadence);
    }

    // ==========================================
    // 10. STATISTICS LOGICAL INTERPOLATION COUNTERS
    // ==========================================
    const targetStatNumbers = document.querySelectorAll(".stat-number");
    let executionCountersFired = false;

    function activateCounterSequences() {
        targetStatNumbers.forEach(counter => {
            const threshold = parseInt(counter.getAttribute("data-target"));
            let baseVal = 0;
            const step = threshold / 50; 

            const trackingTimerInterval = setInterval(() => {
                baseVal += step;
                if (baseVal >= threshold) {
                    counter.textContent = threshold + (threshold === 99 ? "%" : "+");
                    clearInterval(trackingTimerInterval);
                } else {
                    counter.textContent = Math.floor(baseVal);
                }
            }, 30);
        });
    }

    // ==========================================
    // 11. SCROLL REVEAL / PARALLAX LOGIC METRICS
    // ==========================================
    const revealContainers = document.querySelectorAll(".reveal");
    const computationalParallaxBg = document.querySelector(".parallax-bg");

    function runGlobalScrollEvaluation() {
        const triggerPoint = (window.innerHeight / 5) * 4;

        revealContainers.forEach(container => {
            const distanceTop = container.getBoundingClientRect().top;
            if (distanceTop < triggerPoint) {
                container.classList.add("active");
                if (container.classList.contains("stats-section") && !executionCountersFired) {
                    executionCountersFired = true;
                    activateCounterSequences();
                }
            }
        });

        if (computationalParallaxBg) {
            const parentElement = computationalParallaxBg.parentElement;
            const metrics = parentElement.getBoundingClientRect();
            if (metrics.top < window.innerHeight && metrics.bottom > 0) {
                const vector = (window.scrollY - parentElement.offsetTop) * 0.2;
                computationalParallaxBg.style.transform = `translateY(${vector}px)`;
            }
        }

        const backToTopBtn = document.getElementById("back-to-top");
        if (backToTopBtn) {
            if (window.scrollY > 700) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }
    }

    window.addEventListener("scroll", runGlobalScrollEvaluation);
    runGlobalScrollEvaluation(); 

    document.getElementById("back-to-top")?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ==========================================
    // 12. COMPONENT VALIDATION FORMS PIPELINES
    // ==========================================
    const submissionContactForm = document.getElementById("contact-form");
    if (submissionContactForm) {
        submissionContactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let valid = true;

            submissionContactForm.querySelectorAll("input, textarea").forEach(field => {
                const wrapper = field.parentElement;
                if (!field.value.trim()) {
                    wrapper.classList.add("invalid");
                    valid = false;
                } else if (field.type === "email" && !validateEmail(field.value)) {
                    wrapper.classList.add("invalid");
                    valid = false;
                } else {
                    wrapper.classList.remove("invalid");
                }
            });

            if (valid) {
                const feedback = document.getElementById("contact-success");
                feedback.textContent = "Booking specifications securely logged.";
                feedback.className = "form-feedback success";
                submissionContactForm.reset();
                setTimeout(() => { feedback.textContent = ""; }, 5000);
            }
        });
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});