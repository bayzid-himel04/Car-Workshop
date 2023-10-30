import { useEffect } from 'react';
import NavBar from '../component/NavBar';
import Footter from '../component/Footter';
import '../style/Home.css';
import Picture1 from '../assets/background.jpg';
import Picture2 from '../assets/image1.jpg';
import Picture3 from '../assets/about-image.jpg';
import Picture4 from '../assets/image3.jpg';




const Home = () => {
    useEffect(() => {
      const slides = document.querySelectorAll('.slide');
      let currentSlide = 0;
  
      function showSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
      }
  
      function nextSlide() {
        showSlide(currentSlide + 1);
      }
  
      function prevSlide() {
        showSlide(currentSlide - 1);
      }
  
      showSlide(currentSlide);
  
      const nextButton = document.querySelector('.next');
      nextButton.addEventListener('click', nextSlide);
  
      const prevButton = document.querySelector('.prev');
      prevButton.addEventListener('click', prevSlide);
    }, []);
  
    return (
      <div>
        <NavBar/>
        <div className="slider">
        <div className="slide">
    <img src={Picture1} alt="Image 1" />
  </div>
  <div className="slide">
    <img src={Picture2}alt="Image 2" />
  </div>
  <div className="slide">
    <img src={Picture3} alt="Image 3" />
  </div>
  <div className="slide">
    <img src={Picture4} alt="Image 4" />
  </div>

          <button className="prev">❮</button>
          <button className="next">❯</button>
        </div>
        <Footter/>
      </div>
    );
  };
  
  export default Home;