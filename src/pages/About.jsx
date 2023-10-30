import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footter';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/about.css';

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="about about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="about-intro square">
                <h1>About Car XYZ</h1>
                <p>
                  Car XYZ is a trusted name in the automotive industry, dedicated to
                  providing exceptional services and exceeding customer expectations.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="about-mission square">
                <h2>Our Mission</h2>
                <p>
                  Our mission is to keep you safely on the road, providing quality
                  automotive services, honest advice, and peace of mind. We understand
                  the value of your time and your vehicle, and we are dedicated to
                  ensuring both are well cared for.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="about-team square">
                <h2>Meet Our Team</h2>
                <p>
                  Car XYZ is proud to have a team of highly skilled technicians and
                  friendly staff who work together to deliver the best possible
                  experience to our valued customers.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="about-services square">
                <h2>Our Services</h2>
                <p>
                  We offer a wide range of services, including maintenance, repairs,
                  diagnostics, and more. With state-of-the-art equipment and a
                  commitment to staying updated with the latest automotive technology,
                  we are well-equipped to handle your vehicle's needs.
                </p>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="about-community squareCom">
                <h2>Community Involvement</h2>
                <p>
                  We are proud to serve our community and strive to make a difference
                  every day. Your trust is our most valuable asset, and we work hard to
                  earn and keep it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
