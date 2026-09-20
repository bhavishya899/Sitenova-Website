document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const business = this.querySelector('input[placeholder="Business Name"]').value;
    const phone = this.querySelector('input[placeholder="Phone Number"]').value;
    const type = this.querySelector("select").value;
    const requirements = this.querySelector("textarea").value;

    const message =
        "🌐 New SiteNova Website Request%0A%0A" +
        "👤 Name: " + encodeURIComponent(name) + "%0A" +
        "🏢 Business: " + encodeURIComponent(business) + "%0A" +
        "📱 Phone: " + encodeURIComponent(phone) + "%0A" +
        "💼 Business Type: " + encodeURIComponent(type) + "%0A" +
        "📝 Requirements: " + encodeURIComponent(requirements);

    const whatsappURL =
        "https://wa.me/919812392835?text=" + message;

    window.open(whatsappURL, "_blank");

    this.reset();
});

function toggleMenu() {
    document.querySelector("nav").classList.toggle("show-menu");
}