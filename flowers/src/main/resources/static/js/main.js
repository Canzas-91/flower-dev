








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

regBtn.addEventListener('click', function() {
    regModal.style.display = "block";
}   
)
let listProducts = [];

const initProducts = () => {
    fetch ('product.json')
    .then (response => response.json())
    .then (data => {
        listProducts = data;
        console.log(listProducts);
        const catalogContainer = document.querySelector('.cotalog_items');
        listProducts.forEach(product => {
            const productHTML = `
                <div class="cotalog_item">
                    <img class="cotalog_img" th:src="@{/images/item1.png}" alt="Букет Кристалл" src="${product.image}">
                    <div class="cotalog_activ">
                        <div class="cotalog_info">
                            <p class="item_title">${product.name}</p>
                            <h2 class="cotalog_price">${product.price} ₽</h2>
                        </div>
                        <button class="cotalog_bt" id = "add-to-cart">В корзину</button>
                    </div>
                </div>
            `;

            catalogContainer.insertAdjacentHTML('beforeend', productHTML);
        })
        
        // Добавляем обработчики для кнопок ПОСЛЕ загрузки товаров
        let cartAddButtons = document.querySelectorAll('.cotalog_bt');
        cartAddButtons.forEach(button => {
                button.addEventListener('click', function() {
                
                // Анимация добавления в корзину
                this.textContent = 'Добавлено!';
                this.style.backgroundColor = '#4CAF50';
                this.style.color = 'white';
                
                // Восстановление кнопки через 2 секунды
                setTimeout(() => {
                    this.textContent = 'В корзину';
                    this.style.backgroundColor = '#665F5F';
                }, 1000);
                
                // Добавление товара в корзину
                const productIndex = Array.from(cartAddButtons).indexOf(this);
                const selectedProduct = listProducts[productIndex];
                
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(selectedProduct);
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Обновление счетчика корзины
                updateCartCounter();    
            });
        });
    })
}
initProducts();

let coverBtn = document.querySelector('.cover-bt');

coverBtn.addEventListener('click', function() {
    document.querySelector('.cotalog').scrollIntoView({ behavior: 'smooth' });
});

let cartAddButtons = document.querySelectorAll('.cotalog_bt');

cartAddButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Товар добавлен в корзину!');
    });
});