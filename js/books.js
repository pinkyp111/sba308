
import data from "./data";

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
                <h3>${item.name} ${item.genre} - <i>${item.price}</i></h3>
            </div>
        `;
    bookGrid.appendChild(book);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateProductBooks(data);

  
});
