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
                We take pride in offering unparalleled insights for Yu-Gi-Oh! enthusiasts worldwide. Our comprehensive
                analyses, meticulously curated data, and expert strategies ensure that players receive the most accurate and
                up-to-date information available. With a commitment to excellence, we strive to empower our community to
                elevate their gameplay, achieve their goals, and become true masters of the game. Join us on
                Duellinksmeta.com, where excellence meets expertise, and the best information in the world is at your
                fingertips.
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
