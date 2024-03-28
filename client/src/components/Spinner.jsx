function Spinner() {
  return (
    <button className="btn btn-primary" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden" role="status">
        Loading...
      </span>
    </button>
  );
}

export default Spinner;
