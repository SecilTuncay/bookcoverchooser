import React, { useContext, useEffect, useState } from "react";
import { BookCoverInfoContext } from "../dataTransfer/BookCoverInfoContext";

function ValueSelector(props) {
  const { updateFontSize, updateLetterSpacing } =
    useContext(BookCoverInfoContext);
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setRange();
  }, []);

  function setRange() {
    if (props.vType === "fSize") {
      setTempMin(12);
      setTempMax(40);
      setTitle("Font Size :");
    } else {
      setTempMin(1);
      setTempMax(20);
      setTitle("Letter Spacing :");
    }
  }
  function setValue(e) {
    props.vType === "fSize"
      ? updateFontSize(e.target.value)
      : updateLetterSpacing(e.target.value);
  }

  return (
    <div>
      <p className="inline-block text-[14px] mr-2">{title} </p>
      <input
        onChange={setValue}
        type="number"
        min={tempMin}
        max={tempMax}
        defaultValue={tempMin}
      />
    </div>
  );
}

export default ValueSelector;
