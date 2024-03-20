function Spinner() {
  return (
    <button class="btn btn-primary" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span class="visually-hidden" role="status">
        Loading...
      </span>
    </button>
  );
}

export default Spinner;
