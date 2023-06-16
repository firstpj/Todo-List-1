import './index.css';
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName('LI');
​
for (let i = 0; i < myNodelist.length; i + 1) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
​
// Click on a close button to hide the current list item
const close = document.getElementsByClassName('close');
​
for (let i = 0; i < close.length; i + 1) {
  close[i].onclick = () => {
    const div = this.parentElement;
    div.style.display = 'none';
  };
}
​
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
​
// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('myInput').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';
​
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
​
  for (let i = 0; i < close.length; i + 1) {
    close[i].onclick = () => {
      const div = this.parentElement;
      div.style.display = 'none';
    };
  }
}
​
document.querySelector('.addBtn').addEventListener('click', newElement);