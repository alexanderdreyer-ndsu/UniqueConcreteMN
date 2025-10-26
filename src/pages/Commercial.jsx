import SubjectDescription from '../components/SubjectDescription';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground';
import parkingLot3 from '../assets/parkingLot3.jpg';
import slab3 from '../assets/slab3.jpg';
import floor2 from '../assets/floor2.jpg';
import parkingLot1 from '../assets/parkingLot1.jpg';
import parkingLot4 from '../assets/parkingLot4.jpg';

function Commercial() {
    const services = [
        "Parking Lots",
        "Walkways",
        "Shop Floors",
        "Slabs",
        "Foundation",
    ];

    const slidingImages = [
        { imgPath: parkingLot4 },
        { imgPath: slab3 },
        { imgPath: floor2 },
        { imgPath: parkingLot1 },
    ];
    
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Commercial Concrete</h1>
                <h2 className="text-3xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Learn More About Our Commercial Services</h2>
            </div>

            <div className="flex flex-col justify-center bg-black/90 px-20 h-70 text-white">
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

            <div className="flex w-full justify-evenly bg-[#435D52]/98 text-white items-center p-4">
                <div className="w-2/5">
                    <SubjectDescription subject="What We Offer" paragraph={false} description={services}/>
                </div>
                <img className="w-100 rounded border-4 border-white" src={parkingLot3}/>
            </div>
        </>
    )
}

export default Commercial
