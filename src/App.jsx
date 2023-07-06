import "./App.css";
import ChooseBookComp from "./components/ChooseBookComp";
import Header from "./components/ui/Header";
/* import LastDragExample from "./components/LastDragExample"; */
import TabComponent from "./components/ui/TabComponent";

function App() {
  return (
    <>
      {/* <LastDragExample /> */}
      <Header />
      <TabComponent />
      <ChooseBookComp />
    </>
  );
}

export default App;
