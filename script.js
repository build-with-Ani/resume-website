// ===============================
// PORTFOLIO SCRIPT (OPTIMIZED)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // ELEMENTS
    // ===============================
    const body = document.body;
    const toggle = document.getElementById("darkModeToggle");
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");
    const progressBar = document.getElementById("progressBar");
    const typing = document.getElementById("typing");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navMenu a");

    // ===============================
    // DARK MODE
    // ===============================
    if (toggle) {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            toggle.textContent = body.classList.contains("dark-mode")
                ? "☀️"
                : "🌙";
        });
    }

    // ===============================
    // MOBILE MENU
    // ===============================
    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
            });
        });
    }

    // ===============================
    // TYPING EFFECT
    // ===============================
    if (typing) {

        const roles = [
            "Software Developer",
"Java Developer",
"Full Stack Developer",
"Backend Developer",
"Frontend Developer",
"Web Developer",
"Application Developer"
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const current = roles[roleIndex];

            typing.textContent = current.substring(0, charIndex);

            if (!deleting) {
                charIndex++;

                if (charIndex > current.length) {
                    deleting = true;
                    setTimeout(typeEffect, 1200);
                    return;
                }

            } else {
                charIndex--;

                if (charIndex < 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    charIndex = 0;
                }
            }

            setTimeout(typeEffect, deleting ? 40 : 90);
        }

        typeEffect();
    }

    // ===============================
    // SCROLL PROGRESS BAR
    // ===============================
    window.addEventListener("scroll", () => {

        if (!progressBar) return;

        const scrollTop = window.scrollY;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";
    });

    // ===============================
    // ACTIVE NAV (INTERSECTION OBSERVER)
    // ===============================
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const id = entry.target.getAttribute("id");

                    navLinks.forEach(link => {
                        link.classList.remove("active");

                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.6
        }
    );

    sections.forEach(section => observer.observe(section));

    // ===============================
    // SCROLL REVEAL (INTERSECTION OBSERVER)
    // ===============================
    const revealElements = document.querySelectorAll(
        ".card, .project-card, .timeline-item, .skills-grid span"
    );

    const revealObserver = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0px)";
                    obs.unobserve(entry.target);
                }
            });

        },
        { threshold: 0.15 }
    );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .6s ease";

        revealObserver.observe(el);
    });

    // ===============================
    // SMOOTH SCROLL (NAV LINKS ONLY)
    // ===============================
    navLinks.forEach(anchor => {

        anchor.addEventListener("click", (e) => {

            e.preventDefault();

            const targetId = anchor.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
  });
