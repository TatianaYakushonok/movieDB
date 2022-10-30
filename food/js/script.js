document.addEventListener('DOMContentLoaded', () => {

    // tabs
    
    const tabsContainer = document.querySelector('.tabheader__items');
    const tabs = document.querySelectorAll('[data-tab]');
    const contentTabs = document.querySelectorAll('[data-tab-content]');

    function hideContent() {
        contentTabs.forEach(el => {
            el.classList.add('hidden');
            el.classList.remove('fade');
        });
        tabs.forEach(el => {
            el.classList.remove('tabheader__item_active');
        })
    };

    function showContent(i = 0) {
        contentTabs[i].classList.remove('hidden');
        contentTabs[i].classList.add('fade');
        tabs[i].classList.add('tabheader__item_active');
    };

    tabsContainer.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((el, i) => {
                if (e.target == el) {
                    hideContent();
                    showContent(i);
                };
            }); 
        };
    });

    hideContent();
    showContent();

    /*tabs.forEach(el => {

        el.addEventListener('click', function(e) {

            tabs.forEach(tab => {
                tab.classList.remove('tabheader__item_active');
            });

            if (e.target) {
                e.target.classList.add('tabheader__item_active');
            };

            contentTabs.forEach(el => {
                el.classList.add('hidden');
            });

            const contentTab = document.querySelector('#' + this.dataset.tab);
            contentTab.classList.remove('hidden');
            contentTab.classList.add('fade');
        })
    })*/

    // timer

    const deadLine = '2022-11-08';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0; 
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / (1000 * 60) % 60)),
            seconds = Math.floor((t / 1000) % 60);
        };

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    };

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };

    setClock('.timer', deadLine);

    // Modal

    const modal = document.querySelector('.modal'),
          btn = document.querySelectorAll('[data-modal]'),
          btnClose = modal.querySelector('[data-close]');

    function closeModal() {
        modal.classList.toggle('hidden');
        document.body.style.overflow = '';  
    }

    function openModal() {
        modal.classList.toggle('hidden');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    btn.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    btnClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && !(modal.classList.contains('hidden'))) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        } 
    }

    window.addEventListener('scroll', showModalByScroll);

    // Cards

    class Cards {
        constructor(src, alt, subtitle, descr, priceTotal, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.priceTotal = priceTotal;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.chengedToUAH();
        };

        chengedToUAH() {
            this.priceTotal = this.priceTotal * this.transfer;
        }

        createMenuItem() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.priceTotal}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element);
        }
    };

    new Cards(
        './img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
        9,
        '.menu__field .container',
        ).createMenuItem();

    new Cards(
        './img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”', 
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
        14,
        '.menu__field .container',
    ).createMenuItem();

    new Cards(
        './img/tabs/post.jpg',
        'post',
        'Меню "Постное"', 
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
        21,
        '.menu__field .container',
    ).createMenuItem();

})