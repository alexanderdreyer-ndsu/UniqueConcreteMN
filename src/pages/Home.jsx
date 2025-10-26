import { Link } from 'react-router-dom';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground.jsx';
import CardImage from '../components/CardImage.jsx';
import SubjectDescription from '../components/SubjectDescription.jsx';
import LocationDisplay from '../components/LocationDisplay.jsx'
import driveway1 from '../assets/driveway1.jpg';
import driveway3 from '../assets/driveway3.jpg';
import patio1 from '../assets/patio1.jpg';
import parkingLot1 from '../assets/parkingLot1.jpg';
import floor1 from '../assets/floor1.jpg';
import patio2 from '../assets/patio2.jpg';
import driveway4 from '../assets/driveway4.jpg';
import slab2 from '../assets/slab2.jpg';
import parkingLot2 from '../assets/parkingLot2.jpg';
import wall1 from '../assets/wall1.jpg';
import 'leaflet/dist/leaflet.css';

const slidingImages = [
    { imgPath: driveway3 },
    { imgPath: driveway4 },
    { imgPath: driveway1 },
    { imgPath: patio1 },
    { imgPath: patio2 },
    { imgPath: parkingLot1 },
    { imgPath: wall1 },
    { imgPath: floor1 },
    { imgPath: slab2 },
    { imgPath: parkingLot2 },
];

const services = [
    "Stamped Concrete",
    "Colored Concrete",
    "Stained Concrete",
    "Exposed Aggregate",
    "Driveways",
    "Walkways",
    "Patios",
    "Stairs",
    "Walls",
    "Foundation",
    "Concrete Sealing",
    "Resurfacing",
    "Concrete Repairs",
    "And More!",
];

const location = [45.05557189149158, -94.06167970055117];

function Home() {
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Unique Concrete MN</h1>
                <h4 className="text-3xl [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Building On Craftsmanship &amp; Integrity</h4>
            </div>
            
            <div className="flex w-full justify-center items-center bg-white justify-evenly bg-white/85 py-10">
                <Link to="/Residential">
                    <CardImage image={driveway3} title="Residential"/>
                </Link>

                <Link to="/Commercial">
                    <CardImage image={parkingLot1} title="Commercial"/>
                </Link>
                    
                <Link to="/Stamping">
                    <CardImage image={patio1} title="Stamping"/>
                </Link>
            </div>


            <div className="flex w-full bg-black/85 items-center justify-evenly text-white py-6">
                <div className="w-1/2">
                    <SubjectDescription subject="Who We Are" paragraph={true} description="
                        Unique Concrete and Stamping LLC delivers high-quality decorative 
                        and functional concrete solutions throughout Howard Lake, Grand Rapids, 
                        and surrounding Minnesota communities. Our team specializes in stamped 
                        concrete, driveways, patios, walkways, and more — combining durability 
                        with exceptional visual appeal. Count on our craftsmanship, experience, 
                        and attention to detail to create beautiful, long-lasting surfaces for 
                        your home or business.
                    "/>
                </div>
                <div className="w-1/3">
                    <SubjectDescription subject="What We Do" paragraph={false} description={services}/>
                </div>
            </div>

            <div className="flex w-full justify-between">
                <div className="w-1/2 p-10 text-white bg-[#435D52]/95">
                    <SubjectDescription subject="Locations" paragraph={true} description="
                        Unique Concrete MN was started in Howard Lake, MN. We are still based out 
                        of Howard Lake, and have expanded to do work out of Grand Rapids, MN.
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
        </>
    )
}

export default Home
