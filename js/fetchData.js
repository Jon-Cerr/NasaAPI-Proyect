export function fetchData() {
  const dateInput = document.querySelector(".search__date");
  const API_KEY = "D5py3xk3LLCvTVaGLVYyacTQKXY1LRq19iwvhOx7";
  const minDate = "1995-06-19";
  const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateInput.value}`;

  if (dateInput.value <= minDate) {
    alert("Este registro no existe dentro de la información, inténtalo de nuevo ingresando otra fecha.");
  } else {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => showData(data))
      .catch((err) => console.log(`Error: ${err}`));
  }
}

function showData(data) {
  const imageFigure = document.querySelector(".data__figure");
  const titleFigure = document.createElement("figcaption");
  titleFigure.classList.add("fetch_title");
  titleFigure.textContent = data.title;

  if (data.media_type == "image") {
    imageFigure.innerHTML = `<img src='${data.url}' alt='${data.title}' class='fetch_image'>`;
  } else {
    imageFigure.innerHTML = `<iframe src='${data.url}' class='fetch_video' alt='${data.title}></iframe>`;
  }

  const explanationAside = document.querySelector(".explanation_aside");
  explanationAside.innerHTML = `<p class='explanation_p'>${data.explanation}</p>`;

  imageFigure.appendChild(titleFigure);
}
