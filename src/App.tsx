import { useState } from "react";
import "./App.css";
import componentImage from "../src/assets/react.svg";
import { CORE_CONCEPTS, EXAMPLES } from "../src/data";
import Header from "./Component/Layout/Header";
import CoreContempt from "./Component/Main/CoreContempt";
import Tabbutton from "./Component/Main/Tabbutton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectdButton) {
    setSelectedTopic(selectdButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <div>
        <Header />
        <main>
          <h2>Core Component</h2>
          <selection id="core-concepts">
            <ul>
              {CORE_CONCEPTS.map((concept, index) => (
                <CoreContempt key={index} {...concept} />
              ))}
            </ul>
          </selection>
          <selection id="examples">
            <h2>Examples</h2>
            <menu>
              <Tabbutton
                isSelected={selectedTopic === "components"}
                onSelect={() => handleSelect("components")}
              >
                Components
              </Tabbutton>
              <Tabbutton
                isSelected={selectedTopic === "jsx"}
                onSelect={() => handleSelect("jsx")}
              >
                Jsx
              </Tabbutton>
              <Tabbutton
                isSelected={selectedTopic === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </Tabbutton>
              <Tabbutton
                isSelected={selectedTopic === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </Tabbutton>
            </menu>
            {tabContent}
          </selection>
        </main>
      </div>
    </>
  );
}

export default App;
