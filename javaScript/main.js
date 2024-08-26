const parent = document.querySelector(".parent")
let list = document.querySelector(".list")
let country = null
list.classList.add("class")
const getGategores = async () => {
    document.querySelector(".loading").style.display = "block"
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    data = await data.json();
    document.querySelector(".loading").style.display = "none"
    for(let i = 0; i < data.categories.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = data.categories[i].strCategory;
        list.appendChild(li)
        li.addEventListener("click", (e) => {
            getRespes("category", li.innerHTML)
        })
    }
    let text = document.querySelectorAll(".class li");
    activeClass(text)
}

const flags = async () => {
    let data = await fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json")
    country = await data.json()
}
const func = async () => {
    await flags()
    
    getRespes("search", searchInput.value)
}

func()

let searchInput = document.querySelector(".search");

const getRespes = async (type, str) => {
    parent.innerHTML = ""
    document.querySelector(".loading").style.display = "block";
    if(type === "category"){
        data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${str}`)
    }else{
        data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`)
    }
    data = await data.json();
    parent.innerHTML = ""
    document.querySelector(".loading").style.display = "none"
    for(let m = 0; m < data.meals.length; m++){
        let mealName = document.createElement("h2")
        let img = document.createElement("img");
        let box = document.createElement("div")
        box.classList.add("box")
        mealName.classList.add("meal-name");
        mealName.innerHTML = data.meals[m].strMeal;
        img.src = data.meals[m].strMealThumb;
        for(let i = 0; i < country.length; i++){
            if(country[i].name === data.meals[m].strArea){
                console.log("gjff");
            }else{
                console.log("ffef");
                break;
            }
        }
        box.appendChild(img)
        box.appendChild(mealName);
        parent.appendChild(box);
        const obj = {
            id: data.meals[m].idMeal
        };
        const searchParams = new URLSearchParams(obj).toString();
        box.onclick = function () {
            window.location.href = window.location.origin + "/HTML/info.html?" + searchParams
        }
    }
}
getGategores()

document.querySelector(".all").onclick = function () {
    parent.innerHTML = ""
    getRespes("search", searchInput.value)
}

const activeClass = (lis) => {
    lis.forEach(li => {
    li.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        })
        e.target.classList.add("active")
    })
    });
}

searchInput.onkeyup = function () {
    getRespes("search", searchInput.value)
}
