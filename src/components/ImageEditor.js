import React, { useEffect, useState, useRef, useContext } from "react";
import { useScreenshot, clearScreenshot } from "use-react-screenshot";
import { Button } from "react-bootstrap";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";
import { Draggable } from "@syncfusion/ej2-base";
import ImagePreview from "./ImagePreview";

function ImageEditor(props) {
  const { bookInfo, fontcolor, fontsize, letterspacing, imgURL } =
    props.imageInfo;
  const { setScreenShot } = useContext(BookCoverInfoContext);
  //const [prevRef, setPrevRef] = useState(null);

  const ref = useRef();

  const [screenShot, takeScreenshot] = useScreenshot();

  const [chosenTextArea, setChosenTextArea] = useState("bName");
  const [chosenTextAreaClass, setChosenTextAreaClass] = useState(
    "border-2 border-red-400 border-dotted"
  );

  const [bookNameTextInfo, setBookNameTextInfo] = useState({
    bookNameFontColor: "blue",
    bookNameFontSize: "12px",
    bookNameLetterSpacing: "1",
  });

  const [authNameTextInfo, setAuthNameTextInfo] = useState({
    authNameFontColor: "red",
    authNameFontSize: "12px",
    authNameLetterSpacing: "1",
  });

  const getImage = () => {
    setChosenTextAreaClass("");
    takeScreenshot(ref.current);
    setScreenShot(ref.current);

    /* setPrevRef(String(ref.current));

    if (prevRef !== String(ref.current)) {
      console.log("aynı");
    } else {
      console.log("değişmiş");
      takeScreenshot(ref.current);
      setScreenShot(ref.current);
    } */
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
      dragStart: function (e) {
        // console.log("değiş");
      },
      drag: function (e) {
        setChosenTextArea(e.element.id);
      },
    });
    let authorNameDrag = new Draggable(document.getElementById("authName"), {
      clone: false,
      dragArea: "#dragArea",
      drag: function (e) {
        setChosenTextArea(e.element.id);
      },
    });
  }, [fontcolor, fontsize, letterspacing]);

  return (
    <div className="m-6">
      <div
        id="dragArea"
        className="w-[450px] h-[600px] p-3 border-2 border-slate-600"
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
            id="bName"
            className={chosenTextArea === "bName" ? chosenTextAreaClass : ""}
            style={{
              color: bookNameTextInfo.bookNameFontColor,
              fontSize: `${bookNameTextInfo.bookNameFontSize + "px"}`,
              letterSpacing: `${bookNameTextInfo.bookNameLetterSpacing + "px"}`,
            }}
          >
            {bookInfo[0]}
          </div>
          <div
            className={chosenTextArea === "authName" ? chosenTextAreaClass : ""}
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
        <Button className="relative m-3" onClick={getImage}>
          Save Cover Image
        </Button>
      </div>
    </div>
  );
}

export default ImageEditor;
