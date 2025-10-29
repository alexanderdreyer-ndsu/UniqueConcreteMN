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
import CallToAction from './components/CallToAction.jsx';
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

  const locationsList = [
    "Howard Lake, MN",
    "Grand Rapids, MN",
    "Service All Surrounding Areas",
  ]

  const location = [45.05557189149158, -94.06167970055117];

  return (
    <Router>
      <ScrollToTop />

      <div className="top-0 md:fixed left-0 w-full z-2000">
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

      <div className="bg-white text-4xl p-5">
        <CallToAction call="Call For An Estimate" action="(612)231-9612"/>
      </div>

      <div className="flex flex-col w-full md:h-screen">
        <div className="flex flex-col md:flex-row h-auto md:h-1/2 p-6 md:p-10 text-white bg-gray-400 justify-center md:justify-around items-center gap-6 md:gap-0">
          <div className="w-full md:w-1/2 bg-[#435D52] p-6 md:p-10 rounded-lg shadow-lg">
            <SubjectDescription subject="Locations" paragraph={false} description={locationsList}/>
          </div>

          <div className="w-full md:w-auto text-center md:text-left bg-[#435D52] md:bg-transparent p-4 md:p-0 rounded-lg shadow-lg md:shadow-none">
            <SubjectDescription subject="Main Address" paragraph={true} description="1020 2nd Ave, Howard Lake, MN, US, 55349"/>
          </div>
        </div>

        <div className="w-full h-50 md:h-full">
          <LocationDisplay location={location} description="Unique Concrete MN" />
        </div>
      </div>

      <div className="w-full h-60 bg-[#3c3c3c] text-center py-6 px-4">
        <Footer text="2025 Unique Concrete MN | Created by © 2025 Alec Dreyer" socialMedia={socialMedia}/>
      </div>
    </Router>
  );
}

export default App
