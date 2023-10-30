import NavBar from "../component/NavBar";
import Footer from "../component/Footter";
import '../style/Team.css';
const Team = () => {
    return (
        <div>
            <NavBar/>
            <section className="auto-repair-team">
      <h1 >Our Auto Repair Team</h1>

      <div className="services-container">
        <div className="service">
          <i className="fas fa-tools"></i>
          <h3>Diagnostics</h3>
          <p>Our expert team can diagnose and pinpoint issues with your vehicle quickly and accurately.</p>
        </div>

        <div className="service">
          <i className="fas fa-bolt"></i>
          <h3>Electrical Issues</h3>
          <p>We specialize in troubleshooting and fixing electrical problems in your vehicle.</p>
        </div>

        <div className="service">
          <i className="fas fa-cogs"></i>
          <h3>Basic Service</h3>
          <p>For routine maintenance and servicing, our team offers quality and affordable solutions.</p>
        </div>

        <div className="service">
          <i className="fas fa-wrench"></i>
          <h3>Brake Repair</h3>
          <p>Trust us to keep your brakes in optimal condition to ensure safety on the road.</p>
        </div>

        <div className="service">
          <i className="fas fa-wrench"></i>
          <h3>Engine Repair</h3>
          <p>We're experienced in engine repairs, from minor issues to complete overhauls.</p>
        </div>

        <div className="service">
          <i className="fas fa-cog"></i>
          <h3>Performance</h3>
          <p>Enhance your vehicle's performance with our expertise in tuning and upgrades.</p>
        </div>

        <div className="service">
          <i className="fas fa-oil-can"></i>
          <h3>Oil Change</h3>
          <p>Regular oil changes are vital for your engine's longevity; we can do it quickly and efficiently.</p>
        </div>

        <div className="service">
          <i className="fas fa-tools"></i>
          <h3>Tire Repair</h3>
          <p>Flat tire or damaged tire? We can repair it or provide replacements as needed.</p>
        </div>

        <div className="service">
          <i className="fas fa-tools"></i>
          <h3>Tire Service</h3>
          <p>From tire rotations to balancing, our tire services keep your ride smooth.</p>
        </div>

        <div className="service">
          <i className="fas fa-cog"></i>
          <h3>Steering</h3>
          <p>Issues with steering and alignment? We'll get your vehicle back on the right track.</p>
        </div>
      </div>
    </section>
            <Footer/>
        </div>
    );
};

export default Team;