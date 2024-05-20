
import data from "./data.js";

function generateBooksPage() {
  // add dropdown
  let elemVal = `<div class="selGenre" >
  <label for="selGenreDropdown">Select a genre:</label>
  <select id="selGenreDropdown">
      <option value="all">All</option>
      <option value="romance">Romance</option>
      <option value="mystery">Mystery</option>
      <option value="noir">Noir</option>
      <option value="thriller">Thriller</option>
  </select>
  </div>`;

  //add bookgrid
  elemVal = elemVal + '<div id="bookGrid" class="grid-container">';
  data.forEach((item) => {
    elemVal = elemVal + `
            <div class="bookclass filterItem" data-genre="${item.genre}">
                <div class="image-container">
                    <img src="${item.img}" alt="${item.genre}">
                </div>
                <div class="details">
                    <h3>${item.name} <br/></h3>
                </div>
                <div class="borrow-container">
                <button style="color:black; background-color:white;">Borrow</button>
</div>
            </div>
           
        `;
  });
  elemVal = elemVal + '</div>';
  return elemVal;
}

export default generateBooksPage;
