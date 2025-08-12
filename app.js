document.addEventListener('DOMContentLoaded', () => {
  fetch('./data/attributes.json')
    .then(res => res.json())
    .then(attributes => {
      const container = document.getElementById('attributes');
      container.innerHTML = `<h2>Attributes</h2>`;
      attributes.forEach(attr => {
        const field = document.createElement('div');
        field.innerHTML = `
          <label>${attr.name}</label>
          <input type="number" min="0" max="${attr.max}" value="1" />
        `;
        container.appendChild(field);
      });
    });
});
