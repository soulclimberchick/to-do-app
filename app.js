function onReady () {
  // select form, input, and ul and assign to variables for later use
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteButton = document.getElementById('deleteButton');
  // add event listener to addToDoForm to listen for the submit event
  addToDoForm.addEventListener('submit', event => {
    // prevent default behavior of page reload when submit event is triggered
    event.preventDefault();
    // get the text input when submit event is triggered
    let title = newToDoText.value;
    // create a new list item
    let newLi = document.createElement('li');
    // create new input and set its type to checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // make the title of the new list item the title input from the user
    newLi.textContent = title;
    // attach the checkbox to the list item
    newLi.appendChild(checkbox);
    // attach new list item to the unordered list
    toDoList.appendChild(newLi);
    // clear the text from the input box so the user doesn't have to
    newToDoText.value = '';
  });
  // create event listener for click function
  deleteButton.addEventListener('click', event => {
    // define tasks
    let tasks = document.getElementsByTagName('li');
    // loop through each taskListItem
    for (var i = tasks.length - 1; i >= 0; i--) {
      // find checked tasks
      if (tasks[i].children[0].checked === true) {
        // remove checked task
        tasks[i].remove();
      }
    }
  });
}
window.onload = function () {
  onReady();
};
