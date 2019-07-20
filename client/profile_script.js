const authToken = localStorage.getItem('auth-token');
const username = document.getElementById('username');
const email = document.getElementById('email');

sendRequest = () => {
  const request = new XMLHttpRequest();
  request.responseType = 'json';

  request.onload = () => {
    const data = request.response;
    username.textContent = data.username;
    email.textContent = data.email;
  };

  const requestData = {
    token: authToken
  };
  const JSONrequestData = JSON.stringify(requestData);

  request.open('post', '/profile');
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSONrequestData);
};
sendRequest();
logOut = () => {
  localStorage.removeItem('auth-token');
};
