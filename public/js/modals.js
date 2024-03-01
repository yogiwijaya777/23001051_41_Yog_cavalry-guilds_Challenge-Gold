export const hideModal = () => {
  const el = document.querySelector('.modal');
  if (el) el.parentElement.removeChild(el);
};

export const showModal = (modalTitle, modalBody) => {
  return new Promise((resolve, reject) => {
    hideModal();
    const markup = `
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${modalTitle}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>${modalBody}.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-result="false">
                Close
              </button>
              <button type="button" class="btn btn-primary" data-result="true">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

    const modal = new bootstrap.Modal(document.querySelector('.modal'));
    modal.show();

    const modalElement = document.querySelector('.modal');
    modalElement.addEventListener('click', (event) => {
      const target = event.target;
      const result = target.getAttribute('data-result');
      if (result === 'true') {
        resolve(true);
      } else {
        resolve(false);
      }
      modal.hide();
    });
  });
};

export const showUpdateDeckModal = () => {
  return new Promise((resolve, reject) => {
    hideModal();
    const markup = `
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Update Deck</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="updateDeckForm">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control" id="description" required></textarea>
                </div>
                <div class="mb-3">
                  <label for="archetypeId" class="form-label">Archetype ID</label>
                  <input type="text" class="form-control" id="archetypeId" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-result="false">
                Close
              </button>
              <button type="button" class="btn btn-primary" id="confirmUpdateDeckBtn">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

    const modal = new bootstrap.Modal(document.querySelector('.modal'));
    modal.show();

    const confirmUpdateDeckBtn = document.getElementById('confirmUpdateDeckBtn');
    confirmUpdateDeckBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const archetypeId = document.getElementById('archetypeId').value;
      if (name !== '' || description !== '' || archetypeId !== '') {
        resolve({ name, description, archetypeId });
        modal.hide();
      } else {
        alert('At least one of the fields (name, description, archetypeId) must be filled out.');
      }
    });

    const modalElement = document.querySelector('.modal');
    modalElement.addEventListener('hidden.bs.modal', () => {
      modalElement.remove();
    });
  });
};

export const showCreateDeckModal = (archetypeData) => {
  return new Promise((resolve, reject) => {
    hideModal();
    const markup = `
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Create Deck</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="createDeckForm">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control" id="description" required></textarea>
                </div>
                <div class="mb-3">
${archetypeData
  .map((archetype) => {
    return `<div class="form-check">
              <input class="form-check-input" type="radio" name="archetypeId" id="archetypeId-${archetype.id}" value="${archetype.id}">
              <label class="form-check-label" for="archetypeId-${archetype.id}">
                ${archetype.name}
              </label>
            </div>`;
  })
  .join('')}
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-result="false">
                Close
              </button>
              <button type="button" class="btn btn-primary" id="confirmCreateDeckBtn">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);

    const modal = new bootstrap.Modal(document.querySelector('.modal'));
    modal.show();

    const confirmCreateDeckBtn = document.getElementById('confirmCreateDeckBtn');
    confirmCreateDeckBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const archetypeId = document.querySelector('input[name=archetypeId]:checked').value;
      if (name !== '' && description !== '' && archetypeId !== '') {
        resolve({ name, description, archetypeId });
        modal.hide();
      } else {
        alert('All fields must be filled out.');
      }
    });

    const modalElement = document.querySelector('.modal');
    modalElement.addEventListener('hidden.bs.modal', () => {
      modalElement.remove();
    });
  });
};
