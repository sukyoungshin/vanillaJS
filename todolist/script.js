// 🚀 localStorage 붙이기
'use strict';

window.addEventListener('load', init);

function init() {
  // new to-do lists
  const addButton = document.querySelector('button');
  addButton.addEventListener('click', createToDo);
  
  // previous to-do lists
  const toDoUnorderedList = document.querySelector('ul');
  const deleteButton = document.getElementsByClassName('close');
  for (let i = 0; i < deleteButton.length; i++) {
    toDoUnorderedList.children[i].addEventListener('click', checkToDo);
    deleteButton[i].setAttribute('class', 'close');
    deleteButton[i].addEventListener('click', deleteToDo);
  };
};

function createToDo() {
  const toDoUnorderedList = document.querySelector('ul');

  const toDoList = document.createElement('li');
  toDoList.addEventListener('click', checkToDo);

  const deleteButton = document.createElement('span');
  deleteButton.setAttribute('class', 'close');
  deleteButton.addEventListener('click', deleteToDo);

  const toDoText = document.querySelector('input');  
  toDoList.innerText = toDoText.value;
  toDoText.value = '';
  toDoList.appendChild(deleteButton);
  toDoUnorderedList.appendChild(toDoList);

  return toDoUnorderedList;
};

function deleteToDo() {
  const parentEl = this.parentElement;
  parentEl.style.display = 'none';
};

function checkToDo() {
  this.classList.toggle('checked');
};
