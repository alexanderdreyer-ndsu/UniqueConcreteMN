
function SocialMediaLink({ socialMedia }) {
    return (
        <a href={socialMedia.link} target="_blank" rel="noopener noreferrer">
            <img src={socialMedia.image} className="w-10"/>
        </a>
    )
}

export default SocialMediaLink