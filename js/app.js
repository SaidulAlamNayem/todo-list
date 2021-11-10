// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const userInput = todoInput.value;
  if (userInput.length <= 0) {
    alert("please fill the input");
  } else {
    const emptyTodo = document.getElementById("no-todo");
    emptyTodo.innerText = "";

    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";

    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerText = userInput;
    todoDiv.appendChild(li);

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.innerHTML = '<i class="far fa-edit">';
    todoDiv.appendChild(editBtn);

    const checkBtn = document.createElement("button");
    checkBtn.className = "check";
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkBtn);

    const trashBtn = document.createElement("button");
    trashBtn.className = "trash";
    trashBtn.innerHTML = '<i class="fas fa-trash"></i></button>';
    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", function (e) {
  console.log('testing');
  const clicked = e.target;
  // console.log(clicked);
  if (clicked.className == "check") {
    const todoDiv = clicked.parentNode;
    todoDiv.classList.add("completed");
    clicked.remove();
  } else if (clicked.className == "trash") {
    const todoDiv = clicked.parentNode;

    todoDiv.classList.add("drop-effect");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();

      const noTodo = document.getElementsByClassName("todo");
      if (noTodo.length <= 0) {
        const emptyTodo = document.getElementById("no-todo");
        emptyTodo.innerText = "You have no todo";
      }
    });
  }
  else if (clicked.className == "edit") {
    const editParent = clicked.parentElement;
    const oldLi = editParent.children[0];
    const oldText = editParent.textContent;

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.value = oldText;

    editParent.insertBefore(inputText, oldLi);
    oldLi.remove();

    clicked.className = 'save';
    clicked.innerHTML = '<i class="fas fa-save"></i>';

  }
  else if (clicked.className == "save") {

    const todoDiv = clicked.parentElement;
    const oldInput = todoDiv.children[0];
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerText = oldInput.value;

    todoDiv.insertBefore(li, oldInput);
    oldInput.remove();
    
    clicked.className = 'edit';
    clicked.innerHTML = '<i class="fas fa-edit"></i>';
  }

  else if(clicked.className == "search");
});
