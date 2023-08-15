// DOM
// выбор документов по селектору


const perh = document.querySelectorAll('p');
const h = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
// -=-----------------------------------------------------------------------
const button1 = document.querySelector('#task1');
button1.addEventListener('click', button1ClickHandler);
function euler1() {
  for (let item of perh) {
    item.classList.remove('aquaText');
    item.classList.remove('blackText');
    item.classList.add('redText');
  }
}

function button1ClickHandler() {
  (euler1());
}
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
const button2 = document.querySelector('#task2');
button2.addEventListener('click', button2ClickHandler);
function euler2() {
  for (let item of perh) {
    item.classList.remove('redText');
    item.classList.remove('blackText');
    item.classList.add('aquaText');
  }
}

function button2ClickHandler() {
  (euler2());
}
// -=-----------------------------------------------------------------------


// -------------------------------------------------------------------------
const button3 = document.querySelector('#task3');
button3.addEventListener('click', button3ClickHandler);

function euler3() {
  for (let item of perh) {
    item.classList.remove('redText');
    item.classList.remove('aquaText');
    item.classList.add('blackText');
  }
}

function button3ClickHandler() {
  (euler3());
}
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
const button4 = document.querySelector('#task4');
button4.addEventListener('click', button4ClickHandler);
function euler4() {
  for (let item of h) {
    item.classList.remove('aquaText');
    item.classList.remove('blackText');
    item.classList.add('redText');
  }
}

function button4ClickHandler() {
  (euler4());
}


// -------------------------------------------------------------------------
const button5 = document.querySelector('#task5');
button5.addEventListener('click', button5ClickHandler);
function euler5() {
  for (let item of h) {
    item.classList.remove('redText');
    item.classList.remove('blackText');
    item.classList.add('aquaText');
  }
}

function button5ClickHandler() {
  (euler5());
}
// -=-----------------------------------------------------------------------

// -------------------------------------------------------------------------
const button6 = document.querySelector('#task6');
button6.addEventListener('click', button6ClickHandler);

function euler6() {
  for (let item of h) {
    item.classList.remove('redText');
    item.classList.remove('aquaText');
    item.classList.add('blackText');
  }
}

function button6ClickHandler() {
  (euler6());
}
// -------------------------------------------------------------------------