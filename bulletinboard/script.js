
window.addEventListener('load', init);

function init() {
  document.forms[0].addEventListener('submit', createNewBoard);
  document.body.addEventListener('drop', dropBoard);
  document.body.addEventListener('dragover', allowDrop);
};

function createNewBoard(e) {
  e.preventDefault();
  const toDoLists = document.querySelector('input');
  const board = document.createElement('div');
  const closeButton = document.createElement('button');
  closeButton.innerText ='X';
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('class', 'close');
  closeButton.addEventListener('click', deleteBoard);

  const paragraph = document.createElement('p');
  paragraph.innerText = toDoLists.value;
  toDoLists.value = '';
  
  board.appendChild(closeButton);
  board.appendChild(paragraph);
  
  const randomNum = new Date().getMilliseconds();
  board.setAttribute('id', randomNum);
  board.setAttribute('draggable', 'true');
  board.addEventListener('dragstart', dragBoard);
  board.style.backgroundColor = paintBackgroundColor();

  return document.body.appendChild(board);
};

function deleteBoard() {
  const parentDiv = this.parentElement;
  parentDiv.remove();
};

function paintBackgroundColor() {
  const backgroundColorsArray = [
    'tomato', 
    'bluelight', 
    'pink', 
    'skyblue', 
    'lightgrey'
  ];
  const backgroundColorIndex = backgroundColorsArray.length;
  const randomNum = Math.floor(Math.random()*backgroundColorIndex);
  return backgroundColorsArray[randomNum];
};

function dragBoard(e) {
  const posX = e.clientX;
  const posY = e.clientY;
  e.target.style.left = posX + 'px';
  e.target.style.top = posY + 'px';
};

function dropBoard(e) {
  e.preventDefault();

};

function allowDrop(e) {
  e.preventDefault();
  e.dataTransfer.effectAllowed = "move";
  dragBoard(e);
  console.log(e);
};