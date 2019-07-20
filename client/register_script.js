const form = {
  username: document.getElementById("username"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  submitButton: document.getElementById("sub")
};
const list = document.getElementById("list");
const item = document.getElementById("err");
console.log(localStorage.getItem("auth-token"));
console.log(item.textContent);

sendRequest = () => {
  const request = new XMLHttpRequest();

  request.onload = () => {
    list.style.display = "block";
    item.textContent = request.responseText;
    if (item.textContent == "Success") {
      console.log("you did it !");
      item.classList.remove("err2");
      item.classList.add("succ");
    }
    console.log(item.textContent);
  };

  const requestData = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value
  };

  const JSONrequestData = JSON.stringify(requestData);

  request.open("post", "/register");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSONrequestData);
};

document.getElementsByTagName("BODY")[0].onkeypress = event => {
  if (event.keyCode == 13) {
    sendRequest();
  }
};
form.submitButton.addEventListener("click", sendRequest);
