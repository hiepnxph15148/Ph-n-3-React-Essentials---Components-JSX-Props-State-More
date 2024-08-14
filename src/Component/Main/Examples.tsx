import { useState } from "react";
import Tabbutton from './Tabbutton'
import { EXAMPLES } from "../../data";
import Section from "./Section";
import Tab from "./Tab";



// eslint-disable-next-line react-hooks/rules-of-hooks

const Examples = () => {
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
        <Section title="Examples" id="examples">
            <Tab
            button={
                <>
                  <Tabbutton
                      isSelected={selectedTopic === "components"}
                      onClick={() => handleSelect("components")}
                  >
                      Components
                  </Tabbutton>
                  <Tabbutton
                      isSelected={selectedTopic === "jsx"}
                      onClick={() => handleSelect("jsx")}
                  >
                      Jsx
                  </Tabbutton>
                  <Tabbutton
                      isSelected={selectedTopic === "props"}
                      onClick={() => handleSelect("props")}
                  >
                      Props
                  </Tabbutton>
                  <Tabbutton
                      isSelected={selectedTopic === "state"}
                      onClick={() => handleSelect("state")}
                  >
                      State
                  </Tabbutton>
              </>} children={undefined}>
            </Tab>
            {tabContent}
            </Section>
    </>
  )
}

export default Examples