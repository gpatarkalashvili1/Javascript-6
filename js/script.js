const input = document.getElementById('name');
const addButton = document.getElementById('clickbody');
const deleteAllButton = document.getElementsByClassName('delete-all')[0];
const list = document.getElementById('list');

addButton.addEventListener('click', function() {
  const name = input.value;
  if (name) {
    const listItem = document.createElement('li');
    listItem.innerHTML = name;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('delete');
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = '';
  }
});

list.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete')) {
    const listItem = event.target.parentNode;
    list.removeChild(listItem);
  }
});

deleteAllButton.addEventListener('click', function() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
