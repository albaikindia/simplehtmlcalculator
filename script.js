let resultInput = document.getElementById('result');

function appendValue(value) {
  if (resultInput.value === "0") {
    resultInput.value = value;
  } else {
    resultInput.value += value;
  }
}

function clearResult() {
  resultInput.value = "";
}

function calculateResult() {
  try {
    resultInput.value = eval(resultInput.value);
  } catch (error) {
    alert("Invalid input");
    clearResult();
  }
}
