import 'bootstrap/dist/css/bootstrap.css';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3">
            <h6 className="footer-title">Company name</h6>
            <hr className="divider" />
            <p className="footer-text">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2">
            <h6 className="footer-title">Products</h6>
            <hr className="divider" />
            <ul className="footer-list">
              <li><a href="#!">MDBootstrap</a></li>
              <li><a href="#!">MDWordPress</a></li>
              <li><a href="#!">BrandFlow</a></li>
              <li><a href="#!">Bootstrap Angular</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2">
            <h6 className="footer-title">Useful links</h6>
            <hr className="divider" />
            <ul className="footer-list">
              <li><a href="#!">Your Account</a></li>
              <li><a href="#!">Become an Affiliate</a></li>
              <li><a href="#!">Shipping Rates</a></li>
              <li><a href="#!">Help</a></li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3">
            <h6 className="footer-title">Contact</h6>
            <hr className="divider" />
            <address className="footer-contact">
              <p><i className="fas white fa-home mr-3"></i>New York, NY 10012, US</p>
              <p><i className="fas white fa-envelope mr-3"></i>info@example.com</p>
              <p><i className="fas white fa-phone mr-3"></i>+ 01 234 567 88</p>
              <p><i className="fas white fa-print mr-3"></i>+ 01 234 567 89</p>
            </address>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <div className="text-center py-3">
          &copy; 2023 <span className="footer-title">Car XYZ.com</span>. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
