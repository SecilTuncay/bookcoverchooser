import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "2c01AsD0su6UPdm0IDH8YJMropHxnEiA";
const baseURL = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?published_date=2023-07-01&api-key=${API_KEY}`;

function ChooseBookComp() {
  const [bookList, setBookList] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      console.log(response.data.results.lists[0].books);
      setBookList(response.data);
    });
  }, []);
  return (
    <>
      <h4>choose Book</h4>
    </>
  );
}

export default ChooseBookComp;
