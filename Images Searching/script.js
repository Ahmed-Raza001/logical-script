const accessKey = "FxDHAM1YeZgvWzsUp6wF3iu62Xtzdn1Wukpt24Hgbhs";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.ariaValueMax;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query= ${keyword}&client_id= ${accessKey}`;
   // https://api.unsplash.com/search/collections?page=1&query=office&client_id=FxDHAM1YeZgvWzsUp6wF3iu62Xtzdn1Wukpt24Hgbhs

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})