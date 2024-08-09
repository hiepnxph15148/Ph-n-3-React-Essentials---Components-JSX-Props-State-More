import reactImage from "../../assets/react.svg";
const reactDescriptions = ["Fundamentals", "Crucials", "Core"];

function getRadomInt(max: number) {
  return Math.floor(Math.random() * (max + 1));
}
const description = reactDescriptions[getRadomInt(2)];



function Header() {
  return (
    <>
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
     
    </>
  );
}

export default Header;
