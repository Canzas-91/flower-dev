const faqs = document.querySelectorAll('.FAQ');

faqs.forEach(faq => {
    const question = faq.querySelector('.question');
    
    question.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

// Добавляем обработчики для всех кнопок "Add to cart"
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.cotalog_bt');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.cotalog_item');
            const itemName = item.querySelector('.item_title').textContent;
            const itemPrice = item.querySelector('.cotalog_price').textContent;
            
            // Можно добавить анимацию
            this.textContent = 'Added!';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'Add to cart';
                this.style.backgroundColor = '#665F5F';
            }, 2000);
        });
    });
    
    // Обработчик для кнопки "View now"
    const viewNowButton = document.querySelector('.cover-bt');
    if (viewNowButton) {
        viewNowButton.addEventListener('click', function() {
            document.querySelector('.cotalog').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});