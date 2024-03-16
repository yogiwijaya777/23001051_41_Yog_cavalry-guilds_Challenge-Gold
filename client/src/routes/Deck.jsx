import Loading from '../components/Loading';

function Deck() {
  return (
    <div>
      <h1 className="text-center text-light">
        <p>Currently on building....</p>
        <Loading />
      </h1>
    </div>
  );
}

export default Deck;
