
import data from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  generateProductBooks(data);
});


function generateProductBooks(data) {
  const bookGrid = document.getElementById("bookGrid");

  data.forEach((item) => {
    let book = document.createElement("div");
    book.className = "bookclass";
    book.innerHTML = `
            <div class="image-container">
                <img src="${item.img}" alt="${item.genre}">
            </div>
            <div class="details">
                <h3>${item.name} <br/> <span><i>${item.price}</i></span></h3>
            </div>
        `;
    bookGrid.appendChild(book);
  });
  console.log("bookgrid=",bookGrid);
}


