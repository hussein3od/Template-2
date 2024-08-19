const myKeysValue = window.location.search;

const urlParams = new URLSearchParams(myKeysValue);

const param = urlParams.get("id");

console.log(param);

const youTubeVideo = async () => {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`)
    data = await data.json();
}
youTubeVideo()