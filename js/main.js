// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// EmailJS Integration
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with actual key
    emailjs.init("YOUR_PUBLIC_KEY");
})();

const contactForm = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        statusText.innerText = "Processing submission...";
        statusText.classList.remove('hidden', 'text-emerald-600', 'text-red-600');

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                statusText.innerText = "Brief submitted successfully! We will contact you shortly.";
                statusText.classList.add('text-emerald-600');
                contactForm.reset();
            }, function(error) {
                statusText.innerText = "Error: Submission failed. Please try again later.";
                statusText.classList.add('text-red-600');
                console.error('FAILED...', error);
            });
    });
}
