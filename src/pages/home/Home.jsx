import React, { Suspense, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/charts/Chart'
import { Watch } from 'react-loader-spinner'
import CircleChart from '../../components/charts/PieChart'
import "./home.scss"
import { SteppedChart } from '../../components/charts/SteppedChart'
import { useTranslation } from "react-i18next";
import "../../i18n"
import ServerService from '../../services/ServerService'

const Home = ({url }) => {
  const { t } = useTranslation();
    const [statusesInDay, setStatuses] = useState([]);
    const [countStatuses, setCount] = useState([]);
  const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (statusesInDay.length === 0 || countStatuses === 0) {
            setLoading(true);
            try {
                ServerService.get(url)
                    .then((response) => {
                        setStatuses(response.data)
                        console.log(response.data)
                    })
                    .catch(err => {
                        console.log(err.response)
                    })
                ServerService.get("/api/registry-chart-all")
                    .then((response) => {
                        setCount(response.data)
                        console.log(response.data)
                    })
                    .catch(err => {
                        console.log(err.response)
                    })
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
    })
 
  return (
    <div className='home'>

      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {!loading ? (
          <div>
            <div className="widgets">
              <Widget type="sources" url="/sources" />
              <Widget type="resources" url="/resources" />
              <Widget type="group" url="/group" />
              <Widget type="registers" url="/registers" />

            </div>
            <div className="charts">

                          <SteppedChart data={statusesInDay}/>
                          <CircleChart  data={countStatuses} />
                          <Chart  aspect={2 / 1} className="chart" />


            </div>

            <div className="listContainer">
              <div className="listTitle">{t("homeTable.title")}</div>
              <Table />
            </div>
          </div>) : <div className="loader">
          <Watch
            height={50}
            width={50}
            color='#6439ff'
          />
        </div>}
      </div>

    </div>
  )
}

export default Home