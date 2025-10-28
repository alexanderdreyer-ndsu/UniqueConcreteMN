import { Link } from 'react-router-dom';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground.jsx';
import CardImage from '../components/CardImage.jsx';
import SubjectDescription from '../components/SubjectDescription.jsx';
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
import slab4 from '../assets/slab4.jpg';
import stamping2 from '../assets/stamping2.jpg';
import wall2 from '../assets/wall2.jpg';
import driveway2 from '../assets/driveway2.jpg';
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

function Home() {
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Unique Concrete MN</h1>
                <h4 className="text-3xl [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Building On Craftsmanship &amp; Integrity</h4>
            </div>
            
            <div className="flex w-full h-screen justify-center items-center bg-white justify-evenly bg-white/85 py-13">
                <Link to="/Residential" className="w-1/4">
                    <CardImage image={driveway3} title="Residential"/>
                </Link>

                <Link to="/Commercial" className="w-1/4">
                    <CardImage image={parkingLot1} title="Commercial"/>
                </Link>
                    
                <Link to="/Stamping" className="w-1/4">
                    <CardImage image={patio1} title="Stamping"/>
                </Link>
            </div>


            <div className="flex h-screen w-full bg-black/85 items-center justify-evenly text-white py-20">
                <div className="w-1/2 bg-white/90 text-black font-semibold p-10 rounded">
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

                <img src={slab4} className="w-2/5 rounded border-white border-2 border-white"/>
            </div>

            <div className="flex w-full h-[calc(100vh-7rem)] bg-gray-300/90 items-center text-white">
                <div className="h-full w-3/5 flex px-10 items-center gap-3">
                    <div className="overflow-hidden h-full w-50 transition-all duration-500 hover:w-96">
                        <img src={stamping2} alt="stamping" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="overflow-hidden h-full w-50 transition-all duration-500 hover:w-96">
                        <img src={wall2} alt="driveway" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="overflow-hidden h-full w-50 transition-all duration-500 hover:w-96">
                        <img src={driveway2} alt="patio" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                </div>

                <div className=" bg-[#435D52] p-20">
                    <SubjectDescription subject="What We Do" paragraph={false} description={services}/>
                </div>
            </div>
        </>
    )
}

export default Home
