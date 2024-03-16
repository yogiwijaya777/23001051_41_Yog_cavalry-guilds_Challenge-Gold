function SingleDeck() {
  return (
    <div className="container text-light mt-2">
      <div className="user-hero text-center">
        <h1 className="">Exosister</h1>
        <p>from Yami Yugi on 12-12-31</p>
        <br />
        <br />
      </div>
      <div className="container row">
        <div className="img--cover col-6 text-center">
          <img
            className="img-fluid"
            src="http://duellinks.gamea.co/file/content/umi92hxs/9m8lhe6k/692680/c0086e8e589b329f2d8b50b056f38d24fea88a24_500.jpg"
            alt="Deck"
          />
        </div>
        <div className="container deck--detail col-6">
          <p>⭐ 12</p>
          <br />
          <p>Description :</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci </p>
          <br />
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  );
}

export default SingleDeck;
