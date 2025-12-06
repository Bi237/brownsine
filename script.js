// =============================
// MAIN SCRIPT FOR WEBSITE
// (Smooth Scroll + FormSubmit + Modal + Scroll Anim + Car Cursor)
// =============================

document.addEventListener("DOMContentLoaded", function () {

    /* ------------------------------------------
       1) Smooth Scrolling for internal links
    -------------------------------------------*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    /* ------------------------------------------
       2) FormSubmit.co + Success Modal
    -------------------------------------------*/

    const form = document.getElementById("applicationForm");
    const modal = document.getElementById("successModal");
    const closeModal = document.getElementById("closeModal");
    const modalOk = document.getElementById("modalOk");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // prevent redirect

            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = "Submitting...";

            const formData = new FormData(form);

            fetch(form.action, {
                method: "POST",
                body: formData
            })
                .then(() => {
                    form.reset();
                    modal.classList.remove("hidden"); // show modal
                })
                .catch(() => {
                    alert("Something went wrong!");
                })
                .finally(() => {
                    btn.disabled = false;
                    btn.textContent = "Submit Application";
                });
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }
    if (modalOk) {
        modalOk.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }

    /* ------------------------------------------
       3) Animate elements on scroll 
    -------------------------------------------*/

    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const screenHeight = window.innerHeight / 1.2;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < screenHeight) {
                element.classList.add('animate-fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

}); // END DOMContentLoaded



// ===================================================
// 4) CUSTOM CAR CURSOR (🚗)
// ===================================================

(function () {

    // Disable cursor on mobile devices (touch screens)
    if (!("onmousemove" in window) || ("ontouchstart" in window)) return;

    // Hide original cursor
    document.body.classList.add("custom-cursor-enabled");

    // Create car cursor element
    const cursor = document.createElement("div");
    cursor.id = "custom-car-cursor";
    cursor.innerText = "🚗";
    document.body.appendChild(cursor);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    let shown = false;
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!shown) {
            cursor.style.opacity = "1";
            shown = true;
        }
    });

    function lerp(a, b, n) {
        return (1 - n) * a + n * b;
    }

    function animateCursor() {
        posX = lerp(posX, mouseX, 0.18);
        posY = lerp(posY, mouseY, 0.18);

        const dx = mouseX - posX;
        const rot = Math.max(-15, Math.min(15, dx * 0.25));

        cursor.style.transform =
            `translate(${posX}px, ${posY}px) translate(-50%, -50%) rotate(${rot}deg)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover animation on links/buttons
    const interactiveItems = "a, button, input[type='submit'], .nav-link";

    function addHoverListeners() {
        document.querySelectorAll(interactiveItems).forEach(el => {
            el.addEventListener("pointerenter", () => cursor.classList.add("link-hover"));
            el.addEventListener("pointerleave", () => cursor.classList.remove("link-hover"));
        });
    }
    addHoverListeners();

    // Observe dynamic DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Click animation
    window.addEventListener("mousedown", () => cursor.classList.add("cursor-active"));
    window.addEventListener("mouseup", () => cursor.classList.remove("cursor-active"));

})();
