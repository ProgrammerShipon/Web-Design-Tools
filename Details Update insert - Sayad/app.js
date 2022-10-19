const addBtn = document.getElementById('addNewData')
const modalForm = document.getElementById('form')
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modalClose')
const tableBody = document.querySelector('tbody')
let currentRowEl

const showModal = (data = {}) => {
  for (let key in data) {
    const { innerHTML: value } = data[key]
    const formInput = form.querySelector(`[name="${key}"]`)
    formInput.value = value
  }

  modal.style.visibility = 'visible'
}

const closeModal = () => {
  modal.style.visibility = 'hidden'
  currentRowEl = undefined
  const formInputs = form.querySelectorAll('input')
  formInputs.forEach(el => {
    el.value = ''
  })
}

const updateRow = (element, { firstName, lastName, email, userId, number }) => {
  if (!element) {
    const lastNumber =
      +tableBody.lastElementChild.querySelector('td').textContent
    const currentNumber = lastNumber + 1

    element = document.createElement('tr')
    element.innerHTML = `
    <td>${currentNumber <= 9 ? '0' + currentNumber : currentNumber}</td>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${userId.value}</td>
    <td>${email.value}</td>
    <td>${number.value}</td>
    <td id="edit">Edit</td>`

    element.querySelector('#edit').onclick = handleEditClick
    return tableBody.appendChild(element)
  }

  const elements = element.querySelectorAll('td')
  elements[1].innerHTML = firstName.value
  elements[2].innerHTML = lastName.value
  elements[3].innerHTML = userId.value
  elements[4].innerHTML = email.value
  elements[5].innerHTML = number.value
}

const handleFormSubmit = e => {
  e.preventDefault()
  updateRow(currentRowEl, e.currentTarget.elements)
  closeModal()
}

const handleEditClick = e => {
  currentRowEl = e.currentTarget.closest('tr')
  const elements = currentRowEl.querySelectorAll('td')

  showModal({
    firstName: elements[1],
    lastName: elements[2],
    userId: elements[3],
    email: elements[4],
    number: elements[5],
  })
}
const handleAddClick = e => {
  showModal()
}

modalForm.onsubmit = handleFormSubmit
modalCloseBtn.onclick = closeModal
addBtn.onclick = handleAddClick
document.querySelectorAll('#edit').forEach(el => (el.onclick = handleEditClick))
