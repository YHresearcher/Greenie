// 1. Khởi tạo Hiệu ứng cuộn (AOS)
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
});

// 2. Cấu hình EmailJS
(function() {
    // Thay 'YOUR_PUBLIC_KEY' bằng mã thực tế từ dashboard EmailJS của bạn
    emailjs.init("YOUR_PUBLIC_KEY");
})();

const contactForm = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    statusText.innerText = "Đang gửi yêu cầu...";
    statusText.classList.remove('hidden');
    statusText.style.color = "white";

    // Thay 'YOUR_SERVICE_ID' và 'YOUR_TEMPLATE_ID'
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            statusText.innerText = "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.";
            statusText.style.color = "#a7d2a2"; // Màu xanh lá nhạt
            contactForm.reset();
        }, function(error) {
            statusText.innerText = "Lỗi gửi mail. Vui lòng thử lại sau.";
            statusText.style.color = "#ffdad6"; // Màu đỏ nhạt
            console.log('FAILED...', error);
        });
});
