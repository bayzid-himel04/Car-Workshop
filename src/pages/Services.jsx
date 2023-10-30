import NavBar from "../component/NavBar";
import Footer from "../component/Footter";
import React, { useEffect } from 'react';
import '../style/Services.css';
const Services = () => {
    const services = [
        {
          title: 'Auto Technician',
          description: 'Professional diagnosis and repair of vehicle issues, including engine problems, electrical systems, and brakes.',
        },
        {
          title: 'Tire Specialist',
          description: 'Expert assistance with tire-related services, including tire repair and replacement.',
        },
        {
          title: 'Performance Engineer',
          description: 'Passionate about enhancing vehicle performance, we offer tuning and upgrade solutions.',
        },
        {
          title: 'Service Advisor',
          description: 'Your trusted point of contact, providing recommendations and scheduling services.',
        },
        {
          title: 'Brake Repair',
          description: 'Specializing in brake system maintenance, ensuring safety on the road.',
        },
        {
          title: 'Oil Change',
          description: 'Efficient and regular oil changes to extend your engine’s longevity.',
        },
        {
          title: 'Electrical Issues',
          description: 'Troubleshooting and resolving electrical problems in your vehicle.',
        },
        {
          title: 'Tire Service',
          description: 'Comprehensive tire services, including rotations and balancing for a smooth ride.',
        },
      ];
      useEffect(() => {
        // Get all elements with the "rotate" class
        const rotateElements = document.querySelectorAll('.rotate');
    
        // Function to handle the mouseenter event
        const handleMouseEnter = (event) => {
          event.target.style.transform = 'rotate(360deg)';
        };
    
        // Function to handle the mouseleave event
        const handleMouseLeave = (event) => {
          event.target.style.transform = 'rotate(0deg)';
        };
    
        // Add event listeners to each element
        rotateElements.forEach((element) => {
          element.addEventListener('mouseenter', handleMouseEnter);
          element.addEventListener('mouseleave', handleMouseLeave);
        });
    
        // Clean up event listeners when the component unmounts
        return () => {
          rotateElements.forEach((element) => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);
    return (
        <div>
            <NavBar/>
            <section className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service rotate" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
            <Footer/>  

        </div>
        
    );
};

export default Services;