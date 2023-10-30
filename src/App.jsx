import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Blogs from './pages/Blogs';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';
const App = () => {
  return (
      <div>
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/blog" element={<Blogs/>}/>
              <Route path="/career" element={<Career/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/reviews" element={<Reviews/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
      </div>
  );
};
export default App
