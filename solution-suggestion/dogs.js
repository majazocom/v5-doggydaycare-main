const femaleSymbol = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAADW1tatra319fXOzs7t7e35+fnw8PCEhIQtLS2VlZWenp5+fn42NjYzMzNSUlLl5eXExMQeHh4MDAyLi4u6uro+Pj4ZGRkoKChmZmZ4eHjd3d1GRkZYWFhxcXGyBVe2AAACBUlEQVRoge2Y2ZKDIBBFI0pwwTGuWYzJ///laGM2okAaaqpSw32LtKfwNtBNNhuvf6qS8jbPW05L12SSHIO7jglxiO5+AklF5whN9jJ60t7J7JMH8JCmh8evxBrNdjMqbWkZMxaXtE3nRztmx47nPJ5eTCCnObOx1bxFJos3f4kY+LGZu/CkXxrqhTN4dgYAvjzIYTDDss8q9o1+RsKHVU+EwJkBx6awtFURsOgpCr7TvkrROS0NPhqMw5ySkK9KHVMpM67QZXyv1mwSVo9BFwQcdr0uCM6Bz9lgeaiLCnGmV0bLjBokBj0ns+9bhke6qMgCrj2vYxy8M7fl82JtliqztL8pNtp83Mi8dzUmh9J0uDWfszfXaVJbdcx2irki4J2BLxyXz3EJN7paIaxrtJthSbm2AEMBzzFsYaiqAIsCrknLmmDqxfp4gZ/4XArWlyPUWF05WRdV9Jtzh4qr/SDR99QLvp9rdcdkoly0s4m03KK5acca/koPkqcDsrzdByzZN2dGHfuwIqQK+/vVy8oTIfJ0U3nWwc2VLltio3tnWTGX0dzqwiKLtoNYfEE9tBaLe00MalpleYVbE5ngLm/mHu7hHu7hruHRqxh0GpRJj3Hs7XJ5k4Vr5zx8UVEoCbqATH6KzKgs6Mexf5jp9D2byMM93MM9/OvhER3lqDZ4ef2lfgFMMRFfZv8y7QAAAABJRU5ErkJggg==';
const maleSymbol = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAZlBMVEX///8AAACBgYG8vLzT09PLy8swMDC3t7fZ2dnQ0NAtLS3d3d37+/uRkZHq6uomJiaZmZk6OjqqqqohISFcXFxycnJFRUUNDQ309PRjY2NMTEx7e3vDw8M/Pz9ra2tUVFQVFRWJiYn/FHKMAAAElklEQVR4nO2b25aqMAyG5SBnKiACHmd8/5fc6pA2ICgUW7vXyneJUH7bJmnTsFoRBEEQBEEQBEEQBEH8B+zsMY7+t7U9sMY5flvbgxcC7W9re0ACl0ICl2K8QN8RnNLaPIEY92xgDyLiyMQhFqw3Rs5BTtDrP9MEuh4XVpsoMBT6zqmBApF9RO7JPIHIPjbxyjFOIO6/9co8gWj+ecHKPIFYn3u/YJjAWOiLwscVswSuxfy72ccDowTGwn7v9vHAJIGh6D8vhosGCUTxzQv5VXMEBoP6zBGI7COK0XVTBCL72KzxD357dfctZX+M9Z8pDNuHOQT9+GYYaxTfgm+LGSDejtiHYlh8yi587le2H7Bm6D60PtVoH42f/lh98l3xPMOwfejqvyTeeU/q/thWRbcbXf32kfj7EXUtGRrIdW/9rAH3jbz7VEvhZhQ/tnrGl72X98BP7nevkf3qsY/iKWMxxo51/bOW/mt2Tzq2Gy/Pcy/a1v1f6lC7fQSHroTfS1qE8d1oGxY4mV31xWvW5+ad11dO3PPLzL0OD7ee+OHjV3o2G77LKZ/1bbXYxxq/Mh1/ZePkPX167ANtyKzydY8k2W9Hnxb/zFC3pG/vdpE1bfXENzGzfp0Jt7OLUKhlAS2sMx8xjj4pf6Ke+MQSXO6F88kGKRQeE5XaHnB9mxm9IRQqP0vP+ISf5TDEPFQlrCXmFlzMeo5xW35v94vgYzW3qsAFf+gpDSUNdzCzzZHPjUyFMIB34BQH2CXhk2Nwu/cZEohxpYS34AsMhYbM33GSeLiBCHT4uC6ODS5Q6mn4e+oiMjsvGyQ5DzUDVyKGYK7t8ztV8Q48hWxAhT84dZExm2rhEDFoQNWyFSa5dPtgZIocDYSRXHoKwRxRlMSHrVIl3YJTL23hJcvPCALYvn9QFQIGSD7as0ipQHBj8n628ZQK/IAN5loEzl9qcfQINLYHYbVq7Bws2tav0i3wLPUHVSGgbqmUbiFs/WD0QVWIGEKddAswBpcPqsK0zUfSqyWYxao2dm3ztayfaSC/oCqLCXl92eRADJt3VXt3WC2UkjtbKJn4UbWiBiuRzUNWC0fgLXxnK/e5B4P/p27nzvMrUmMModJTl/vgC06ZQeLFeCqLYiDLJ5ND44knlfm30JLuBW5he5Vp6oSfEc72tfzwQm2WGhYMljfTl6VaOvDWhaXci8BHW5bqw6aAv2nO7pvxE7u9MmXAlSucviYRZwPyK6HJiAOFyQrR6aOy1CBCnIVZ9qR5iMqh9BQuFvx91n7CiBWiXOGgMMGPESdvVvQunc6O4uZcVzleIgzlNmqvIlfi4AN3feWMCa6W8NLRgTt1qip0fjTc6cPb+jB81pgwv/OtV6SznPH2+rSj0CpTB9tLEhTH7qdoufZy2qJX/1RHeXktfMcvsl2Vb7s/WqWGWoA+bq846gW1fLZkCez6Vlmr72vVyMFA7dMTudID4jckp36V2xMvKqf0SAwPfYNAROM+UiNBNjzSZ9tXXyUzjSb2+/WYVeZ+wbO8Jj4VqW3b18wfCCwEQRAEQRAEQRAEQRAG8A9UJCobeGpwWgAAAABJRU5ErkJggg==';
let dogsContainer = document.querySelector('.dogs-container');
let dogList = [];

