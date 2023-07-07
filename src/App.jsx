import "./App.css";
import CoverEditor from "./components/CoverEditor";
import Header from "./components/ui/Header";
import TabComponent from "./components/ui/TabComponent";
import { BookCoverInfoContextProvider } from "./dataTransfer/BookCoverInfoContext";

function App() {
  return (
    <>
      <Header />
      <BookCoverInfoContextProvider>
        <TabComponent />
        <CoverEditor />
      </BookCoverInfoContextProvider>
    </>
  );
}

export default App;
