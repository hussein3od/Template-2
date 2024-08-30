const myKeysValue = window.location.search;

const urlParams = new URLSearchParams(myKeysValue);

const param = urlParams.get("id");

const getInformation = async () => {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`)
    data = await data.json();
    let parent = document.createElement("div");
    parent.classList.add("parent")

    let image = document.querySelector(".image")
    let img = document.querySelector(".image .img");
    img.src = data.meals[0].strMealThumb
    img.onclick = () => {
        window.open(data.meals[0].strYoutube)
    }
    parent.appendChild(image)
    
    let information = document.createElement("div");
    information.classList.add("information");
    let name = document.createElement("h1");
    name.innerHTML = data.meals[0].strMeal;
    information.appendChild(name)

    let box1 = document.createElement("div");
    box1.classList.add("box")
    let Ingredients = document.createElement("h2");
    Ingredients.classList.add("title")
    Ingredients.innerHTML = `Ingredients`
    box1.appendChild(Ingredients)

    for(let i = 1; i <= 20; i++){
        let ingredient = document.createElement("h3")
        ingredient.innerHTML = `${data.meals[0][`strIngredient${i}`]} ${data.meals[0][`strMeasure${i}`]}`;
        if(ingredient.innerHTML === ""){
            break;
        }
        box1.appendChild(ingredient)
    }
    information.appendChild(box1)

    let box2 = document.createElement("div");
    box2.classList.add("box")
    let area = document.createElement("h2");
    area.classList.add("title")
    area.innerHTML = `Area`
    box2.appendChild(area)
    let strArea = document.createElement("h3");
    strArea.innerHTML = data.meals[0].strArea;
    box2.appendChild(strArea)
    information.appendChild(box2)

    let box3 = document.createElement("div");
    box3.classList.add("box")
    let category = document.createElement("h2");
    category.classList.add("title")
    category.innerHTML = `Category`
    box3.appendChild(category)
    let strCategory = document.createElement("h3");
    strCategory.innerHTML = data.meals[0].strCategory;
    box3.appendChild(strCategory)
    information.appendChild(box3)
    
    parent.appendChild(information);
    document.body.appendChild(parent);
    console.log(data)
}
getInformation()