import { useState, useEffect } from 'react';

function SlidingGalleryBackground(props) {
    const { images } = props;

    const [ imageIndex, setImageIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(index => (index + 1) % images.length)
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10">
            {images.map((item, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
                        index === imageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${item.imgPath})` }}
                />
            ))}
        </div>
    );
}

export default SlidingGalleryBackground