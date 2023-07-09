import React, { useEffect, useState, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import ChooseBookComp from "../ChooseBookComp";
import { BookCoverInfoContext } from "../../dataTransfer/BookCoverInfoContext";
import CoverEditor from "../CoverEditor";
import ImagePreview from "../ImagePreview";

const TabComponent = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const { selectedBook } = useContext(BookCoverInfoContext);
  const { tabNum, screenShot } = selectedBook;

  useEffect(() => {
    setCurrentTab(tabNum);
  }, [tabNum, screenShot]);

  return (
    <div className="px-8 py-4 mt-4 container bg-slate-100 rounded-xl border border-stone-900 drop-shadow-4xl">
      <Tabs
        defaultActiveKey="1"
        activeKey={currentTab}
        onSelect={(key) => setCurrentTab(key)}
      >
        <Tab
          eventKey="1"
          title={
            <div className="flex gap-2 items-center text-xs ">
              <GiBookCover /> Choose Book
            </div>
          }
        >
          <ChooseBookComp />
        </Tab>
        <Tab
          eventKey="2"
          title={
            <div className="flex gap-2 items-center text-xs ">
              <FiEdit /> Edit Cover
            </div>
          }
        >
          <CoverEditor />
        </Tab>
        <Tab
          eventKey="3"
          title={
            <div className="flex gap-2 items-center text-xs ">
              <FaFileDownload /> Preview & Download
            </div>
          }
        >
          <ImagePreview />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabComponent;
