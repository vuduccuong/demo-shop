const FooterPage = (props) => {
  return (
    <footer className="footer-wrap">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="companyinfo">
              <a href="index.html">
                <img
                  src="img/logo-b.png"
                  alt="AllStore - MultiConcept eCommerce Responsive HTML5 Template"
                />
                AllStore - MultiConcept eCommerce Responsive HTML5 Template
              </a>
            </div>
            <div className="f-block-list">
              <div className="f-block-wrap">
                <div className="f-block">
                  <a href={true} className="f-block-btn" data-id="#f-block-modal-1">
                    <div className="iframe-img">
                      <img src="http://placehold.it/300x127" alt="About us" />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-info-circle"></i>
                    </div>
                  </a>
                  <p className="f-info-ttl">About us</p>
                  <p>Shipping and payment information.</p>
                </div>
              </div>
              <div className="f-block-wrap">
                <div className="f-block">
                  <a href={true} className="f-block-btn" data-id="#f-block-modal-2">
                    <div className="iframe-img">
                      <img
                        src="http://placehold.it/300x127"
                        alt="Ask questions"
                      />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                  </a>
                  <p className="f-info-ttl">Ask questions</p>
                  <p>We call back within 10 minutes</p>
                </div>
              </div>
              <div className="f-block-wrap">
                <div className="f-block">
                  <a
                    href
                    className="f-block-btn"
                    data-id="#f-block-modal-3"
                    data-content="<iframe width='853' height='480' src='https://www.youtube.com/embed/kaOVHSkDoPY?rel=0&amp;showinfo=0' allowfullscreen></iframe>"
                  >
                    <div className="iframe-img">
                      <img
                        src="http://placehold.it/300x127"
                        alt="Video (2 min)"
                      />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-play-circle"></i>
                    </div>
                  </a>
                  <p className="f-info-ttl">Video (2 min)</p>
                  <p>Watch a video about our store</p>
                </div>
              </div>
              <div className="f-block-wrap">
                <div className="f-block">
                  <a href={true} className="f-block-btn" data-id="#f-block-modal-4">
                    <div className="iframe-img">
                      <img
                        src="http://placehold.it/300x127"
                        alt="Our address"
                      />
                    </div>
                    <div className="overlay-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                  </a>
                  <p className="f-info-ttl">Our address</p>
                  <p>Spain, Madrid, 45</p>
                </div>
              </div>
            </div>

            <div
              className="stylization f-block-modal f-block-modal-content"
              id="f-block-modal-1"
            >
              <img
                className="f-block-modal-img"
                src="http://placehold.it/500x334"
                alt="About us"
              />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              natus iste ullam vero, tenetur ab ipsa consectetur deleniti
              officiis ex debitis incidunt alias voluptatum, maxime placeat
              dolores veniam sunt at atque velit, soluta. Neque ea alias quia
              provident molestias, ratione aut esse placeat beatae sequi sed
              laudantium. Unde animi nihil esse, repellendus exercitationem
              dicta harum ab labore, voluptates explicabo in, quidem dolorum
              voluptas!
            </div>
            <div
              className="stylization f-block-modal f-block-modal-callback"
              id="f-block-modal-2"
            >
              <div className="modalform">
                <form action="#" method="POST" className="form-validate">
                  <p className="modalform-ttl">Callback</p>
                  <input
                    type="text"
                    placeholder="Your name"
                    data-required="text"
                    name="name"
                  />
                  <input
                    type="text"
                    placeholder="Your phone"
                    data-required="text"
                    name="phone"
                  />
                  <button type="submit">
                    <i className="fa fa-paper-plane"></i> Send
                  </button>
                </form>
              </div>
            </div>
            <div
              className="stylization f-block-modal f-block-modal-video"
              id="f-block-modal-3"
            ></div>
            <div
              className="stylization f-block-modal f-block-modal-map"
              id="f-block-modal-4"
            >
              <div className="allstore-gmap">
                <div
                  className="marker"
                  data-zoom="15"
                  data-lat="-37.81485261872975"
                  data-lng="144.95655298233032"
                  data-marker="img/marker.png"
                >
                  534-540 Little Bourke St, Melbourne VIC 3000, Australia
                </div>
              </div>
            </div>
            <div className="f-delivery">
              <img src="img/map.png" alt="" />
              <h4>Free delivery in London</h4>
              <p>We will deliver within 1 hour</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container f-menu-list">
        <div className="row">
          <div className="f-menu">
            <h3>About us</h3>
            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="catalog-list.html">Catalog</a>
              </li>
              <li>
                <a href="elements.html">Elements</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="f-menu">
            <h3>Shop</h3>
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="catalog-list.html">Women</a>
              </li>
              <li>
                <a href="catalog-list.html">Men</a>
              </li>
              <li>
                <a href="catalog-list.html">Kids</a>
              </li>
              <li>
                <a href="catalog-list.html">Shoes</a>
              </li>
              <li>
                <a href="catalog-list.html">Accessories</a>
              </li>
            </ul>
          </div>
          <div className="f-menu">
            <h3>Information</h3>
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="blog.html">News</a>
              </li>
              <li>
                <a href="reviews.html">Reviews</a>
              </li>
              <li>
                <a href="blog.html">Articles</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="f-menu">
            <h3>Pages</h3>
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="contacts.html">About us</a>
              </li>
              <li>
                <a href="contacts.html">Delivery</a>
              </li>
              <li>
                <a href="contacts.html">Guarantees</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="404.html">Page 404</a>
              </li>
            </ul>
          </div>
          <div className="f-subscribe">
            <h3>Subscribe to news</h3>
            <form className="f-subscribe-form" action="#">
              <input placeholder="Your e-mail" type="text" />
              <button type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <p>
              Enter your email address if you want to receive our newsletter.
              Subscribe now!
            </p>
          </div>
        </div>
      </div>

      </footer>
  );
};

export default FooterPage;
