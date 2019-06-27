const button = document.querySelector("#button");
const message = document.querySelector("p");

button.addEventListener("click", function() {
  const binaryInput = document.querySelector("#binary").value;
  const regex = /^[0|1]+$/;

  if (regex.test(binaryInput)) {
    message.style.visibility = "hidden";
    return document.querySelector("#decimal").value = parseInt(binaryInput, 2);
  } else {
    message.style.visibility = "visible";
    message.style.color = "red";
    return message.innerText = "Please enter only 1 and 0!";
  }
});