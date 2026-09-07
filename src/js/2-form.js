const formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".contact-form");

const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;

  form.email.value = formData.email;
  form.message.value = formData.message;
}

form.addEventListener("input", formValue);

function formValue(event) {
  if (event.target.name === "email") {
    formData.email = event.target.value;
  } else if (event.target.name === "message") {
    formData.message = event.target.value;
  }

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();

  if (formData.email.trim() === "" || formData.message.trim() === "") {
    return alert("Fill please all fields");
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");

  formData.email = "";
  formData.message = "";

  form.reset();
}