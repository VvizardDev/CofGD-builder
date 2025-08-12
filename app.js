document.addEventListener('DOMContentLoaded', () => {
  renderAttributes();
  renderSkills();
  renderTraits();
});

function renderAttributes() {
  fetch('./data/attributes.json')
    .then(res => res.json())
    .then(attributes => {
      const container = document.getElementById('attributes');
      container.innerHTML = '<h2>Attributes</h2>';
      attributes.forEach(attr => {
        const field = document.createElement('div');
        field.innerHTML = `
          <label>${attr.name}</label>
          <input type="number" min="0" max="5" value="${attr.default || 1}" />
        `;
        container.appendChild(field);
      });
    })
    .catch(err => console.error('Error loading attributes:', err));
}

function renderSkills() {
  fetch('./data/skills.json')
    .then(res => res.json())
    .then(skills => {
      const container = document.getElementById('skills');
      container.innerHTML = '<h2>Skills</h2>';
      skills.forEach(skill => {
        const field = document.createElement('div');
        field.innerHTML = `
          <label>${skill.name} (${skill.category})</label>
          <input type="number" min="0" max="5" value="${skill.default || 0}" />
        `;
        container.appendChild(field);
      });
    })
    .catch(err => console.error('Error loading skills:', err));
}

function renderTraits() {
  fetch('./data/traits.json')
    .then(res => res.json())
    .then(traits => {
      const container = document.getElementById('traits');
      container.innerHTML = '<h2>Traits</h2>';
      traits.forEach(trait => {
        const field = document.createElement('div');
        field.innerHTML = `
          <label>${trait.name}</label>
          <span>${trait.description || trait.formula || trait.default || ''}</span>
        `;
        container.appendChild(field);
      });
    })
    .catch(err => console.error('Error loading traits:', err));
}
