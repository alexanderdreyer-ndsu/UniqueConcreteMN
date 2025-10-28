import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Residential from './pages/Residential.jsx';
import Commercial from './pages/Commercial.jsx';
import Stamping from './pages/Stamping.jsx';
import Contact from './pages/Contact.jsx';
import Logo from './assets/LogoSimple.JPG';
import ScrollToTop from './components/ScrollToTop.jsx';
import LocationDisplay from './components/LocationDisplay.jsx';
import SubjectDescription from './components/SubjectDescription.jsx';
import './App.css';

function App() {

  const socialMedia = [
    { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png', link: 'https://www.facebook.com/Uniqueconcretemn' }
  ];
      
  const navItems = [
    { label: 'Home', href: '/'},
    { label: 'Services', dropdown: [
      { label: 'Residential', href: '/Residential'},
      { label: 'Commercial', href: '/Commercial'},
      { label: 'Stamping', href: '/Stamping'},
    ]},
    { label: 'Gallery', href: 'https://www.facebook.com/Uniqueconcretemn/photos'},
    { label: 'Contact', href: '/Contact'},
  ];
  
  const contactInfo = {
    phone: 'Call For An Estimate: (612)231-9612',
    email: 'uniqueconcretemn@gmail.com',
  };

  const location = [45.05557189149158, -94.06167970055117];

  return (
    <Router>
      <ScrollToTop />

      <div className="fixed top-0 left-0 w-full z-2000">
        <Header logoImgPath={Logo} navItems={navItems} contactInfo={contactInfo}/>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Residential" element={<Residential />}/>
          <Route path="/Commercial" element={<Commercial />}/>
          <Route path="/Stamping" element={<Stamping />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>

      <div className="flex w-full justify-between">
        <div className="w-1/2 p-10 text-white bg-[#435D52]/95">
            <SubjectDescription subject="Locations" paragraph={true} description="
              Unique Concrete MN was started in Howard Lake, MN. We are based out 
              of Howard Lake and have expanded to do work out of Grand Rapids, MN.
              We service both surrounding areas.
              "/>
            <br />
            <br />
            <SubjectDescription subject="Main Address" paragraph={true} description="1020 2nd Ave , Howard Lake, MN, US, 55349" />
        </div>  

        <div className="w-1/2">
          <LocationDisplay location={location} description="Unique Concrete MN"/>
        </div>
      </div>

      <div className="w-full h-70 flex flex-col items-center bg-[#3c3c3c]">
        <Footer text="2025 Unique Concrete MN | Created by © 2025 Alec Dreyer" socialMedia={socialMedia}/>
      </div>
    </Router>
  );
}

export default App
