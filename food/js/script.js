document.addEventListener('DOMContentLoaded', () => {
    
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
})