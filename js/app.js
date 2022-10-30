import { fetchData } from "./fetchData.js";

const searchButton = document.querySelector(".search__button");
searchButton.addEventListener("click", () => {
  fetchData();
});