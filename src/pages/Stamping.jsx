import SubjectDescription from '../components/SubjectDescription';
import SlidingGalleryBackground from '../components/SlidingGalleryBackground';
import stamping1 from '../assets/stamping1.jpg';
import stamping2 from '../assets/stamping2.jpg';
import stamping3 from '../assets/stamping3.jpg';
import stamping4 from '../assets/stamping4.jpg';
import stamping5 from '../assets/stamping5.jpg';


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
        { imgPath: stamping1 },
        { imgPath: stamping2 },
        { imgPath: stamping3 },
        { imgPath: stamping4 },
        { imgPath: stamping5 }
    ];
    
    return (
        <>
            <SlidingGalleryBackground images={slidingImages} />

            <div className="flex flex-col h-screen place-content-center items-center text-white">
                <h1 className="text-6xl font-normal">Custom Concrete</h1>
                <h2 className="text-3xl font-normal">See Our Attention To Detail</h2>
            </div>

            <div className="flex flex-col justify-center bg-black/90 px-20 h-70 text-white">
                <SubjectDescription subject="Custom Concrete" paragraph={true} description="
                    At Unique Concrete, our custom stamped and stained concrete showcases the true 
                    artistry and precision of our team. Each project is crafted with care, ensuring 
                    the designs feel intentional and flow well in your space. From the detailed 
                    stamping to the rich, vibrant finishes, our attention to detail shines through in 
                    every corner. These custom surfaces are not just durable and functional — they're 
                    a reflection of the pride, skill, and dedication we put into every job.
                "/>
            </div>

            <div className="flex w-full justify-evenly bg-[#435D52]/98 text-white items-center p-4">
                <div className="w-2/5">
                    <SubjectDescription subject="What We Offer" paragraph={false} description={services}/>
                </div>
                <img className="w-100 rounded border-4 border-white" src={stamping3}/>
            </div>
        </>
    )
}

export default Stamping