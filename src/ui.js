export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};

export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};

export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show);
};
export const toggleModal = function toggleModal(show, text) {
  show
    ? document.querySelector(".modal").classList.remove("hidden")
    : document.querySelector(".modal").classList.add("hidden");

  document.querySelector(".modal").innerHTML =
    `<div class="modal-inner">${text}</div>`;
};
