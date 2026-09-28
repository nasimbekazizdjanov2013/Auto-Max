// Mashina kartalariga animatsiya
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// Tugmalar bosilganda xabar chiqarish
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Rahmat! Tez orada siz bilan bog'lanamiz.");
    });
});

// Headerni aylantirganda soya qo'shish
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Hero tugmasi bosilganda avtomobillar bo'limiga o'tish
const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {
    heroBtn.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector("#cars").scrollIntoView({
            behavior: "smooth"
        });
    });
}