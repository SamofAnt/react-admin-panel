import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import React from 'react'
import { Store } from 'react-notifications-component';
import axios from 'axios';
import SystemSourceService from "../../services/SystemSourceService";

const New = ({ inputs, titleNew }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [sources, setSources] = useState([]);


 const handleSubmit =  () => {
     axios
      .post('https://webhook.site/81f23ae1-cf64-4775-853b-a00d8e8ff29e/sources',[ {
        title: "Test",
      }])
      .then((response) => {
        setSources([response.data, ...sources]);
        console.log(response.data)
      });
    setTitle('');
    setBody('');
  };
  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const article =[ { title: "Test", }];
    axios.post('https://webhook.site/81f23ae1-cf64-4775-853b-a00d8e8ff29e/sources', article,
    {
      headers: [
        { "Access-Control-Allow-Origin": '*' },
        { "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept '},
        { "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" },
        { "Access-Control-Max-Age": 3600 }
      ]
    })
    .then((response)=>{
      console.log(response.data)
    })

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  const createNotification = (type) => {
    switch (type) {

      case 'success':
        Store.addNotification({
          title: "Добавлено",
          message: "Новый источник успешно добавлен",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
        break;

      case 'error':
        Store.addNotification({
          title: "Ошибка",
          message: "Новый источник не был добавлен",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
        break;
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{titleNew}</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button type="submit" onClick={() => {
                createNotification('success');
              }}>
                Добавить
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default New;