import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Highlight({icon, heading, para}) {
  return (
    <>
     
        <div className="highlight">
          <FontAwesomeIcon icon={icon} className="icon__class" />
          <div className="highlight__heading">{heading}</div>
          <p className="highlight__para">{para}</p>
        </div>
      
    </>
  );
}

export default Highlight
