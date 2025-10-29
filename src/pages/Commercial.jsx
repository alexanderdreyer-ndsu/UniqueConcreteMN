import SubjectDescription from '../components/SubjectDescription';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground';
import parkingLot3 from '../assets/parkingLot3.jpg';
import slab3 from '../assets/slab3.jpg';
import floor2 from '../assets/floor2.jpg';
import parkingLot1 from '../assets/parkingLot1.jpg';
import parkingLot4 from '../assets/parkingLot4.jpg';
import VerticalImageGallery from '../components/VerticalImageGallery';
import driveway8 from '../assets/driveway8.jpg';

function Commercial() {
    const services = [
        "Parking Lots",
        "Walkways",
        "Shop Floors",
        "Slabs",
        "Foundation",
        "New Construction",
    ];

    const slidingImages = [
        parkingLot4,
        slab3,
        floor2,
        parkingLot1,
    ];

    const verticalImages = [
        parkingLot3,
        driveway8,
        parkingLot4,
    ];
    
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Commercial Concrete</h1>
                <h2 className="text-3xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Learn More About Our Commercial Services</h2>
            </div>

            <div className="flex flex-col justify-center bg-black/90 px-20 h-130 text-white">
                <SubjectDescription subject="Commercial Concrete" paragraph={true} description="
                    At Unique Concrete, we deliver professional-grade commercial concrete solutions 
                    designed to meet the demands of any business or construction project. From 
                    storefronts and walkways to parking lots and structural foundations, we combine 
                    strength, precision, and visual appeal in every pour. We collaborate 
                    directly with business owners, contractors, and developers to plan and design 
                    layouts that maximize both functionality and aesthetics. With years of industry 
                    experience, we understand the importance of timelines, durability, and long-lasting 
                    performance — providing commercial concrete work that enhances your property's 
                    value and stands the test of time.
                "/>
            </div>

            <div className="flex w-full h-[calc(100vh-6rem)] bg-[#435D52]/90 items-center">
                <div className="bg-gray-300 p-20 h-4/5 flex items-center mx-auto">
                    <SubjectDescription subject="What We Offer" paragraph={false} description={services} />
                </div>

                <div className="h-full">
                    <VerticalImageGallery images={verticalImages} />
                </div>
            </div>
        </>
    )
}

export default Commercial
