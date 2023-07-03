function createInput() {
  const container = document.createElement('div');
  const label = document.createElement('label');
  const title = document.createElement('b');
  const input = document.createElement('input');

  input.setAttribute('type', 'number');
  input.setAttribute('value', '0');
  input.classList.add('app-cmp-input');
  input.addEventListener('change', () => {
    const result = [
      ...document.querySelectorAll('input[type="number"].app-cmp-input'),
    ].reduce((carry, element) => carry + element.valueAsNumber, 0);

    document.querySelector(
      'output.app-cmp-result',
    ).value = `${result.toLocaleString()}`;
  });

  const num =
    document.querySelectorAll('input[type="number"].app-cmp-input').length + 1;

  title.textContent = `Number ${num}`;

  label.append(title);
  label.append(input);

  container.append(label);

  return container;
}

document.addEventListener('DOMContentLoaded', () => {
  const cmdAddInput = document.querySelector('.app-cmd-add-input');
  const inputsList = document.querySelector('.app-cmp-inputs-list');

  cmdAddInput.addEventListener('click', () => {
    inputsList.append(createInput());
  });

  inputsList.append(createInput());
});
