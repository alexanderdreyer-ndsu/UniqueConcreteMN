
function VerticalImageGallery({ images }) {
    return (
        <div className="h-full w-full flex flex-col md:flex-row px-5 items-center gap-3">
            {images.map((image, key) => 
                <div key={key} className="overflow-hidden h-full w-full md:w-50 transition-all duration-500 hover:w-96">
                    <img src={image} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
            )}
        </div>
    )
}

export default VerticalImageGallery