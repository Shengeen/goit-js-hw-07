const getInput = document.querySelector('#name-input');
const getOutput = document.querySelector('#name-output');

getInput.addEventListener('input', event => {
  const name = event.target.value.trim();

  getOutput.textContent = name === '' ? 'Anonymous' : name;
});
