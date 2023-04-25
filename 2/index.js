import "style.css";


document.body.innerText = "Hello!";

const purpleBg = "purple";
const orangeBg = "orange";
const blueBg = "blue";

function handleWindowSize() {
  if (window.innerWidth >= 1000) {
    body.classList.add(purpleBg);
  } else if (window.innerWidth >= 500) {
    body.classList.add(orangeBg);
  } else {
    body.classList.add(blueBg);
  }
}

window.addEventListener("resize", handleWindowSize);
