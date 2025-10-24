
function CardLink(props) {
    const { image, title } = props


    return (
        <div className="w-full bg-white/90 rounded-xl overflow-hidden hover:scale-105 duration-100 ease-linear">
            <img
                className="w-60 h-auto"
                src={image}
            />
            <h2 className="text-center text-black no-underline text-2xl">{title}</h2>
        </div>
    )
}

export default CardLink