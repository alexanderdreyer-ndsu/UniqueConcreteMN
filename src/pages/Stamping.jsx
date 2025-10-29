import SubjectDescription from '../components/SubjectDescription';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground';
import stamping1 from '../assets/stamping1.jpg';
import stamping2 from '../assets/stamping2.jpg';
import stamping3 from '../assets/stamping3.jpg';
import stamping4 from '../assets/stamping4.jpg';
import stamping5 from '../assets/stamping5.jpg';
import VerticalImageGallery from '../components/VerticalImageGallery';

function Stamping() {
    const services = [
        "Stamping",
        "Staining",
        "Colored Concrete",
        "Wood Finish",
        "Ashlar Slate",
        "Flagstone",
        "Brick",
        "Seamless",
    ];

    const slidingImages = [
        stamping1,
        stamping2,
        stamping3,
        stamping4,
        stamping5,
    ];

    const verticalImages = [
        stamping3,
        stamping4,
        stamping5,
    ];
    
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Custom Concrete</h1>
                <h2 className="text-3xl font-normal [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">See Our Attention To Detail</h2>
            </div>

            <div className="flex flex-col justify-center bg-black/90 px-20 h-130 text-white">
                <SubjectDescription subject="Custom Concrete" paragraph={true} description="
                    At Unique Concrete, our custom stamped and stained concrete showcases the true 
                    artistry and precision of our team. Each project is crafted with care, ensuring 
                    the designs feel intentional and flow well in your space. From the detailed 
                    stamping to the rich, vibrant finishes, our attention to detail shines through in 
                    every corner. These custom surfaces are not just durable and functional — they're 
                    a reflection of the pride, skill, and dedication we put into every job.
                "/>
            </div>

            <div className="flex w-full h-screen bg-gray-300/90 items-center text-white">
                <div className="w-3/5 h-4/5">
                    <VerticalImageGallery images={verticalImages} />
                </div>

                <div className="bg-[#435D52] p-15 flex items-center mx-auto">
                    <SubjectDescription subject="Custom Products" paragraph={false} description={services}/>
                </div>
            </div>
        </>
    )
}

export default Stamping
