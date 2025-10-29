import { Link } from 'react-router-dom';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground.jsx';
import CardImage from '../components/CardImage.jsx';
import SubjectDescription from '../components/SubjectDescription.jsx';
import VerticalImageGallery from '../components/VerticalImageGallery.jsx';
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
    driveway3,
    driveway4,
    driveway1,
    patio1,
    patio2,
    parkingLot1,
    wall1,
    floor1,
    slab2,
    parkingLot2,
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

const verticalImages = [
    stamping2,
    wall2,
    driveway2,
];

function Home() {
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Unique Concrete MN</h1>
                <h4 className="text-3xl [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Building On Craftsmanship &amp; Integrity</h4>
            </div>
            
            <div className="flex w-full h-screen justify-center items-center justify-evenly bg-white/85 py-13">
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

            <div className="flex h-screen w-full bg-black/85 text-white items-center justify-evenly py-20">
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

            <div className="flex w-full h-screen bg-gray-300/90 items-center text-white">
                <div className="w-3/5 h-4/5">
                    <VerticalImageGallery images={verticalImages} />
                </div>

                <div className="bg-[#435D52] p-15 flex items-center mx-auto">
                    <SubjectDescription subject="What We Do" paragraph={false} description={services}/>
                </div>
            </div>
        </>
    )
}

export default Home
