function SearchBar({ name, value, onQueryChange }) {
  return (
    <div className="input-group ">
      <span className="input-group-text ">{name}</span>
      <input type="text" value={value} className="form-control" onChange={(e) => onQueryChange(e.target.value)} />
    </div>
  );
}

export default SearchBar;
