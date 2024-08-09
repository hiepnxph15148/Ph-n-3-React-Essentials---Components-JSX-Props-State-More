import {useState} from "react";
import "./App.css";
import componentImage from "../src/assets/react.svg";
import { CORE_CONCEPTS } from '../src/data';  
import Header from "./Component/Layout/Header";

interface CoreComponent
{
  title: string,
  description: string,
  image:string
}

function CoreContempt({title,description,image} : CoreComponent) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <main>
          <h2>Core Component</h2>
          <selection id="core-concepts">
            <ul>
              {CORE_CONCEPTS.map((concept,index) =>(
                 <CoreContempt key={index} {...concept} />
              ))}
            </ul>
          </selection>
        </main>
      </div>
    </>
  );
}

export default App;
