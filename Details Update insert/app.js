// pup buttons
const editBtn = document.querySelectorAll("#edit");
const popUpOpen = document.querySelector(".popUp");
const popUpClose = document.querySelector(".close");
const updateBtn = document.querySelector(".updateBtn");

// Update id
const updateName = document.querySelector('#updateName');
const updatelsName = document.querySelector('#updatelsName');
const updateUserId = document.querySelector('#updateUserId');
const updateEmail = document.querySelector('#updateEmail');
const updateNumber = document.querySelector('#updateNumber');


editBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const btnSibling = btn.previousElementSibling;
    const number = btnSibling;
    const email = number.previousElementSibling;
    const userId = email.previousElementSibling;
    const lastName = userId.previousElementSibling;
    const firstName = lastName.previousElementSibling;
    console.log(`${firstName.innerText} ${lastName.innerText} ${userId.innerText} ${email.innerText}  ${number.innerText}`);

    popUpOpen.style.visibility = "visible";

    // user value
    updateName.value = firstName.innerHTML;
    updatelsName.value = lastName.innerHTML;
    updateUserId.value = userId.innerHTML;
    updateEmail.value = email.innerHTML;
    updateNumber.value = number.innerText;

    updateBtn.addEventListener('click', () => {
      firstName.innerHTML = updateName.value;
      lastName.innerHTML = updatelsName.value;
      userId.innerHTML = updateUserId.value;
      email.innerHTML = updateEmail.value;
      number.innerText = updateNumber.value;

      popUpOpen.style.visibility = "hidden";
    })
  })
})

// Add New Data
const dataTable = document.querySelector('.dataTable');

// Add Button Click Events
const Addbtn = document.querySelector('#addNewData');
Addbtn.addEventListener('click', () => {
  popUpOpen.style.visibility = "visible";

  // insert Btn
  updateBtn.addEventListener('click', () => {
    // Get insert value
    const insertName = document.querySelector('#updateName').value;
    const insertlsName = document.querySelector('#updatelsName').value;
    const insertUserId = document.querySelector('#updateUserId').value;
    const insertEmail = document.querySelector('#updateEmail').value;
    const insertNumber = document.querySelector('#updateNumber').value;

    // Get Serial Number Change
    const dataTableSe = document.querySelector('.dataTable tr:last-child td:first-child').innerHTML;
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
    const createNewTr = document.createElement('tr');
    createNewTr.innerHTML = createData;

    const dataTbody = document.querySelector('.dataTable tbody');
    dataTbody.appendChild(createNewTr);

    // input field clear
    updateName.value = '';
    updatelsName.value = '';
    updateUserId.value = '';
    updateEmail.value = '';
    updateNumber.value = '';
  })
})

// Close pop
popUpClose.addEventListener("click", function () {
  // input field clear
  updateName.value = '';
  updatelsName.value = '';
  updateUserId.value = '';
  updateEmail.value = '';
  updateNumber.value = '';
  popUpOpen.style.visibility = "hidden";
});