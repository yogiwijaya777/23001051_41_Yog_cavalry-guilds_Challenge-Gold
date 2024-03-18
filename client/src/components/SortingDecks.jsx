function SortingDecks({ sort, onSortChange }) {
  return (
    <div className="container mt-3 text-light">
      <h5>Sort :</h5>
      <div className="row ">
        <select className="col-4 me-2" value={sort} onChange={(e) => onSortChange(e.target.value)}>
          <option selected>SORT BY NAME</option>
          <option value="name:asc">Name ASC (A-Z)</option>
          <option value="name:desc">Name DESC (Z-A)</option>
        </select>
      </div>
    </div>
  );
}

export default SortingDecks;
