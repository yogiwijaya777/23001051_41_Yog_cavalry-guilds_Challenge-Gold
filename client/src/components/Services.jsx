function Services() {
  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h2>Our Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-laptop"></i>
                <h3 className="card-title">Sustainability</h3>
                <p className="lead">
                  Cavalry Guilds sustains through updated content, community engagement, and ethical advertising, ensuring
                  longevity for players.
                </p>
                <button className="btn bg-warning text-dark">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-journal"></i>
                <h3 className="card-title">Best Quality</h3>
                <p className="lead">
                  Cavalry Guilds stands out for its accuracy, depth, and reliability in providing Yu-Gi-Oh! players with
                  high-quality strategic insights and analysis.
                </p>
                <button className="btn bg-warning text-dark">Read More</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card text-white text-center bg-dark pb-2">
              <div className="card-body">
                <i className="bi bi-intersect"></i>
                <h3 className="card-title">Integrity</h3>
                <p className="lead">
                  Cavalry Guilds upholds integrity by providing unbiased analysis, transparent sourcing, and ethical
                  advertising practices, fostering trust among Yu-Gi-Oh! players.
                </p>
                <button class="btn bg-warning text-dark">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
