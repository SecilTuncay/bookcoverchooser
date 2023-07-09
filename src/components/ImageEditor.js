import React, { useEffect, useState, useRef, useContext } from "react";
import { useScreenshot } from "use-react-screenshot";
import { Button } from "react-bootstrap";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";
import { Draggable } from "@syncfusion/ej2-base";

function ImageEditor(props) {
  const { bookInfo, fontcolor, fontsize, letterspacing, imgURL } =
    props.imageInfo;
  const { setScreenShot, changeTab } = useContext(BookCoverInfoContext);

  const ref = useRef(null);

  const [screenShot, takeScreenshot] = useScreenshot();
  const [chosenTextArea, setChosenTextArea] = useState("bName");
  const [bookNameTextInfo, setBookNameTextInfo] = useState({
    bookNameFontColor: "white",
    bookNameFontSize: "12px",
    bookNameLetterSpacing: "1",
  });
  const [authNameTextInfo, setAuthNameTextInfo] = useState({
    authNameFontColor: "white",
    authNameFontSize: "12px",
    authNameLetterSpacing: "1",
  });

  const getImage = () => {
    takeScreenshot(ref.current);
    setScreenShot(ref.current);
  };

  useEffect(() => {
    if (chosenTextArea === "bName") {
      let updatedValue = {};
      updatedValue = {
        bookNameFontColor: fontcolor,
        bookNameFontSize: fontsize,
        bookNameLetterSpacing: letterspacing,
      };
      setBookNameTextInfo((bookNameTextInfo) => ({
        ...bookNameTextInfo,
        ...updatedValue,
      }));
    } else {
      let updatedValue = {};
      updatedValue = {
        authNameFontColor: fontcolor,
        authNameFontSize: fontsize,
        authNameLetterSpacing: letterspacing,
      };
      setAuthNameTextInfo((authNameTextInfo) => ({
        ...authNameTextInfo,
        ...updatedValue,
      }));
    }
    let bookNameDrag = new Draggable(document.getElementById("bName"), {
      clone: false,
      dragArea: "#dragArea",
    });
    let authorNameDrag = new Draggable(document.getElementById("authName"), {
      clone: false,
      dragArea: "#dragArea",
    });
  }, [fontcolor, fontsize, letterspacing]);

  function imageInfoClick(e) {
    setChosenTextArea(e.target.id);
  }
  function saveBtnHandler() {
    getImage();
  }

  return (
    <div className="m-6">
      <div
        id="dragArea"
        className="w-[450px] h-[600px] p-3"
        ref={ref}
        style={{
          backgroundImage: `url( ${imgURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div
            onClick={imageInfoClick}
            id="bName"
            style={{
              color: bookNameTextInfo.bookNameFontColor,
              fontSize: `${bookNameTextInfo.bookNameFontSize + "px"}`,
              letterSpacing: `${bookNameTextInfo.bookNameLetterSpacing + "px"}`,
            }}
          >
            {bookInfo[0]}
          </div>
          <div
            className="mb-6"
            onClick={imageInfoClick}
            id="authName"
            style={{
              color: authNameTextInfo.authNameFontColor,
              fontSize: `${authNameTextInfo.authNameFontSize + "px"}`,
              letterSpacing: `${authNameTextInfo.authNameLetterSpacing + "px"}`,
            }}
          >
            {bookInfo[1]}
          </div>
        </div>
      </div>

      <div className="flex justify-center my-3">
        <Button className="relative m-3" onClick={saveBtnHandler}>
          Save Cover Image
        </Button>
      </div>
    </div>
  );
}

export default ImageEditor;
