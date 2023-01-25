// pup buttons
const popUpOpen = document.querySelector(".popUp");

// input fields
const updateName = document.querySelector("#updateName");
const updatelsName = document.querySelector("#updatelsName");
const updateUserId = document.querySelector("#updateUserId");
const updateEmail = document.querySelector("#updateEmail");
const updateNumber = document.querySelector("#updateNumber");

const dataTable = document.querySelector(".dataTable");

// event listeners
document.addEventListener("click", (e) => {
  if (e.target.id === "addNewData") {
    popUpOpen.style.visibility = "visible";
  }

  const btnSibling = document.getElementById("edit").previousElementSibling;
  const number = btnSibling;
  const email = number.previousElementSibling;
  const userId = email.previousElementSibling;
  const lastName = userId.previousElementSibling;
  const firstName = lastName.previousElementSibling;

  if (e.target.id === "edit") {
    popUpOpen.style.visibility = "visible";
    location.hash = "edit";

    console.log(
      `
       ${firstName.innerText} ${lastName.innerText} ${userId.innerText} ${email.innerText}  ${number.innerText}
        `
    );

    // user value
    updateName.value = firstName.innerHTML;
    updatelsName.value = lastName.innerHTML;
    updateUserId.value = userId.innerHTML;
    updateEmail.value = email.innerHTML;
    updateNumber.value = number.innerText;
  }

  if (e.target.className.includes("updateBtn")) {
    if ((location.hash = "edit")) {
      firstName.innerHTML = updateName.value;
      lastName.innerHTML = updatelsName.value;
      userId.innerHTML = updateUserId.value;
      email.innerHTML = updateEmail.value;
      number.innerText = updateNumber.value;

      popUpOpen.style.visibility = "hidden";
      return;
    }

    // Get insert value
    const insertName = document.querySelector("#updateName").value;
    const insertlsName = document.querySelector("#updatelsName").value;
    const insertUserId = document.querySelector("#updateUserId").value;
    const insertEmail = document.querySelector("#updateEmail").value;
    const insertNumber = document.querySelector("#updateNumber").value;

    if (
      insertName === "" ||
      insertlsName === "" ||
      insertUserId === "" ||
      insertEmail === "" ||
      insertNumber === ""
    )
      return;

    // Get Serial Number Change
    const dataTableSe = document.querySelector(
      ".dataTable tr:last-child td:first-child"
    ).innerHTML;
    const newSerial = Number(dataTableSe) + 1;

    const createData = `
              <td>${newSerial}</td>
              <td>${insertName}</td>
              <td>${insertlsName}</td>
              <td>${insertUserId}</td>
              <td>${insertEmail}</td>
              <td>${insertNumber}</td>
              <td id="edit">Edit</td>
            `;
    const createNewTr = document.createElement("tr");
    createNewTr.innerHTML = createData;

    const dataTbody = document.querySelector(".dataTable tbody");
    dataTbody.appendChild(createNewTr);

    // input field clear
    updateName.value = "";
    updatelsName.value = "";
    updateUserId.value = "";
    updateEmail.value = "";
    updateNumber.value = "";
  }

  if (e.target.className.includes("close")) {
    // input field clear
    updateName.value = "";
    updatelsName.value = "";
    updateUserId.value = "";
    updateEmail.value = "";
    updateNumber.value = "";
    popUpOpen.style.visibility = "hidden";
  }
});