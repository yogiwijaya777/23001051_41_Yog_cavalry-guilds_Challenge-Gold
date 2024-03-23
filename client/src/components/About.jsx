function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="about-img">
              <img alt="Archetype" className="img-fluid mt-5" src="/img/Screenshot_20240303-174732_Master_Duel.jpg" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2>
                We Provide the Best
                <br />
                Decks Ever
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, labore reiciendis. Assumenda eos quod animi!
                Soluta nesciunt inventore dolores excepturi provident, culpa beatae tempora, explicabo corporis quibusdam
                corrupti. Autem, quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum dolor, ipsa perferendis porro
                doloribus obcaecati placeat natus iste odio est non earum?
              </p>
              <a className="btn btn-warning" href="/top-decks">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
