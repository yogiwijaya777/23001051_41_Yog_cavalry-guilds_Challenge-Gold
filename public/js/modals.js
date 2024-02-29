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
