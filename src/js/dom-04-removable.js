function createComponent(componentElement) {
  const inputTemplate = componentElement.querySelector(
    'template.app-tmp-input',
  );
  const inputsList = inputTemplate.parentElement;

  const updateResult = () => {
    const children = [...inputsList.children].filter(
      (child) => child !== inputTemplate,
    );

    const result = children.reduce(
      (carry, child) =>
        carry +
          child.querySelector('input[type="number"].app-cmp-input')
            ?.valueAsNumber ?? 0,
      0,
    );

    [...componentElement.querySelectorAll('output.app-cmp-result')].forEach(
      (element) => (element.value = `${result.toLocaleString()}`),
    );
  };

  const updateList = () => {
    updateResult();

    const children = [...inputsList.children].filter(
      (child) => child !== inputTemplate,
    );

    children.forEach((child, i) => {
      [...child.querySelectorAll('.app-cmp-input-no')].forEach(
        (element) => (element.textContent = `${i + 1}`),
      );
    });

    [...inputsList.querySelectorAll('.app-cmd-remove-input')].forEach(
      (element) => (element.disabled = children.length === 1),
    );
  };

  const createElement = () => {
    const container = inputTemplate.content.cloneNode(true).firstElementChild;

    inputsList.append(container);

    container.addEventListener('click', (ev) => {
      if (ev.target?.matches('.app-cmd-remove-input')) {
        container.remove();

        updateList();
      }
    });

    updateList();
  };

  componentElement.addEventListener('click', (ev) => {
    if (ev.target?.matches('.app-cmd-add-input')) {
      createElement();
    }
  });

  inputsList.addEventListener('change', (ev) => {
    if (ev.target?.matches('input[type="number"].app-cmp-input')) {
      updateResult();
    }
  });

  createElement();
}

document.addEventListener('DOMContentLoaded', () => {
  createComponent(document.body);
});
