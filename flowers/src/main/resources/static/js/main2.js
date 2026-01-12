let showRegModal = document.querySelector('.reg_ico');
let regModal = document.querySelector('.modal_reg');
showRegModal.addEventListener('click', function() {
    regModal.style.display = "block";
});

let closeReg = document.getElementsByClassName("close_reg")[0];
closeReg.onclick = function() {
    regModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == regModal) {
        regModal.style.display = "none";
    }
}

let regButtons = document.querySelectorAll('.modal_button_reg');
regButtons.forEach(button => {
    button.onclick = function(event) {
        event.preventDefault();
        const nameInput = regModal.querySelector('input[type="text"]');
        const emailInput = regModal.querySelector('input[type="email"]');
        const passwordInput = regModal.querySelector('input[type="password"]');
        if (nameInput.value.length === 0) {
            alert('Введите имя!');
            return;
        }
        if (emailInput.value.length === 0) {
            alert('Введите email!');
            return;
        }
        if (passwordInput.value.length === 0) {
            alert('Введите пароль!');
            return;
        }
        alert('Успешно зарегистрированы!');
        regModal.style.display = "none";
        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    };
});
const dataMas = [];
const productIndex = () => {
    fetch ('product.json')
    .then (response => response.json())
    .then (data => {
        dataMas = data;
        const cotalogItems = document.querySelector('.cotalog_items');
        dataMas.forEach(product => {
            const cotalogItem = `
                <div class="cotalog_item" data-id="${product.id}">
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
            cotalogItems.insertAdjacentHTML('beforeend', cotalogItem);
        });
        let cartCount = 0;
        let cartNum = document.querySelector('.cart_num');
        let cartBtn = document.querySelectorAll('.cotalog_bt');
        cartBtn.forEach(buttons => {
            buttons.addEventListener('click', function(){

                this.textContent = 'Добавлено!';
                this.style.backgroundColor = '#4CAF50';
                this.style.color = 'white';

                setTimeout(() => {
                    this.style.backgroundColor = '#665F5F';
                    this.textContent = 'В корзину';
                }, 1000);
                const cotalogItems = document.querySelector('.cotalog_items');
        
                cartCount += 1;
                cartNum.textContent = cartCount;

                // написать добавление в корзину как с cotalogItem
                const cartItems = document.querySelector ('.main_product');
                data.forEach(product => {
                    const cartItem = `
                        <div class="product">
                            <div class="info">
                                <img src="${product.image}" alt="product" class="info_img">
                                <div class="info_title">
                                    <h3 class="title">${product.name}/h3>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                            <div class="score">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>  
                        </div>   
                    `;
                    cartItems.insertAdjacentHTML('beforeend', cartItem);
                });

            });
        });



    });
};
productIndex();

const faqs = document.querySelectorAll('.FAQ');


faqs.forEach(faq => {
    const question = faq.querySelector('.question');
    question.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});
