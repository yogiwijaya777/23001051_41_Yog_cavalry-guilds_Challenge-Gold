function Jumbotron({ title, text, children }) {
  return (
    <div className="bg-dark-subtle rounded-3 mx-5 px-5 mt-4 text-center text-dark">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold mb-4 text-primary">{title}</h1>
        <h4 className="mb-4">{text}</h4>
        {children}
      </div>
    </div>
  );
}

export default Jumbotron;
