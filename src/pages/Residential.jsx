import SubjectDescription from '../components/SubjectDescription';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground';
import driveway6 from '../assets/driveway6.jpg';
import patio2 from '../assets/patio2.jpg';
import driveway7 from '../assets/driveway7.jpg';
import sidewalk2 from '../assets/sidewalk2.jpg';
import driveway2 from '../assets/driveway2.jpg';
import VerticalImageGallery from '../components/VerticalImageGallery';

function Residential() {
    const services = [
        "Driveways",
        "Patios",
        "Sidewalks",
        "Aprons",
        "Stairs",
        "Foundation",
        "Flooring",
        "Repairs",
    ];

    const slidingImages = [
        patio2,
        sidewalk2,
        driveway6,
        driveway7,
    ];

    const verticalImages = [
        driveway2,
        sidewalk2,
        patio2,
    ];
    
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Residential Concrete</h1>
                <h2 className="text-3xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Experience Our Expert Craftsmanship</h2>
            </div>

            <div className="flex flex-col justify-center bg-black/90 px-20 h-130 text-white">
                <SubjectDescription subject="Residential Concrete" paragraph={true} description="
                    At Unique Concrete, we specialize in delivering high-quality residential concrete 
                    solutions that combine durability, beauty, and craftsmanship. We don't just pour 
                    concrete — we partner with homeowners to bring their vision to life. We work closely 
                    with you to design and plan custom layouts that perfectly fit your space, style, and 
                    goals. With years of hands-on experience, we provide expert guidance on everything from 
                    functional flow to aesthetic finishes, ensuring your home's concrete features are as 
                    Unique and well-crafted as the home itself.
                "/>
            </div>

            <div className="flex w-full h-screen bg-gray-300/90 items-center text-white">
                <div className="w-3/5 h-4/5">
                    <VerticalImageGallery images={verticalImages} />
                </div>

                <div className="bg-[#435D52] p-15 flex items-center mx-auto">
                    <SubjectDescription subject="Residential Products" paragraph={false} description={services}/>
                </div>
            </div>
        </>
    )
}

export default Residential
