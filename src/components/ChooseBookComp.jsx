import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";

const API_KEY = "2c01AsD0su6UPdm0IDH8YJMropHxnEiA";
const baseURL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?published_date=2023-07-01&api-key=${API_KEY}`;

const ChooseBookComp = (props) => {
  const bookCount = 10;
  const [bookList, setBookList] = useState([]);

  const [chosenBookInfo, setChosenBookInfo] = useState([]);
  const [file, setFile] = useState();

  const [uploaderVisibility, setUploaderVisibility] = useState(false);

  const { updateBookInfo } = useContext(BookCoverInfoContext);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setBookList(response.data.results.lists[0].books);
    });
  }, []);

  function setBookInfo(e) {
    let tempStr = e.target.value.split(" - ");
    updateBookInfo(tempStr);
  }

  function imageUpload(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      {uploaderVisibility ? (
        <input type="file" onChange={imageUpload} />
      ) : (
        <div id="bookSelector" className="border-l-gray-100">
          <select
            onChange={setBookInfo}
            id="books"
            className="bg-gray-50 
          border border-gray-300 
          text-gray-900 text-xs 
          rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 
          block px-3 py-1
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      )}

      <Button onClick={(e) => setUploaderVisibility(true)} variant="primary">
        Next
      </Button>
      {/*  
      <img src={file} /> */}
    </>
  );
};

export default ChooseBookComp;
