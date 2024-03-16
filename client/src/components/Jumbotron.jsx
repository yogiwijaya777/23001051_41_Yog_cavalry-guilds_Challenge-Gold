function Jumbotron({ title, text, children }) {
  return (
    <div className="bg-body-tertiary rounded-3 mx-5 px-5 mt-4 text-center">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold mb-4 text-primary">{title}</h1>
        <p className="">{text}</p>
        {children}
      </div>
    </div>
  );
}

export default Jumbotron;
