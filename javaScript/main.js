const parent = document.querySelector(".parent")
let list = document.querySelector(".list")

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
}

const getRespes = (str) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${str}`)
            .then((result) => {
                return result.json();
            }).then((d) => {
                console.log(d)
                parent.innerHTML = ""
                for(let m = 0; m < d.meals.length; m++) {
                    let meals = document.createElement("div")
                    meals.innerHTML = d.meals[m].strMeal
                    parent.appendChild(meals)
                }
            })
}

getGategores()