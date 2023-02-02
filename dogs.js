const femaleIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8AAADW1tatra319fXOzs7t7e35+fnw8PCEhIQtLS2VlZWenp5+fn42NjYzMzNSUlLl5eXExMQeHh4MDAyLi4u6uro+Pj4ZGRkoKChmZmZ4eHjd3d1GRkZYWFhxcXGyBVe2AAACBUlEQVRoge2Y2ZKDIBBFI0pwwTGuWYzJ///laGM2okAaaqpSw32LtKfwNtBNNhuvf6qS8jbPW05L12SSHIO7jglxiO5+AklF5whN9jJ60t7J7JMH8JCmh8evxBrNdjMqbWkZMxaXtE3nRztmx47nPJ5eTCCnObOx1bxFJos3f4kY+LGZu/CkXxrqhTN4dgYAvjzIYTDDss8q9o1+RsKHVU+EwJkBx6awtFURsOgpCr7TvkrROS0NPhqMw5ySkK9KHVMpM67QZXyv1mwSVo9BFwQcdr0uCM6Bz9lgeaiLCnGmV0bLjBokBj0ns+9bhke6qMgCrj2vYxy8M7fl82JtliqztL8pNtp83Mi8dzUmh9J0uDWfszfXaVJbdcx2irki4J2BLxyXz3EJN7paIaxrtJthSbm2AEMBzzFsYaiqAIsCrknLmmDqxfp4gZ/4XArWlyPUWF05WRdV9Jtzh4qr/SDR99QLvp9rdcdkoly0s4m03KK5acca/koPkqcDsrzdByzZN2dGHfuwIqQK+/vVy8oTIfJ0U3nWwc2VLltio3tnWTGX0dzqwiKLtoNYfEE9tBaLe00MalpleYVbE5ngLm/mHu7hHu7hruHRqxh0GpRJj3Hs7XJ5k4Vr5zx8UVEoCbqATH6KzKgs6Mexf5jp9D2byMM93MM9/OvhER3lqDZ4ef2lfgFMMRFfZv8y7QAAAABJRU5ErkJggg==';
async function getDoggies() {
    let data = await fetch('https://majazocom.github.io/Data/dogs.json');
    let dogs = await data.json();
    console.log(dogs);
    let dogsContainer = document.querySelector('.dogs-container');
    // loopa över hundarna som vi fetchat
    dogs.forEach(dog => {
        // för varje hund vill vi göra lite saker
        // först skapa en container åt hunden där vi kan ha all info på dess kort som i Figma
        let article = document.createElement('article');
        // skapa img-elementet
        let img = document.createElement('img');
        // lägga in bilden som src som finns på hundens objekt (dog -> img-propertyn)
        img.setAttribute('src', dog.img);
        // lägg in skapade bilden i skapade elementet article
        article.appendChild(img);


        // skapa en wrapper för namn, kön och ålder
        let nameSexAgeWrapper = document.createElement('div');
        nameSexAgeWrapper.classList.add('name-sex-age');
        // lägga på wrapper för namn, kön och ålder på vår stora container
        article.appendChild(nameSexAgeWrapper);
        // namn
        let name = document.createElement('h2');
        // kön
        let sex = document.createElement('img');
        sex.setAttribute('src', femaleIcon);

        name.innerHTML = dog.name;
        nameSexAgeWrapper.appendChild(name);
        nameSexAgeWrapper.appendChild(sex);
        // lägga in allt vi skapat i js i vår html:
        dogsContainer.appendChild(article);
    });
};

getDoggies();