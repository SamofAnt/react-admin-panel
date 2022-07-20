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

const Home = ({ url }) => {
  const { t } = useTranslation();
  const [statusesInDay, setStatuses] = useState([]);
  const [countStatuses, setCount] = useState([]);
  const [countAll, setAll] = useState([]);
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
        ServerService.get("/api/all-data")
          .then((response) => {
            setAll(response.data)
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
              <Widget type="sources" url="/sources" amount={countAll.map(item => item.countOfSources)} />
              <Widget type="resources" url="/resources" amount={countAll.map(item => item.countOfResources)} />
              <Widget type="group" url="/group" amount={countAll.map(item => item.countOfGroups)} />
              <Widget type="registers" url="/registers" amount={countAll.map(item => item.countOfRegistry)} />

            </div>
            <div className="charts">

              <SteppedChart data={statusesInDay} title="Статусы за последнюю неделю"/>
              <CircleChart data={countStatuses} title="Общее количество статусов"/>
              <Chart aspect={2 / 1} className="chart" title="Общее количество статусов за посление 5 дней"/>


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