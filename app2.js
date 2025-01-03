

//  Przylepienie nawigacji do góry

$(document).ready(function() {
    console.log("ready!")
    var NavY = $('.nav').offset().top;

    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
            
        if (ScrollY > NavY) { 
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky'); 
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});


// schemat do wstawiania okienek zakupowych
const contents = [
    {
        goldenText: "Kolczyki ręcznie robione",
        items: [
            { name: "Kolczyki wiszące granatowe liście", price: "10 zł", img: "img/earringsNavyLeaf.jpeg", link: "https://www.vinted.pl/items/4692957545-kolczyki-dlugie-wiszace" },
            { name: "Kolczyki wiszące fioletowe liście", price: "15 zł", img: "img/earringsPurpleLeaf.jpeg", link: "https://www.vinted.pl/items/4692964216-kolczyki-wiszace-fioletowe" },
            { name: "Kolczyki wiszące błękitne liście", price: "15 zł", img: "img/earringsBlueLeaf.jpeg", link: "https://www.vinted.pl/items/4635959878-kolczyki-niebiesko-czarne" },
            { name: "Kolczyki wiszące mleczno zielone liście", price: "10 zł", img: "img/earringsGreenLeaf.jpeg", link: "https://www.vinted.pl/items/4635956509-kolczyki-zielone-marmurek" },
        ]
    },
    {
        goldenText: "Moda leśna i parkowa",
        items: [
            { name: "Bransoletka srebrny łańcuszek z motylkiem", price: "20 zł", img: "img/braceletSilverFly.jpeg", link: "https://www.vinted.pl/items/4903084205-bransoletka-motylek-na-posrebrzanym-lancuszku" },
            { name: "Bransoletka biały żemyk z liściem", price: "20 zł", img: "img/braceletWhiteLeaf.jpeg", link: "https://www.vinted.pl/items/4903071425-bransoletka-zielona-na-bialym-pasku" },
            { name: "Bransoletka biały żemyk z motylem", price: "20 zł", img: "img/braceletWhiteFly.jpeg", link: "https://www.vinted.pl/items/4903058025-bransoletka-motylek-rozowy" },
            { name: "Kolczyki wiszące słoneczniki", price: "10 zł", img: "img/earringsYellowFlower.jpeg", link: "https://www.vinted.pl/items/4840669578-kolczyki-sloneczniki-duze" },
            { name: "Bransoletka czarny żemyk z motylem", price: "20 zł", img: "img/braceletBlackFly.jpeg", link: "https://www.vinted.pl/items/4903052380-bransoletka-motylek" },
            { name: "Kolczyki wiszące zielone liście", price: "10 zł", img: "img/earringsGreenLeaf2.jpeg", link: "https://www.vinted.pl/items/4840681658-kolczyi-zielone" },
            { name: "Kolczyki wiszące niebieskie kwiaty", price: "10 zł", img: "img/earringsBlueFlower.jpeg", link: "https://www.vinted.pl/items/4842451550-kolczyki-ciemno-niebieskie" },
        ]
    }
];

const container = document.querySelector("#CON");
contents.forEach(content => {

    let itemsDiv = "";
    content.items.forEach((item, idx) => {

        const itemDiv = `
            <div class="windowSmall">
                <div class="windowFoto">
                    <a href=${item.link}><img src=${item.img}></a>
                </div>
                <div class="windowText">
                    <a href=${item.link}><h3>${item.name}</h3></a>
                    <span>${item.price}</span>
                </div>
            </div>
        `;

        itemsDiv += itemDiv;
    });

    const contentDiv = `
        <div class="content">
            <div class="gold">
                <div class="goldText">${content.goldenText}</div>
            </div>
            <div class="window">
                ${itemsDiv}
            </div>
        </div>
    `;

    container.innerHTML += contentDiv;
});


// menu hamburgerowe
const hamburger = document.getElementById('hamburger'); // Pobierz element hamburgera

hamburger.addEventListener('click', () => {
    document.querySelector('.navLeft').classList.toggle('active'); // rozwija hamburger
    document.body.classList.toggle('menu-open'); // przesuwa baner w dol
});

