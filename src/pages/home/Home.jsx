import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import Chart from '../../components/charts/Chart'
import "./home.scss"

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Chart title="Последние 6 месяцев" aspect={2 / 1} />
          <Chart title="Последние 6 месяцев" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Статусы</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home