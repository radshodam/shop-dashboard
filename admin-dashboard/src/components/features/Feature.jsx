import React from "react";
import { MdArrowUpward, MdOutlineArrowDownward } from "react-icons/md";

import "./feature.css";

export default function Feature() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -11.4 <MdOutlineArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -1.4 <MdOutlineArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            +2.4 <MdArrowUpward className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
  );
}
