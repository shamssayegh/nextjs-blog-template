export default function Footer() {
  return (
    <footer className="pt-50 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="sidebar-widget mb-30">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">About me</h5>
              </div>
              <div className="textwidget">
                <p>Start writing, no matter what. The water does not flow until the faucet is turned on.</p>
                <p><strong>Address</strong><br />123 Main Street, New York, NY 10001</p>
                <p><strong>Follow me</strong><br />
                  <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                  <li className="list-inline-item"><a className="fb" href="#" target="_blank" title="Facebook"><i className="elegant-icon social_facebook"></i></a></li>
                    <li className="list-inline-item"><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter"></i></a></li>
                    <li className="list-inline-item"><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest"></i></a></li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="sidebar-widget mb-30">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Quick link</h5>
              </div>
              <ul className="font-small">
                <li><a href="#">About me</a></li>
                <li><a href="#">Help & Support</a></li>
                <li><a href="#">Licensing Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Hire me</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="sidebar-widget mb-30">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Tagcloud</h5>
              </div>
              <div className="tagcloud">
                <a href="/category">beautiful</a>
                <a href="/category">New York</a>
                <a href="/category">droll</a>
                <a href="/category">intimate</a>
                <a href="/category">loving</a>
                <a href="/category">travel</a>
                <a href="/category">fighting</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sidebar-widget widget_newsletter mb-30">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Newsletter</h5>
              </div>
              <div className="newsletter">
                <p className="font-medium">Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                <form className="input-group form-subscriber mt-30 d-flex">
                  <input type="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                  <button className="btn bg-primary text-white" type="submit">Subscribe</button>
                </form>
                <label className="mt-20">
                  <input className="mr-5" type="checkbox" required /> I agree to the <a href="#" target="_blank">terms &amp; conditions</a>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy-right pt-30 mt-20">
          <p className="float-md-left font-small text-muted">© 2020, Stories - Personal Blog HTML Template</p>
          <p className="float-md-right font-small text-muted">
            Design by <a href="https://alithemes.com" target="_blank">AliThemes</a> | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
