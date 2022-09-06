const inputEl = document.querySelector(".input-field input");
const inputBtnEl = document.querySelector(".input-field button");
const toDoList = document.querySelector(".todo-list");
const deleteAllBtn = document.querySelector(".footer button");

// valid button by checking input field
inputEl.addEventListener("keyup", () => {
    let userData = inputEl.value;
    if (userData.trim() != 0) {
        inputBtnEl.classList.add("active");
    } else {
        inputBtnEl.classList.remove("active")
    }

});

showTask()


// adding input value in local storage
inputBtnEl.addEventListener("click", () => {

   userData = inputEl.value;
    let getLocalStorage = localStorage.getItem("new todo");

    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    listArr.push(userData);
    localStorage.setItem("new todo", JSON.stringify(listArr));
    showTask()

    const inputEls = document.querySelector(".input-field input");
    inputEls.value = ' ';
});


// showing task in under ul li
function showTask() {
    let getLocalStorage = localStorage.getItem("new todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    let newLiTag = ``;
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element} <span onclick = "deleteTask(${index})"; > <i class="fas fa-trash"></i> </span></li>`
    
    });
    toDoList.innerHTML = newLiTag;


    // pending status showing dynamically
    const pendingNumber = document.querySelector(".pending");
    pendingNumber.textContent = listArr.length;

}

// delete task 
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("new todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1) //delete or remove task
    localStorage.setItem("new todo", JSON.stringify(listArr));
    showTask();
}

deleteAllBtn.addEventListener("click", () => {
    listArr = [];
    localStorage.setItem("new todo", JSON.stringify(listArr));
    showTask();
})