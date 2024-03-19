function Error({ code, children }) {
  return (
    <div className="alert alert-danger" role="alert">
      {code === 400 && `Something went wrong, please try again later`}
      {code === 401 && `Please login first`}
      {code === 404 && `Ups, Item's you are looking for does not exist`}
      {code === 500 && `Something went wrong, please try again later`}
      {children}
    </div>
  );
}

export default Error;
