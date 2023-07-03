document.addEventListener('DOMContentLoaded', () => {
  const inputComponents = [
    ...document.querySelectorAll('input[type="number"].app-cmp-input'),
  ];

  inputComponents.forEach((element) => {
    element.addEventListener('change', () => {
      const result = inputComponents.reduce(
        (carry, element) => carry + element.valueAsNumber,
        0,
      );

      document.querySelector(
        'output.app-cmp-result',
      ).value = `${result.toLocaleString()}`;
    });
  });
});
