
function CallToAction({ call, action }) {
    return(
        <div className="flex flex-col justify-evenly items-center md:flex-row">
            <h1>{call}</h1>
            <h1 className="border-4 p-8">{action}</h1>
        </div>
    )
}

export default CallToAction