// 1. Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 120,
    easing: 'ease-out-cubic'
});

// 2. Initialize EmailJS
(function() {
    // THAY THẾ 'YOUR_PUBLIC_KEY' bằng mã thực tế từ EmailJS của bạn
    emailjs.init("YOUR_PUBLIC_KEY");
})();

const contactForm = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        statusText.innerText = "Đang xử lý hồ sơ...";
        statusText.classList.remove('hidden', 'text-emerald-600', 'text-red-600');
        statusText.classList.add('text-primary');

        // THAY THẾ 'YOUR_SERVICE_ID' và 'YOUR_TEMPLATE_ID'
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                statusText.innerText = "Gửi hồ sơ thành công! Greenie Vietnam sẽ liên hệ lại sớm nhất.";
                statusText.classList.replace('text-primary', 'text-emerald-600');
                contactForm.reset();
            }, function(error) {
                statusText.innerText = "Lỗi hệ thống. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.";
                statusText.classList.replace('text-primary', 'text-red-600');
                console.error('FAILED...', error);
            });
    });
}

// 3. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});