async function fetchDoggies() {
    let data = await fetch('https://majazocom.github.io/Data/dogs.json');
    dogList = await data.json();
    // loopa ??ver hundarna som vi fetchat
    dogList.forEach(dog => {
        // f??r varje hund vill vi skapa ett kort med informationen i
        createDogCard(dog);
    });
};

fetchDoggies();

function createDogCard(dog) {
    // f??rst skapa en container ??t hunden d??r vi kan ha all info p?? dess kort som i Figma
    let article = document.createElement('article');
    // l??gga p?? en eventlyssnare p?? hundens kort d??r vi skickar med dess chipnummer
    let id = dog.chipNumber;
    article.addEventListener('click', () => {
        dogClicked(id);
    });

    // skapa img-elementet
    let imgEl = document.createElement('figure');
    // l??gga in bilden som bg-bild som finns p?? hundens objekt (dog -> img-propertyn)
    imgEl.style.backgroundImage = `url('${dog.img}')`;
    // l??gg in skapade bilden i skapade elementet article
    article.appendChild(imgEl);


    // skapa en wrapper f??r namn, k??n och ??lder
    let nameSexAgeWrapper = document.createElement('section');
    nameSexAgeWrapper.classList.add('name-sex-age');
    // l??gga p?? wrapper f??r namn, k??n och ??lder p?? v??r stora container pga styling med flex sen
    article.appendChild(nameSexAgeWrapper);
    // l??gga p?? wrapper f??r namn och k??n p?? v??r mindre container i den stora pga styling med flex sen
    let nameSexWrapper = document.createElement('div');
    nameSexAgeWrapper.appendChild(nameSexWrapper);
    // namn
    let nameEl = document.createElement('h2');
    nameEl.innerHTML = dog.name.toUpperCase();
    // k??n
    let sexEl = document.createElement('img');
    // kolla k??net p?? hunden f??r att se vilken symbol den skall ha
    let symbol = '';
    if (dog.sex === 'female') {
        symbol = femaleSymbol
    } else {
        symbol = maleSymbol
    }
    sexEl.setAttribute('src', symbol);
    // ??lder
    let ageEl = document.createElement('h2');
    ageEl.innerHTML = dog.age + 'yr';

    nameSexWrapper.appendChild(nameEl);
    nameSexWrapper.appendChild(sexEl);
    nameSexAgeWrapper.appendChild(ageEl);
    // l??gga in allt vi skapat i v??r stora container i js i v??r html:
    dogsContainer.appendChild(article);
};

let overlayEl = document.querySelector('.dog-overlay');
// funktion f??r n??r en hund klickas p?? och tar emot chipnumret s?? vi har n??got unikt att g?? efter
function dogClicked(id) {
    // t??mma tidigare inneh??ll i overlayen:
    overlayEl.innerHTML = "";

    // hitta hunden som id't tillh??r
    let dogIndex = dogList.findIndex((dog) => dog.chipNumber === id);
    let dog = dogList[dogIndex];

    overlayEl.innerHTML += `
        <section class="overlay-content">
            <img src="${dog.img}">
            <div class="overlay-content__text-section">
                <h2>${dog.name.toUpperCase()}</h2>
                <p>${dog.age}yr</p>
                <p>${dog.breed}</p>
                <p>OWNER: ${dog.owner.name} ${dog.owner.lastName}</p>
            </div>
        </section>
    `;

    overlayEl.classList.toggle('show');
};

    // eventlyssnare p?? hela overlayen f??r att kunna st??nga den
    overlayEl.addEventListener('click', () => {
        overlayEl.classList.toggle('show');
    });