const form = {
  username: document.getElementById('username'),
  password: document.getElementById('password'),
  submitButton: document.getElementById('sub')
};

const logoutbutton = document.getElementById('logout');
const profile = document.getElementById('profile');
const list = document.getElementById('list');
const item = document.getElementById('err');
const loginForm = document.getElementById('loginForm');
console.log(localStorage.getItem('auth-token'));

if (localStorage.getItem('auth-token')) {
  logoutbutton.style.visibility = 'visible';
  profile.style.visibility = 'visible';
  list.style.display = 'block';
  loginForm.style.display = 'none';
  console.log('auth-token');
  item.textContent = 'You are logged in';
  item.classList.remove('err2');
  item.classList.add('succ');
}

sendRequest = () => {
  const request = new XMLHttpRequest();

  request.onload = () => {
    const tokenValue = request.getResponseHeader('auth-token');
    console.log(tokenValue);
    // localStorage.removeItem('auth-token');
    list.style.display = 'block';
    item.textContent = request.responseText;
    if (item.textContent == 'Success') {
      localStorage.setItem('auth-token', tokenValue);
      item.classList.remove('err2');
      item.classList.add('succ');
      setTimeout(function() {
        window.location.href = 'index.html';
      }, 1000);
    }
  };

  const requestData = {
    username: form.username.value,
    password: form.password.value
  };

  const JSONrequestData = JSON.stringify(requestData);

  request.open('post', '/login');
  request.setRequestHeader('Content-type', 'application/json');
  request.send(JSONrequestData);
};

document.getElementsByTagName('BODY')[0].onkeypress = event => {
  if (event.keyCode == 13) {
    sendRequest();
  }
};

logOut = () => {
  localStorage.removeItem('auth-token');
};
form.submitButton.addEventListener('click', sendRequest);
logoutbutton.addEventListener('click', logOut);
