import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Faq() {
  const [collapse, setCollapse] = useState([false, 0]);
  return (
    <>
      <div className="home-team flex-column w-100 p-sm-auto p-0 m-sm-auto m-0">
        {/* <hr /> */}
        <div>
          <h1>ROADMAP</h1>
        </div>
        <div className="w-100">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2008 - 2010"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q1 2022</h3>
              <ul>
                <li> Mint 2,222 Big Time Bikers</li>
                <li>List on secondary marketplaces</li>
                <li>
                  We donate 5% of the initial sales to a charity chosen by the
                  community
                </li>
                <li>
                  We develop and airdrop 3D bikers to randomly selected holders
                </li>
                <li>
                  We start development for the Big Time Bikers game & the
                  secondary collection
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q2 2022</h3>

              <ul>
                <li>Mint for secondary collection</li>
                <li>Development of profit sharing each quarter begins</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2006 - 2008"
              contentStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              iconStyle={{ background: "rgb(81, 188, 106)", color: "#fff" }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Q3+ 2022</h3>

              <ul>
                <li>Roadmap 3.0 begins</li>
                <li>Profit sharing each quarter begins</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Faq;
