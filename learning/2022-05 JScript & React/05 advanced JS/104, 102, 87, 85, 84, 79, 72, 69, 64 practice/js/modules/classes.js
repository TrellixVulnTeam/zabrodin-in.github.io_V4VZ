import {getResources} from '../services/services';

function classes() {
    ///////////////////////////////////////////////////////////////////
    //////////////// TEMPLATES BY CLASSES (menu__item) ////////////////
    class MenuCard {
        constructor(imgSrc, alt, title, descr, price, ...classes) {
            this.title = title;
            this.imgSrc = imgSrc;
            this.alt = alt;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            // ////// FIRST & SECOND VARIANT
            // this.HTML = `
            //     <img src="${this.imgSrc}" alt="${this.alt}">
            //     <h3 class="menu__item-subtitle">${this.title}</h3>
            //     <div class="menu__item-descr">${this.descr}</div>
            //     <div class="menu__item-divider"></div>
            //     <div class="menu__item-price">
            //         <div class="menu__item-cost">Цена: </div>
            //         <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            //     </div>
            // `;
        }
        render() {
            const elem = document.createElement('div');
            elem.classList.add('menu__item');
            this.classes.forEach(className => elem.classList.add(className));
            elem.innerHTML = `
                <img src="${this.imgSrc}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена: </div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            return elem;
        }
    }

    // here was getResources() >> services.js
    
    // getResources('http://localhost:3000/menu')
    //     .then(data => {
    //         const menuContainer = document.querySelector('[data-menu-container]');
    //         menuContainer.innerHTML = '';
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             menuContainer.append(new MenuCard(img, altimg, title, descr, price).render());
    //         });
    //     });
    axios.get('http://localhost:3000/menu')
        .then(data2 => {
            const menuContainer = document.querySelector('[data-menu-container]');
            menuContainer.innerHTML = '';
            data2.data.forEach(({img, altimg, title, descr, price}) => {
                menuContainer.append(new MenuCard(img, altimg, title, descr, price).render());
            });
        });

    // const menuContainer = document.querySelector('[data-menu-container]'),
    //       item1 = new MenuCard('Меню "Фитнес"',
    //                         'img/tabs/vegy.jpg',
    //                         'vegy',
    //                         229,
    //                         'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //                         'test1', 'test2'),
    //       item2 = new MenuCard('Меню “Премиум”',
    //                         'img/tabs/elite.jpg',
    //                         'elite',
    //                         550,
    //                         'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!'),
    //       item3 = new MenuCard('Меню "Постное"',
    //                         'img/tabs/post.jpg',
    //                         'post',
    //                         430,
    //                         'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.'),
    //       itemArr = [item1, item2, item3];

    // menuContainer.innerHTML = '';
    // // let item;

    // // ////// FIRST VARIANT
    // // item = document.createElement('div');
    // // item.classList.add('menu__item');
    // // item.innerHTML = item1.HTML;
    // // menuContainer.append(item);

    // // item = document.createElement('div');
    // // item.classList.add('menu__item');
    // // item.innerHTML = item2.HTML;
    // // menuContainer.append(item);

    // // item = document.createElement('div');
    // // item.classList.add('menu__item');
    // // item.innerHTML = item3.HTML;
    // // menuContainer.append(item);

    // // ////// SECOND VARIANT
    // // for (let i = 0; i < 3; i++) {
    // //     item = document.createElement('div');
    // //     item.classList.add('menu__item');
    // //     item.innerHTML = itemArr[i].HTML;
    // //     menuContainer.append(item);
    // // }
    // for (let i = 0; i < 3; i++) {
    //     menuContainer.append(itemArr[i].render());
    // }
}

export default classes;