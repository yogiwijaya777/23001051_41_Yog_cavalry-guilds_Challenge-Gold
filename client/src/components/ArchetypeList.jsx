function ArchetypeList({ index, isOpen, onArchetypeClick, card }) {
  return (
    <div key={index} className={`col-sm-4 col-md-3 col-lg-2 mt-1 `} onClick={() => onArchetypeClick(card.id)}>
      <div className={`card position-relative ${isOpen ? 'bg-info-subtle active' : ''}`}>
        <div>
          <span className="ms-2">{card.name}</span>
          <span className="position-absolute top-0 end-0 me-1">{card.totalDecks}</span>
        </div>
      </div>
    </div>
  );
}

export default ArchetypeList;
