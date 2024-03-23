import { Button } from 'react-bootstrap';
function Carousel() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide ">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/carousels/Rescue Ace.png" alt="Rescue Ace" className="d-block w-100" />{' '}
          <div class="carousel-caption ">
            <h5>Do You Need at Building Your Deck?</h5>
            <p>We are the best place for you</p>
            <p>
              <Button variant="warning" className="mt-2">
                Learn more...
              </Button>
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/carousels/Exosister.jpg" alt="mikailis" className="d-block w-100" />
          <div class="carousel-caption ">
            <h5>Are You Want to be a Champion?</h5>
            <p>We are the best place for you</p>
            <p>
              <Button variant="warning" className="mt-2">
                Learn more...
              </Button>
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/carousels/Mannadium.jpg" alt="Mannadium" className="d-block w-100" />
          <div class="carousel-caption  ">
            <h5>This Place Only For Champions</h5>
            <p>We are the best place for you</p>
            <p>
              <Button variant="warning" className="mt-2">
                Learn more...
              </Button>
            </p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
