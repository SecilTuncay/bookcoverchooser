import React, { useContext, useEffect, useRef } from "react";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { Button } from "react-bootstrap";

function ImagePreview() {
  const imageRef = useRef(null);
  const { selectedBook } = useContext(BookCoverInfoContext);
  const { screenShot } = selectedBook;

  const [imageSS, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const [tempScreenShot, takeTempScreenshot] = useScreenshot();

  useEffect(() => {
    if (screenShot) {
      takeTempScreenshot(screenShot);
    }
  }, [screenShot]);

  const download = (imageSS, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = imageSS;
    a.download = createFileName(extension, name);
    a.click();
  };
  const downloadScreenshot = () =>
    takeScreenShot(imageRef.current).then(download);
  return (
    <div>
      <h4>Preview & Download</h4>
      {screenShot && (
        <div className="flex justify-center">
          <img ref={imageRef} src={tempScreenShot} alt={"ScreenShot"} />
        </div>
      )}
      <div className="flex justify-center my-3">
        <Button onClick={downloadScreenshot} className="relative m-3">
          Download
        </Button>
      </div>
    </div>
  );
}

export default ImagePreview;
