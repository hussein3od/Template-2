const myKeysValue = window.location.search;

const urlParams = new URLSearchParams(myKeysValue);

const param = urlParams.get("id");

console.log(param);

const youTubeVideo = async () => {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`)
    data = await data.json();
    console.log(data)
    let btn = document.querySelector(".button")
    btn.onclick = function () {
        window.open(data.meals[0].strYoutube)
    }
}
youTubeVideo()

const Ingredients = async () => {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`)
    data = await data.json();
    for(let i = 1; i < 5; i++){
    let ingredient = document.createElement("h2")
    ingredient.innerHTML = data.meals[0].strIngredient1
    document.body.appendChild(ingredient)
    }
}
Ingredients()