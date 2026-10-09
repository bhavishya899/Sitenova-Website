document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
    const business = this.querySelector('input[placeholder="Business Name"]').value.trim();
    const phone = this.querySelector('input[placeholder="Phone Number"]').value.trim();
    const type = this.querySelector("select").value;
    const requirements = this.querySelector("textarea").value.trim();

    const message = 
        "🌐 New SiteNova Website Request\n\n" +
        "👤 Name: " + name + "\n" +
        "🏢 Business: " + business + "\n" +
        "📱 Phone: " + phone + "\n" +
        "💼 Business Type: " + type + "\n" +
        "📝 Requirements: " + requirements;

    const whatsappURL =
        "https://wa.me/919812392835?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});

function toggleMenu() {
    document.querySelector("nav").classList.toggle("show-menu");
}