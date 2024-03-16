import Loading from '../components/Loading';
import SingleDeck from '../components/SingleDeck';

function Deck() {
  return (
    <div>
      {/* <h1 className="text-center text-light">
        <p>Currently on building....</p>
        <Loading />
      </h1> */}
      <SingleDeck />
    </div>
  );
}

export default Deck;
