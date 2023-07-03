function createInput() {
  const templateInput = document.querySelector('template.app-tmp-input');
  const container = templateInput.content.cloneNode(true).firstElementChild;
  const input = container.querySelector('input[type="number"].app-cmp-input');
  const inputNo = container.querySelector('.app-cmp-input-no');

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

  inputNo.textContent = `${num}`;

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
