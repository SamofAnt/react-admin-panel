import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import React from 'react'
import { Store } from 'react-notifications-component';
import axios from 'axios';
import SystemSourceService from "../../services/SystemSourceService";
import { useForm } from "react-hook-form";

const New = ({ inputs, titleNew }) => {
  const [sources, setSources] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('https://webhook.site/81f23ae1-cf64-4775-853b-a00d8e8ff29e/sources', data,
      {
        headers: [
          { "Access-Control-Allow-Origin": '*' },
          { "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept ' },
          { "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" },
          { "Access-Control-Max-Age": 3600 },
          { 'Content-Type': 'application/json' }
        ]
      })
      .then(response => {
        console.log(response.data);
        createNotification('success');
      })
      .catch(error => { 
        console.log(error.data);
        createNotification('error');
      });
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* {inputs.map((input) => {
                const name = input.label;
                return (<div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} {...register(name, input.rules)} />
                  {errors.name && (<p>{input.error}</p>)}
                </div>)
              })} */}
              <div className="formInput">
                <label>source_system_cd</label>
                <input type="text" placeholder="SRC" {...register("source_system_cd", {required:true, maxLength: 3, minLength: 1})} />
                {errors.source_system_cd &&  (<p>Должно быть отлично от 0 и менее трех символов</p>)}
              </div>
              <div className="formInput">
                <label>language_cd</label>
                <input type="text" placeholder="РУС" {...register("language_cd", {required:true, maxLength: 3})} />
                {errors.language_cd && (<p>Должно быть отлично от 0 и менее трех символов</p>)}
              </div>
              <div className="formInput">
                <label>source_system_desc</label>
                <input type="text" placeholder="Тестовый источник" {...register("source_system_desc", {required:true})} />
                {errors.source_system_desc && (<p>Поле должно быть заполнено</p>)}
              </div>
              <div className="formInput">
                <label>x_source_no</label>
                <input type="number" placeholder="1" {...register("x_source_no", {required:true, min: 0, max: 199})} />
                {errors.x_source_no && (<p>Номер должен быть в диапозоне [0,199]</p>)}
              </div>
              <input className="btn" type="submit" />
            </form>
          </div>
        </div>
      </div >
    </div >
  );
};

export default New;