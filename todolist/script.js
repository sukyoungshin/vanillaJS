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


/*
REFERENCE : https://www.w3schools.com/howto/howto_js_todolist.asp

- querySelector로 선택하면 첫번째 요소만 선택되므로, getElementBy...를 사용했음.
- li를 선택하기 위해선, ul을 선택자로 잡는다.
- classList : 요소의 class명을 반환해주는 속성이다. (읽기전용)  
https://www.w3schools.com/jsref/prop_element_classlist.asp
https://developer.mozilla.org/ko/docs/Web/API/Element/classList
*/