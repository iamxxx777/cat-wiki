import Link from "next/link"

const Searchlist = ({ data }) => {
    return (
        <div>
            <ul>
                {data.map((item) => (<li>{}</li>))}
            </ul>
        </div>
    )
}

export default Searchlist
