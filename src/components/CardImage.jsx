
function CardLink(props) {
    const { image, title } = props


    return (
        <div className="w-full bg-white rounded-xl overflow-hidden hover:scale-103 duration-100 ease-linear hover:border-3">
            <img
                className="w-full h-auto"
                src={image}
            />
            <h2 className="text-center text-black no-underline text-4xl py-4 font-semibold">{title}</h2>
        </div>
    )
}

export default CardLink