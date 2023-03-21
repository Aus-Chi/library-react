import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Rating({rating}){
    return(
        <>
        {
        new Array(Math.floor(rating)).fill(0).map((rating, index) => {
               return <FontAwesomeIcon icon="star" className="star" key={index} />
            })
        }
            {!Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" className="star" />}
        </>
    )
}

export default Rating