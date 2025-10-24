import SocialMediaLink from './SocialMediaLink.jsx';

function Footer(props) {
    const { text, socialMedia } = props;

    return (
        <footer className="flex flex-col items-center h-full w-full justify-evenly">
            <p>{text}</p>
            {socialMedia.map((item, index) => (
                <div key={index}>
                    <SocialMediaLink socialMedia={item} />
                </div>
            ))}
        </footer>
    )
}

export default Footer