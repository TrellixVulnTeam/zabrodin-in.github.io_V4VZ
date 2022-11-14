function cards() {
    //// //// //// //// //// //// //// //// CLASSES FOR TABS IN THE BOTTOM
    class MenuItem {
        constructor(imgSrc, alt, title, descr, price, parentSelector, ...classes) {
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.currency = 27;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.calcPrice();
        }

        calcPrice() {
            this.price = (this.price * this.currency).toFixed(0);
        }

        render() {
            const div = document.createElement(`div`);
            if (this.classes.length > 0) {
                this.classes.forEach(item => div.classList.add(item));
            } else {
                div.classList.add('menu__item');
            }
            div.innerHTML = `
                <img src="${this.imgSrc}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(div);
        }
    }

    const getData = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Can't fetch ${url}, status: ${res.status}`);
        }
        return res.json();
    };

    //////// FETCH API
    // getData(`http://localhost:3000/menu`)
    // .then(data => {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         new MenuItem(img, altimg, title, descr, price, `[data-menu]`).render();
    //     });
    // });
    ///////////////////////////// AXIOS
    axios.get(`http://localhost:3000/menu`)
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuItem(img, altimg, title, descr, price, `[data-menu]`).render();
        });
    });
    
    /*
    new MenuItem(
        `img/tabs/vegy.jpg`,
        `vegy`,
        `Меню "Фитнес"`,
        `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
        `8.48`,
        `[data-menu]`,
        `menu__item`, `menu__item2`, `menu__item3`
    ).render();
    new MenuItem(
        `img/tabs/elite.jpg`,
        `elite`,
        `Меню “Премиум”`,
        `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
        `20.36`,
        `[data-menu]`
    ).render();
    new MenuItem(
        `img/tabs/post.jpg`,
        `post`,
        `Меню "Постное"`,
        `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`,
        `15.93`,
        `[data-menu]`
    ).render();
    */

    //// REST TEST
    // const rest = function(a, b, ...rest) {
    //     console.log(a, b, rest);
    // };
    // rest(1, 2, 3, 4, 5, 6);

    //// DEFAULT PARAMS
    function calcOrDouble(a, b = 2) {
        return a * b;
    }
}

export default cards;