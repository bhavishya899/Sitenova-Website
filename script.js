const form = document.querySelector(".contact-form");

// Remember which package the customer clicks.
document.querySelectorAll(".package-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedPackage = this.dataset.package;

        document.querySelector("#selected-package").value =
            selectedPackage || "";

        // Close the mobile menu if it is open.
        document.querySelector("nav").classList.remove("show-menu");
    });
});

// Send the enquiry to WhatsApp.
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.querySelector(
        'input[placeholder="Your Name"]'
    ).value.trim();

    const business = this.querySelector(
        'input[placeholder="Business Name"]'
    ).value.trim();

    const phone = this.querySelector(
        'input[placeholder="Phone Number"]'
    ).value.trim();

    const type = this.querySelector("select").value;

    const requirements = this.querySelector("textarea").value.trim();

    const selectedPackage =
        document.querySelector("#selected-package").value ||
        "Not selected";

    const message =
        "🌐 New SiteNova Website Request\n\n" +
        "👤 Name: " + name + "\n" +
        "🏢 Business: " + business + "\n" +
        "📱 Phone: " + phone + "\n" +
        "💼 Business Type: " + type + "\n" +
        "📦 Selected Package: " + selectedPackage + "\n" +
        "📝 Requirements: " + requirements;

    const whatsappURL =
        "https://wa.me/919812392835?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});

// Mobile hamburger menu.
function toggleMenu() {
    document.querySelector("nav").classList.toggle("show-menu");
}