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
})