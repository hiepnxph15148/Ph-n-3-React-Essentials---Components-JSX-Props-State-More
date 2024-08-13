import './CoreContempt.css'

function CoreContempt({title,description,image} : CoreComponent) {

  return (
      <li>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }
  export default CoreContempt;
