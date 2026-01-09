// FAQ функционал
const faqs = document.querySelectorAll('.FAQ');

faqs.forEach(faq => {
    const question = faq.querySelector('.question');
    
    question.addEventListener('click', () => {
        // Закрываем все другие открытые FAQ
        faqs.forEach(otherFaq => {
            if (otherFaq !== faq && otherFaq.classList.contains('active')) {
                otherFaq.classList.remove('active');
            }
        });
        
        // Открываем/закрываем текущий FAQ
        faq.classList.toggle('active');
    });
});

// Добавляем обработчики для всех кнопок "В корзину"
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.cotalog_bt');
    const cartIcon = document.querySelector('.cart-ico');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.cotalog_item');
            const itemName = item.querySelector('.item_title').textContent;
            const itemPrice = item.querySelector('.cotalog_price').textContent;
            
            // Анимация добавления в корзину
            this.textContent = 'Добавлено!';
            this.style.backgroundColor = '#4CAF50';
            this.style.color = 'white';
            if (cartIcon) {
                cartIcon.classList.add('shake');
                setTimeout(() => {
                    cartIcon.classList.remove('shake');
                }, 500);
            }
            
            // Восстановление кнопки через 2 секунды
            setTimeout(() => {
                this.textContent = 'В корзину';
                this.style.backgroundColor = '#665F5F';
            }, 1000);
            
            // Можно добавить логику сохранения в LocalStorage
            addToCartLocalStorage(itemName, itemPrice);
        });
    });
    
    // Обработчик для кнопки "Смотреть каталог"
    const viewNowButton = document.querySelector('.cover-bt');
    if (viewNowButton) {
        viewNowButton.addEventListener('click', function() {
            const catalogSection = document.querySelector('.cotalog');
            if (catalogSection) {
                catalogSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Обработчик для корзины
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            alert('Корзина пока в разработке. Скоро появится функционал!');
        });
    }
    
    // Обработчики для изображений галереи
    const galleryImages = document.querySelectorAll('.galary_img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Можно добавить модальное окно с увеличенным изображением
            this.classList.toggle('zoomed');
        });
    });
    
    // Плавное появление элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за элементами
    const animatedElements = document.querySelectorAll('.cotalog_item, .title_conteiner, .FAQ, .galary_img');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Функция для добавления в LocalStorage (базовая реализация)
function addToCartLocalStorage(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const item = {
        id: Date.now(),
        name: name,
        price: price,
        quantity: 1,
        date: new Date().toISOString()
    };
    
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Обновляем счетчик корзины, если он есть
    updateCartCounter();
}

// Функция обновления счетчика корзины
function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCounter = document.querySelector('.cart-counter');
    
    if (!cartCounter) {
        // Создаем счетчик, если его нет
        const cartIcon = document.querySelector('.cart-ico');
        if (cartIcon) {
            const counter = document.createElement('div');
            counter.className = 'cart-counter';
            counter.style.position = 'absolute';
            counter.style.top = '-5px';
            counter.style.right = '-5px';
            counter.style.backgroundColor = '#ff4757';
            counter.style.color = 'white';
            counter.style.borderRadius = '50%';
            counter.style.width = '25px';
            counter.style.height = '25px';
            counter.style.display = 'flex';
            counter.style.alignItems = 'center';
            counter.style.justifyContent = 'center';
            counter.style.fontSize = '12px';
            counter.style.fontWeight = 'bold';
            cartIcon.style.position = 'relative';
            cartIcon.appendChild(counter);
        }
    }
    
    const counterElement = document.querySelector('.cart-counter');
    if (counterElement) {
        counterElement.textContent = cart.length;
        counterElement.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

// Инициализация счетчика при загрузке
document.addEventListener('DOMContentLoaded', updateCartCounter);

let regModal = document.querySelector('.modal_reg');
let regBtn = document.querySelector('.reg_ico');
let regSpan = document.getElementsByClassName("close_reg")[0];
let buttons = document.querySelectorAll('.modal_button_reg');

if (buttons) {
    buttons.forEach(button => {
        button.onclick = function(event) {
            event.preventDefault();
            
            const nameInput = regModal.querySelector('input[type="text"]');
            const emailInput = regModal.querySelector('input[type="email"]');
            const passwordInput = regModal.querySelector('input[type="password"]');
            if (nameInput.value.trim() === '') {
                alert('Введите имя!');
                return;
            }
            if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                alert('Введите корректный email!');
                return;
            }
            if (passwordInput.value.length < 6) {
                alert('Пароль должен быть минимум 6 символов!');
                return;
            }
            
            alert('Успешно зарегистрированы!');
            regModal.style.display = "none";
            nameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
        }
    });
}

regSpan.onclick = function() {
    regModal.style.display = "none";
}

regBtn.onclick = function() {
    regModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == regModal) {
        regModal.style.display = "none";
    }
} 
