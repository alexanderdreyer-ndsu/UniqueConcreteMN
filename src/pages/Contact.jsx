import SubjectDescription from "../components/SubjectDescription"
import Logo from '../assets/Logo.jpg';
import SocialMediaLink from "../components/SocialMediaLink.jsx";

function Contact() {
    const businessHours = [
        "Sunday: Closed",
        "Monday: 8am-7pm",
        "Tuesday: 8am-7pm",
        "Wednesday: 8am-7pm",
        "Thursday: 8am-7pm",
        "Friday: 8am-7pm",
        "Saturday: Closed",
    ];

    const socialMedia = { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png', link: 'https://www.facebook.com/Uniqueconcretemn' };

    return (
        <>
            <div className="flex flex-col gap-4 md:flex-row w-full md:mt-27 py-5 justify-evenly items-center bg-[#435D52] text-white font-large">
                <SubjectDescription subject="By Phone" paragraph={true} description="(612)231-9612"/>
                <SubjectDescription subject="By Email" paragraph={true} description="uniqueconcretemn@gmail.com"/>
                <SocialMediaLink socialMedia={socialMedia}/>
                <img src={Logo} className="place-self-center w-96 rounded"/>
            </div>

            <div className="py-5 bg-gray-200">
                <SubjectDescription subject="Business Hours" paragraph={false} description={businessHours}/>
            </div>
        </>
    )
}

export default Contact