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


editBtn.forEach ( btn => {
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

    updateBtn.addEventListener( 'click', () => {
      firstName.innerHTML = updateName.value;
      lastName.innerHTML = updatelsName.value;
      userId.innerHTML = updateUserId.value;
      email.innerHTML = updateEmail.value;
      number.innerText = updateNumber.value;

      popUpOpen.style.visibility = "hidden";
    })
      
  })
})


// Close pop
popUpClose.addEventListener("click", function () {
  popUpOpen.style.visibility = "hidden";
});

