function onReady() {
  // define identifier for to-toDos
  let id = 0;

  // define initial state of empty array and DOM elements
  let toDos = [];

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  // function to update the array of to-dos
  // called with event listener on the HTML form
  function createNewToDo() {
    // if user attempts to add an empty to-do, quit
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;
    newToDoText.value = '';

    renderTheUI();
  }

  function deleteToDo(id) {
    toDos = toDos.filter(item => item.id !== id);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      // create new <li> element for the to-do
      const newToDo = document.createElement('li');

      // create checkbox for the new to-do
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      // create title for to-do
      const title = document.createElement('span');
      title.textContent = toDo.title;

      // create delete button for each to-do
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = "Delete";

      newToDo.appendChild(checkbox);
      newToDo.appendChild(title);
      newToDo.appendChild(deleteButton);

      toDoList.appendChild(newToDo);

      // add event listener for deleteButton
      deleteButton.addEventListener('click', event => {
        deleteToDo(toDo.id);
        renderTheUI();
      });
    })
  }

  // add event listener for to-do form
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = ''; // clear the text input for user
  });

  renderTheUI();

}

window.onload = function() {
  onReady();
};
