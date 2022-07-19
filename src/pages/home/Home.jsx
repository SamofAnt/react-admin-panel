import React, { Suspense } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/charts/Chart'

import CircleChart from '../../components/charts/PieChart'
import "./home.scss"
import { SteppedChart } from '../../components/charts/SteppedChart'
import { useTranslation } from "react-i18next";
import "../../i18n"

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='home'>

        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="sources" url="/sources"/>
            <Widget type="resources"  url="/resources"/>
            <Widget type="group" url="/group"/>s
            <Widget type="registers" url="/registers"/>

          </div>
          <div className="charts">
          
           <SteppedChart />
            <CircleChart/>
            <Chart aspect={2 / 1} className="chart"/>
           
           
          </div>
         
          <div className="listContainer">
            <div className="listTitle">{t("homeTable.title")}</div>
            <Table />
          </div>
        </div>

    </div>
  )
}

export default Home