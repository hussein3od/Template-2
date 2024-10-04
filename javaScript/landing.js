let grid = document.querySelector(".grid")
let title = document.querySelector(".grid .description .title")
const getImages = async () => {
    title.style.color = "black"
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    title.style.color = "var(--main-color)"
    data = await data.json();
    let parent = document.createElement("div")
    let circle = document.createElement("div")
    circle.classList.add("circle")
    parent.classList.add("circle-container")
    for(let i = 0; i < 8; i++){
        let image = document.createElement("img")
        let father = document.createElement("div")
        father.classList.add("father")
        image.src = data.categories[i].strCategoryThumb
        father.appendChild(image)
        circle.appendChild(father)
        parent.appendChild(circle)
    }
    let border = document.createElement("div")
    border.classList.add("border")
    circle.appendChild(border)
    grid.appendChild(parent)
}
getImages()

let button = document.querySelector(".description button")

button.onclick = function() {
    window.location.href = window.location.origin + "/Template-2/HTML/main.html"
}
