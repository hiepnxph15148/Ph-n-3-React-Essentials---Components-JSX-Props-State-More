import {useState} from "react";
import "./App.css";
import componentImage from "../src/assets/react.svg";
import { CORE_CONCEPTS } from './main';  
import Header from "./Component/Layout/Header";
function CoreContempt(props: Props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
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
              <CoreContempt
                title={CORE_CONCEPTS[0].title}
                description="A component is a reusable building block in React."
                image={componentImage}
              />
              <CoreContempt
                title="Component"
                description="A component is a reusable building block in React."
                image={componentImage}
              />{" "}
              <CoreContempt
                title="Component"
                description="A component is a reusable building block in React."
                image={componentImage}
              />{" "}
              <CoreContempt
                title="Component"
                description="A component is a reusable building block in React."
                image={componentImage}
              />
            </ul>
          </selection>
        </main>
      </div>
    </>
  );
}

export default App;
