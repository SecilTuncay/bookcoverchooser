import { createContext, useContext, useState } from "react";

export const BookCoverInfoContext = createContext({
  selectedBook: null,
  updateFontSize: () => {},
  updateFontColor: () => {},
  updateLetterSpacing: () => {},
  updateImgURL: () => {},
});
const SELECTED_BOOK = {
  bookInfo: ["seçil"],
  fontsize: "12px",
  fontcolor: "red",
  letterspacing: "1",
  imgURL: "",
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
  return (
    <BookCoverInfoContext.Provider
      value={{
        selectedBook,
        updateFontSize,
        updateFontColor,
        updateBookInfo,
        updateLetterSpacing,
        updateImgURL,
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
