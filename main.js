let countdownElement = document.getElementById('countdown');
let statusElement = document.getElementById('status');
let interval = 30;
let countdown = interval;

// Add your url here
let url = 'https://hoshi-api-f62i.onrender.com'

function updateCountdown() {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown <= 0) {
    sendRequest();
    countdown = interval;
  }
}

function sendRequest() {
  statusElement.textContent = 'Sending request...';
  fetch(url)
    .then(response => {
      if (response.ok) {
        statusElement.textContent = 'Response received!';
      } else {
        statusElement.textContent = 'Error: Response not OK';
      }
    })
    .catch(error => {
      statusElement.textContent = 'Error: ' + error.message;
    });
}

setInterval(updateCountdown, 1000);
setInterval(sendRequest, interval * 1000);