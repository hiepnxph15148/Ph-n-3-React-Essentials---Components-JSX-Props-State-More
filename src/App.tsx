import "./App.css";
import Header from "./Component/Layout/Header";
import Examples from "./Component/Main/Examples";
import Corecopect from "./Component/Main/Corecopect";
function App() {
  

  

  return (
    <>

        <Header />
        <main>
          <h2>Core Component</h2>
          <Corecopect />
          <Examples />
        </main>
    </>
  );
}

export default App;
