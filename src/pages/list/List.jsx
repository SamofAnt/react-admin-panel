import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./list.scss"

const List = (props) => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
              <Datatable title={props.title} link={props.link} list={props.list} columns={props.columns} url={props.url} rowId={props.rowId}/>
    </div>
  </div>
  )
}

export default List