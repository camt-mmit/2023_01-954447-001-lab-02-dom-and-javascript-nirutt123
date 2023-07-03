import { createComponent as createInputComponent } from './input-component.js';

export function createComponent(componentElement) {
  const sectionTemplate = componentElement.querySelector(
    'template.app-tmp-section',
  );
  const sectionsList = sectionTemplate.parentElement;

  const updateList = () => {
    const children = [...sectionsList.children].filter(
      (child) => child !== sectionTemplate,
    );

    children.forEach((child, i) => {
      child
        .querySelectorAll('.app-cmp-section-no')
        .forEach((element) => (element.textContent = `${i + 1}`));
    });

    sectionsList
      .querySelectorAll('.app-cmd-remove-section')
      .forEach((element) => (element.disabled = children.length === 1));
  };

  const createElement = () => {
    const fragments = sectionTemplate.content.cloneNode(true);
    const container = fragments.firstElementChild;

    sectionsList.append(container);

    container.addEventListener('click', (ev) => {
      if (ev.target?.matches('.app-cmd-remove-section')) {
        container.remove();

        updateList();
      }
    });

    createInputComponent(container);
    updateList();
  };

  componentElement.addEventListener('click', (ev) => {
    if (ev.target?.matches('.app-cmd-add-section')) {
      createElement();
    }
  });

  createElement();
}
