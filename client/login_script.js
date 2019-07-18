const form = {
  username: document.getElementById("username"),
  password: document.getElementById("password"),
  submitButton: document.getElementById("sub")
};

const list = document.getElementById("list");
const item = document.getElementById("err");

sendRequest = () => {
  const request = new XMLHttpRequest();

  request.onload = () => {
    list.style.display = "block";
    item.textContent = request.responseText;
    if (item.textContent == "Success") {
      item.classList.remove("err2");
      item.classList.add("succ");
    }
  };

  const requestData = {
    username: form.username.value,
    password: form.password.value
  };

  const JSONrequestData = JSON.stringify(requestData);

  request.open("post", "/login");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSONrequestData);
};

document.getElementsByTagName("BODY")[0].onkeypress = event => {
  if (event.keyCode == 13) {
    sendRequest();
  }
};
form.submitButton.addEventListener("click", sendRequest);
