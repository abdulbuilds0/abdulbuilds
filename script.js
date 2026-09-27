document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");

    content.animate(
        [
            {
                opacity: 0,
                transform: "translateY(12px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 900,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards"
        }
    );
});