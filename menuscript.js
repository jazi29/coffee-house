// Burger menu
(function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav-header');
    const menuClose = document.querySelector('.burger-close');
    
    burger.addEventListener('click', () => {
        menu.classList.add('nav-active');
    });
    
    menuClose.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
    
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!menu.contains(target) && !burger.contains(target)) {
            menu.classList.remove('nav-active');
        }
    });
    
    const menuItems = document.querySelectorAll('.nav-header a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('nav-active');
        });
    });
})();



const coffeeTab = document.getElementById('coffee');
const coffeeTabParagh = document.getElementById('coffee').querySelector('p')
const teaTab = document.getElementById('tea');
const teaTabParagh = document.getElementById('tea').querySelector('p')
const dessertTab = document.getElementById('dessert');
dessertTabParagh = document.getElementById('dessert').querySelector('p');

const coffeeTable = document.getElementById('coffee-tab');
const teaTable = document.getElementById('tea-tab');
const dessertTable = document.getElementById('dessert-tab') 

teaTab.addEventListener('click', () => {
    teaTab.style.background = '#665F55';
    teaTabParagh.style.color = '#E1D4C9';

    coffeeTab.style.background = '#E1D4C9';
    coffeeTab.style.cursor = 'pointer';
    coffeeTabParagh.style.color = "#403F3D";

    dessertTab.style.background = '#E1D4C9';
    dessertTab.style.cursor = 'pointer';
    dessertTabParagh.style.color = "#403F3D";

    coffeeTable.style.display = "none";
    dessertTable.style.display = 'none';
    teaTable.style.display = 'block';
});

dessertTab.addEventListener('click', () => {
    dessertTab.style.background = '#665F55';
    dessertTabParagh.style.color = '#E1D4C9';

    coffeeTab.style.background = '#E1D4C9';
    coffeeTab.style.cursor = 'pointer';
    coffeeTabParagh.style.color = "#403F3D";

    teaTab.style.background = '#E1D4C9';
    teaTab.style.cursor = 'pointer';
    teaTabParagh.style.color = "#403F3D";

    coffeeTable.style.display = "none"
    teaTable.style.display = "none";
    dessertTable.style.display = 'block';
});

coffeeTab.addEventListener('click', () => {
    coffeeTab.style.background = '#665F55';
    coffeeTabParagh.style.color = '#E1D4C9';

    dessertTab.style.background = '#E1D4C9';
    dessertTab.style.cursor = 'pointer';
    dessertTabParagh.style.color = "#403F3D";

    teaTab.style.background = '#E1D4C9';
    teaTab.style.cursor = 'pointer';
    teaTabParagh.style.color = "#403F3D";

    dessertTable.style.display = "none"
    teaTable.style.display = "none";
    coffeeTable.style.display = 'block';
});




