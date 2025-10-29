
function CardLink({ image, title }) {

    return (
        <div className="w-full border-4 outline outline-4 outline-[#435D52] bg-cover bg-center hover:scale-105 duration-100 ease-linear"
            style={{ backgroundImage: `url(${image}` }}
        >
            <div className="w-full h-full bg-black/60 hover:bg-black/20 duration-200">
                <h2 className="text-center text-white no-underline text-4xl py-4 font-semibold">{title}</h2>
            </div>
        </div>
    )
}

export default CardLink