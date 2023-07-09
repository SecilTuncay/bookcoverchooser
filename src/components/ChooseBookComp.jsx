import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";

const API_KEY = "2c01AsD0su6UPdm0IDH8YJMropHxnEiA";
const baseURL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?published_date=2023-07-01&api-key=${API_KEY}`;

const ChooseBookComp = (props) => {
  const bookCount = 10;
  const [bookList, setBookList] = useState([]);
  //const [nextDisable, setNextDisable] = useState(true);
  // const [completeTwo, setCompleteTwo] = useState([0, 0]);
  const { updateBookInfo, updateImgURL, changeTab } =
    useContext(BookCoverInfoContext);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setBookList(response.data.results.lists[0].books);
    });
  }, []);

  function setBookInfo(e) {
    let tempStr = e.target.value.split(" - ");
    updateBookInfo(tempStr);
    // setCompleteTwo([1, ...completeTwo]);
    // debugger;
  }

  function imageUpload(e) {
    let reader = new FileReader(),
      file = e.target.files[0];

    reader.onloadend = function () {
      updateImgURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex flex-col justify-center  p-6">
      <p className="text-blue-950">Choose Your Book & Image </p>
      <div id="bookSelector" className="flex  my-3">
        <select
          onChange={setBookInfo}
          id="books"
          className="bg-gray-50 
          border border-blue-800
          text-gray-900 text-xs 
          rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 
          block px-3 py-1
          
          dark:focus:ring-blue-500 dark:focus:border-blue-500
          text-[14px]"
        >
          <option key="blankKey" hidden value>
            Please select your book
          </option>
          {bookList
            .filter((book, index) => index < bookCount)
            .map((book, index) => {
              return (
                <option key={index}>
                  {book.title} - {book.author}
                </option>
              );
            })}
        </select>
      </div>
      <div className="border-l-gray-100 flex  my-3">
        <input
          className="text-[14px] bg-gray-50
          border border-blue-500 rounded-lg "
          type="file"
          onChange={imageUpload}
        />
      </div>
      <div className="flex justify-end my-3">
        <Button
          /* disabled={nextDisable} */ onClick={(e) => {
            changeTab(2);
          }}
          variant="primary"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ChooseBookComp;
