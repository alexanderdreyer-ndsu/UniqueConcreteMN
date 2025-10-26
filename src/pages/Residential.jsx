import SubjectDescription from '../components/SubjectDescription';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground';
import driveway6 from '../assets/driveway6.jpg';
import patio2 from '../assets/patio2.jpg';
import driveway7 from '../assets/driveway7.jpg';
import sidewalk2 from '../assets/sidewalk2.jpg';
import driveway2 from '../assets/driveway2.jpg';

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
        { imgPath: patio2 },
        { imgPath: sidewalk2 },
        { imgPath: driveway6 },
        { imgPath: driveway7 }
    ];
    
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Residential Concrete</h1>
                <h2 className="text-3xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Experience Our Expert Craftsmanship</h2>
            </div>

            <div className="flex flex-col justify-center bg-black/90 px-20 h-70 text-white">
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

            <div className="flex w-full justify-evenly bg-[#435D52]/98 text-white items-center p-4">
                <div className="w-2/5">
                    <SubjectDescription subject="What We Offer" paragraph={false} description={services}/>
                </div>
                <img className="w-100 rounded border-4 border-white" src={driveway2}/>
            </div>
        </>
    )
}

export default Residential
