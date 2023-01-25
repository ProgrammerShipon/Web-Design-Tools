// FUNCTIONS
const togglePopUp = (action) => {
  // selecting the pop up element from dom
  const popup = document.querySelector(".popUp");

  // show if param is truthy
  if (action) popup.style.visibility = "visible";
  // hide if param is truthy
  else popup.style.visibility = "hidden";
};

const generateMarkup = (form) => {
  // creating an object using the form values
  const data = Object.fromEntries(new FormData(form));

  // getting the last serial number
  const number = +document.querySelector(
    ".dataTable tr:last-of-type td:first-of-type"
  ).innerText;

  // markup
  const newDataHTML = /* html */ `
        <td>0${number + 1 || "1"}</td>
        <td>${data.firstName}</td>
        <td>${data.lastName}</td>
        <td>${data.userId}</td>
        <td>${data.email}</td>
        <td>${data.number}</td>
        <td id="edit">Edit</td>
      `;

  return newDataHTML;
};

const clearForm = (form) => {
  form.querySelectorAll("input").forEach((input) => (input.value = ""));
};

// STATES
let editing;

// EVENT LISTENER
document.addEventListener("click", (e) => {
  switch (e.target.id) {
    ////////////////////////////
    // "Edit" button is clicked
    case "edit":
      // open pop up
      togglePopUp(1);

      // identify which data are we editing
      editing = e.target.closest("tr");

      // placing values into the from
      const info = editing.querySelectorAll("td");
      const formEL = document.querySelector("form");

      formEL.updateName.value = info[1].innerText;
      formEL.updatelsName.value = info[2].innerText;
      formEL.updateUserId.value = info[3].innerText;
      formEL.updateEmail.value = info[4].innerText;
      formEL.updateNumber.value = info[5].innerText;

      break;

    ////////////////////////////////////
    // "Add new data" button is clicked
    case "addNewData":
      // open pop up
      togglePopUp(1);
      break;

    //////////////////////////
    // "X"  button is clicked
    case "close":
      // close pop up
      togglePopUp(0);
      break;

    //////////////////////////////
    // "Update" button is clicked
    case "update":
      // prevent the form from submitting
      e.preventDefault();

      // the form
      const form = e.target.closest("form");

      // close pop up
      togglePopUp(0);

      // ADDING NEW DATA

      // creating an object using the form values
      const markup = generateMarkup(form);

      // clear the form
      clearForm(form);

      // EDITING DATA
      if (editing) {
        editing.innerHTML = markup;
        editing = "";
        return;
      }

      // inserting html to table
      document
        .querySelector(".dataTable")
        .insertAdjacentHTML("beforeend", `<tr>${markup}</tr>`);

      break;

    default:
      console.log("clicked", e.target.id);
      break;
  }
});
