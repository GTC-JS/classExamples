var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

var slowAlert = function () {
  alert("That was really slow!");
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}