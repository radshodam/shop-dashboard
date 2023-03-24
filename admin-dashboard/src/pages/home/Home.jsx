import React from "react";
import Chart from "../../components/chart/Chart";
import Feature from "../../components/features/Feature";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { xAxisData } from "../../data/data";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey={"Sale"} />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
