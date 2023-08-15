// Elems
const elemsToggleClr = document.querySelectorAll(".js-color-toggle");

// Consts
const COLORS_CLASSES = ["text-red", "text-black", "text-aqua"];

// Event listeners
elemsToggleClr.forEach((elem) =>
  elem.addEventListener("click", toggleClrHandler)
);

// Event handlers
function toggleClrHandler(e) {
  const target = e.target;
  const colorClass = target.dataset.colorClass;
  const elemToToggleSelector = target.dataset.elemSelector;

  const elemsToToggle = document.querySelectorAll(elemToToggleSelector);
  elemsToToggle.forEach((elem) => toggleClr(elem, colorClass));
}

// Functions
/**
 *
 * @param {Element} elem
 * @param {String} colorClass
 */
function toggleClr(elem, colorClass) {
  clearClr(elem);
  elem.classList.add(colorClass);
}

function clearClr(elem) {
  elem.classList.remove(...COLORS_CLASSES);
}
