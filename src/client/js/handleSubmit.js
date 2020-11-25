function handleSubmit(e) {
  e.preventDefault();

  let formText = document.querySelector("#message");

  if (!formText.value) {
    document.querySelector("#error").innerHTML = "Please introduce a message";
    formText.classList.add("danger");
  }
  checkForName(formText.value);

  console.log("Form Submited");
  fetch("/test")
    .then((res) => res.json())
    .then(function (res) {
      document.querySelector("#results").innerHTML = res.message;
    });
}

export { handleSubmit };
