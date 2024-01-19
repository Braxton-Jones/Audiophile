import { Link } from "react-router-dom"
export default function FancyButton({title, pageTo}) {

    return(
    <div className="fancy-button-container ff-sanserif">
        <Link to={pageTo}>
            {title}
        </Link>
    </div>
    )
}