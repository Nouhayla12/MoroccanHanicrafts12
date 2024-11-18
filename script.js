// Carousel functionality
let carouselIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveCarousel() {
    carouselIndex++;
    if (carouselIndex >= totalItems) {
        carouselIndex = 0;
    }

    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.style.transform = `translateX(-${carouselIndex * 100}%)`;
    }
}

// Run the carousel every 3 seconds
setInterval(moveCarousel, 3000);

// Form validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    const fullName = document.getElementById("fullName").value.trim();
    const address = document.getElementById("address").value.trim();
    const cardType = document.getElementById("cardType").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => (error.textContent = "")); // Reset error messages

    let isValid = true;

    if (fullName === "") {
        isValid = false;
        document.getElementById("fullNameError").textContent = "Le nom complet est requis.";
    }

    if (address === "") {
        isValid = false;
        document.getElementById("addressError").textContent = "L'adresse est requise.";
    }

    if (cardType === "") {
        isValid = false;
        document.getElementById("cardTypeError").textContent = "Veuillez sélectionner un type de carte.";
    }

    if (cardNumber === "" || !/^\d{16}$/.test(cardNumber)) {
        isValid = false;
        document.getElementById("cardNumberError").textContent =
            "Veuillez entrer un numéro de carte valide (16 chiffres).";
    }

    if (expiryDate === "" || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        isValid = false;
        document.getElementById("expiryDateError").textContent =
            "La date d'expiration doit être au format MM/AA.";
    }

    if (cvv === "" || !/^\d{3}$/.test(cvv)) {
        isValid = false;
        document.getElementById("cvvError").textContent =
            "Veuillez entrer un CVV valide (3 chiffres).";
    }

    if (isValid) {
        document.querySelector("form").submit(); // Submit the form if valid
    }
}

document.querySelector("form")?.addEventListener("submit", validateForm);

// Slogan visibility animation
window.onload = function () {
    const sloganSection = document.getElementById("slogan-section");
    if (sloganSection) {
        setTimeout(function () {
            sloganSection.classList.add("show");
        }, 2000); // 2 seconds
    }
};

// Dynamic slogan changer
document.addEventListener("DOMContentLoaded", () => {
    const sloganElement = document.querySelector(".slogan-text"); // Select the slogan text element
    const slogans = [
        "From Moroccan hands to your home.",
        "Every piece tells a story.",
        "Crafted with love, shared with the world."
    ];

    if (sloganElement) {
        let index = 0;

        // Function to update the slogan
        function updateSlogan() {
            sloganElement.textContent = slogans[index]; // Update the text content
            index = (index + 1) % slogans.length; // Move to the next slogan
        }

        // Start the slogan change every 3 seconds
        setInterval(updateSlogan, 3000);

        // Initialize with the first slogan
        updateSlogan();
    } else {
        console.error("Slogan element not found!");
    }
});
window.onload = function () {
    const sloganSection = document.getElementById("slogan-section");
    if (sloganSection) {
        setTimeout(() => {
            sloganSection.classList.add("show");
        }, 2000); // Fade in after 2 seconds
    }
};

