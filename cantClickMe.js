const elem = document.getElementById("cant-click-me");

const POSITIONS = [
  {
    top: 0,
    left: 0,
    bottom: "auto",
    right: "auto",
  },
  {
    top: 0,
    left: "auto",
    bottom: "auto",
    right: 0,
  },
  {
    top: "auto",
    left: "auto",
    bottom: 0,
    right: 0,
  },
  {
    top: "auto",
    left: 0,
    bottom: 0,
    right: "auto",
  },
];

let positionIndex = 0;

elem.addEventListener("mouseover", mouseOverHandler);
elem.addEventListener(
  "click",
  (e) => (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
);

function mouseOverHandler(e) {
  toggleElemPosition();
}

function toggleElemPosition() {
  positionIndex = positionIndex + 1 < 4 ? positionIndex + 1 : 0;

  const position = POSITIONS[positionIndex];

  for (const key in position) {
    if (Object.hasOwnProperty.call(position, key)) {
      elem.style[key] = position[key];
    }
  }
}
