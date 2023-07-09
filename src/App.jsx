import "./App.css";

import Header from "./components/ui/Header";
import TabComponent from "./components/ui/TabComponent";
import LastDragExample from "./components/LastDragExample";
import { BookCoverInfoContextProvider } from "./dataTransfer/BookCoverInfoContext";

function App() {
  return (
    <>
      <Header />
      <BookCoverInfoContextProvider>
        <TabComponent />
      </BookCoverInfoContextProvider>
    </>
  );
}

export default App;
/*
TODOLIST

2- üstüste gelmeyecek
3- back /next buttonları / disabled sonra
4- download image
1- textarealar draggable olacak
*/
