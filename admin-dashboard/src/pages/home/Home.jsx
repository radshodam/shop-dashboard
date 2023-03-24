import React from "react";
import Chart from "../../components/chart/Chart";
import Feature from "../../components/features/Feature";
import { xAxisData } from "../../data/dataChartHome";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="Month Sale" data={xAxisData} dataKey={"Sale"} />
    </div>
  );
}

export default Home;
