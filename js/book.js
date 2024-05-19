
import data from "./data.js";

function generateBooksPage() {
  let elemVal = '<div id="bookGrid" class="grid-container">';
  data.forEach((item) => {
    elemVal = elemVal + `
            <div class="bookclass">
              <div class="image-container">
                  <img src="${item.img}" alt="${item.genre}">
              </div>
              <div class="details">
                  <h3>${item.name} <br/> <span><i>${item.price}</i></span></h3>
              </div>
            </div>
        `;
  });
  return elemVal + '</div>';
}

export default generateBooksPage;
