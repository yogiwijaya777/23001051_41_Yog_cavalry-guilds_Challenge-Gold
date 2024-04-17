function Home() {
  return (
    <div>
      <title>Cavalry : Home</title>
      <section className="bg-primary">
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-0 align-self-md-end">
              <div className="row py-3 py-sm-5 py-xl-9 mt-md-10 justify-content-sm-center">
                <div className="col-12 col-sm-10">
                  <h1 className="display-2 fw-bolder mb-4 text-white">
                    We Offer Quality Decks
                  </h1>
                  <div className="row">
                    <div className="col-12 col-xxl-8">
                      <p className="fs-5 mb-5 text-white">
                        We are a team of experienced and passionate individuals
                        who are dedicated to providing the best decks for our
                        customers. Our team of experts has years of experience
                        in the card game of Magic: The Gathering, and we are
                        committed to delivering the highest quality products to
                        our customers.
                      </p>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-sm-flex">
                    <button
                      type="button"
                      className="btn btn-warning bsb-btn-3xl rounded-pill"
                    >
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-0">
              <img
                className="img-fluid w-100 h-100 object-fit-cover"
                loading="lazy"
                src="./img/carousels/Rescue Ace.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <Carousel /> */}
      {/* <About />
      <Services /> */}
    </div>
  );
}

export default Home;
