import { createContext, useContext, useState } from "react";

export const BookCoverInfoContext = createContext({
  selectedBook: null,
  updateFontSize: () => {},
  updateFontColor: () => {},
  updateLetterSpacing: () => {},
  updateImgURL: () => {},
  changeTab: () => {},
  setScreenShot: () => {},
});
const SELECTED_BOOK = {
  bookInfo: [],
  fontsize: 12,
  fontcolor: "red",
  letterspacing: 1,
  imgURL: "",
  tabNum: "1",
  screenShot: "",
};

export function BookCoverInfoContextProvider({ children }) {
  const [selectedBook, setSelectedBook] = useState(SELECTED_BOOK);
  function updateBookInfo(tempBookInfo) {
    setSelectedBook({ ...selectedBook, bookInfo: tempBookInfo });
  }
  function updateFontSize(tempFontSize) {
    setSelectedBook({ ...selectedBook, fontsize: tempFontSize });
  }
  function updateFontColor(tempFontColor) {
    setSelectedBook({ ...selectedBook, fontcolor: tempFontColor });
  }
  function updateLetterSpacing(tempLetterSpacing) {
    setSelectedBook({ ...selectedBook, letterspacing: tempLetterSpacing });
  }
  function updateImgURL(tempImgURL) {
    setSelectedBook({ ...selectedBook, imgURL: tempImgURL });
  }
  function changeTab(tempTabNum) {
    setSelectedBook({ ...selectedBook, tabNum: tempTabNum });
  }
  function setScreenShot(tempScreenShot) {
    setSelectedBook({ ...selectedBook, screenShot: tempScreenShot });
  }
  return (
    <BookCoverInfoContext.Provider
      value={{
        selectedBook,
        updateFontSize,
        updateFontColor,
        updateBookInfo,
        updateLetterSpacing,
        updateImgURL,
        changeTab,
        setScreenShot,
      }}
    >
      {children}
    </BookCoverInfoContext.Provider>
  );
}

/* export function useBookInfoContext() {
  const { bookname, authorname } = useContext(BookCoverInfoContext);
  return { bookname, authorname };
} */
