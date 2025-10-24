
function SubjectDescription(props) {
    const { subject, paragraph, description } = props

    return (
        <div className="flex flex-col items-center justify-content-center">
            <h3 className="text-3xl">{subject}</h3>
            <br />
            {paragraph === true ? <p>{description}</p> :
                <ul>
                    {description.map((item, index) => (
                        <li 
                            key={index}
                            className="flex items-center before:content-['⚙'] before:mr-2"
                        >{item}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default SubjectDescription