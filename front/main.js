const faqs = document.querySelectorAll('.FAQ');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
}); 
