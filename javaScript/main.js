const parent = document.querySelector(".parent")
let list = document.querySelector(".list")
list.classList.add("class")
const getGategores = async () => {
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    data = await data.json();
    for(let i = 0; i < data.categories.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = data.categories[i].strCategory;
        list.appendChild(li)
        li.addEventListener("click", (e) => {
            getRespes(li.innerHTML)
        })
    }
    let text = document.querySelectorAll(".class li");
    activeClass(text)
}

const getRespes = (str) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${str}`)
            .then((result) => {
                return result.json();
            }).then((d) => {
                console.log(d)
                parent.innerHTML = ""
                for(let m = 0; m < d.meals.length; m++) {
                    let mealName = document.createElement("h2")
                    let img = document.createElement("img");
                    let box = document.createElement("div")
                    box.classList.add("box")
                    mealName.classList.add("meal-name")
                    mealName.innerHTML = d.meals[m].strMeal
                    img.src = d.meals[m].strMealThumb
                    box.appendChild(mealName)
                    box.appendChild(img)
                    parent.appendChild(box)
                }
            })
        }
        
getGategores()

const all = async () => {
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    data = await data.json();
    for(let m = 0; m < data.meals.length; m++){
        let mealName = document.createElement("h2")
        let img = document.createElement("img");
        let box = document.createElement("div")
        box.classList.add("box")
        mealName.classList.add("meal-name")
        mealName.innerHTML = data.meals[m].strMeal
        img.src = data.meals[m].strMealThumb
        box.appendChild(mealName)
        box.appendChild(img)
        parent.appendChild(box);
    }
}



document.querySelector(".all").onclick = function () {
    parent.innerHTML = ""
    all()
}
all()

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

let searchInput = document.querySelector(".search");

const search = async () => {
    parent.innerHTML = "";
    searchValue = searchInput.value
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    data = await data.json();
    for(let m = 0; m < data.meals.length; m++){
        let mealName = document.createElement("h2")
        let img = document.createElement("img");
        let box = document.createElement("div")
        box.classList.add("box")
        mealName.classList.add("meal-name")
        mealName.innerHTML = data.meals[m].strMeal
        img.src = data.meals[m].strMealThumb
        box.appendChild(mealName)
        box.appendChild(img)
        parent.appendChild(box);
    }
}
searchInput.onkeyup = function () {
    search()
}