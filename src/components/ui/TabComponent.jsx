import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";
import { GrEdit } from "react-icons/gr";
import { FaFileDownload } from "react-icons/fa";
import ChooseBookComp from "../ChooseBookComp";

const TabComponent = () => {
  return (
    <div className="px-8 py-4 container">
      <Tabs defaultActiveKey="choosebook">
        <Tab
          eventKey="choosebook"
          title={
            <div className="flex gap-2 items-center text-xs">
              <GiBookCover /> Choose Book
            </div>
          }
        >
          <div className="bg-white">
            <h4>Choose Book</h4>
            <ChooseBookComp />
          </div>
        </Tab>
        <Tab
          eventKey="editcover"
          title={
            <div className="flex gap-2 items-center text-xs">
              <GrEdit /> Edit Cover
            </div>
          }
        >
          <div className="bg-white">
            <h4>Edit Cover</h4>
          </div>
        </Tab>
        <Tab
          eventKey="download"
          title={
            <div className="flex gap-2 items-center text-xs">
              <FaFileDownload /> Preview & Download
            </div>
          }
        >
          <div className="bg-white">
            <h4>Preview & Download</h4>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabComponent;
