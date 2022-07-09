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
import { Watch } from 'react-loader-spinner'

const New = ({ inputs, titleNew }) => {
  const [sources, setSources] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = data => {
    console.log(data);
    setLoading(true);
    SystemSourceService.addSource(data)
      .then(response => {
        console.log(response.data);
        createNotification('success');
        setLoading(false);
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
        {!loading ? (
          <div className="bottom">
            <div className="right">
              <form onSubmit={handleSubmit(onSubmit)}>
                {inputs.map((input) => {
                  const name = input.register;
                  return (<div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} {...register(name, input.rules)} />
                    {errors[name] && (<p>{errors[name]?.message}</p>)}
                  </div>)
                })}
              </form>
              <button onClick={handleSubmit(onSubmit)} className="btn">Отправить</button>
            </div>

          </div>
        ) : <div className="loader">
          <Watch
            height={50}
            width={50}
            color='#6439ff'
          />
        </div>}
      </div >
    </div >
  );
};

export default New;