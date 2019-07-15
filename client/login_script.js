const form = {
  username: document.getElementById("username"),
  password: document.getElementById("password"),
  submitButton: document.getElementById("sub")
};

sendRequest = () => {
  const request = new XMLHttpRequest();

  request.onload = () => {
    alert(request.responseText);
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
