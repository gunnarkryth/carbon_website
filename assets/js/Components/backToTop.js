const dom = document.body;
const upCircleContainer = document.createElement("div");
upCircleContainer.classList.add("up-circle-container");

export const scrollChecker = () => {
  let pastScrollPoint = false;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400 && !pastScrollPoint) {
      pastScrollPoint = true;
      clearContainer();

      let upCircle = `
        <span class="up-circle">
          <a href="#landing_page">&uarr;</a>
        </span>`;

      upCircleContainer.innerHTML += upCircle;
      dom.appendChild(upCircleContainer);
    }
    if ((window.scrollY < 300) & pastScrollPoint) {
      pastScrollPoint = false;
      upCircleContainer.remove();
    }
  });
};

const clearContainer = () => {
  upCircleContainer.innerHTML = "";
};
