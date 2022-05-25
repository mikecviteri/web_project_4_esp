const editPopup = document.querySelector('.popup_edit_profile');
const editForm = editPopup.querySelector('.popup__form');

const editButton = document.querySelector(".profile__edit-button");
const closeButton = editPopup.querySelector('.popup__close-button');


const fullName = document.querySelector(".profile__name");
const occupation = document.querySelector(".profile__description");

const nameInput = editForm.querySelector('.popup__input_field-name');
const occupationInput = editForm.querySelector('.popup__input_field-occupation');

function handleModalOpen(node) {
  node.classList.add("popup_opened");
}

function handleModalClose(node) {
  node.classList.remove("popup_opened");
}

function handleEditFormOpen() {
  handleModalOpen(editPopup);

  nameInput.value = fullName.textContent;
  occupationInput.value = occupation.textContent;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const occupationInputValue = occupationInput.value;

  fullName.textContent = nameInputValue;
  occupation.textContent = occupationInputValue;

  handleModalClose(editPopup);
}

editButton.addEventListener("click", handleEditFormOpen);


closeButton.addEventListener("click", function(){
  handleModalClose(editPopup);
});

editForm.addEventListener("submit", handleEditFormSubmit);
