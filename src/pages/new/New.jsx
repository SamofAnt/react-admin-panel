import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import React from 'react'
import axios from 'axios';
import SystemSourceService from "../../services/SystemSourceService";
import { useForm } from "react-hook-form";
import { Watch } from 'react-loader-spinner'
import NotificationService from "../../services/NotificationsService"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import GroupResourcesService from "../../services/GroupResourcesService";

const New = ({ inputs, titleNew }) => {
  const [sources, setSources] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([]);


  const onSubmit = data => {
    console.log(data);
    setLoading(true);
    SystemSourceService.addSource(data)
      .then(response => {
        console.log(response.data);
        NotificationService.getNotification('success', 'Добавлено', 'Новый источник успешно добавлен')
        setLoading(false);
      })
      .catch(error => {
        console.log(error.data);
        NotificationService.getNotification('error', 'Ошибка добавления', 'Новый источник не был успешно добавлен')
      });
  };

  const  onLoadGroups = async() => {
    try {
       await GroupResourcesService.getGroups()
      .then(response => {
        setGroups(response.data._embedded.resourceGroupList)
        console.log(response.data._embedded.resourceGroupList)
      })
    } catch (error) {
      console.log(error);
    }
  }
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
                    {(input.type == "selection") ? (
                      <select value={groups[0]} onClick={onLoadGroups}>
                        {groups.map(group => (
                          <option value={group}>{group}</option>
                ))}
                      </select>
                    ) :
                      <input type={input.type} placeholder={input.placeholder} {...register(name, input.rules)} />
                    }
                    {errors[name] && (<p>{errors[name]?.message}</p>)}
                  </div>)
                })}
              </form>
              <button onClick={handleSubmit(onSubmit)} className="btn">Отправить</button>
            </div>
            <div className="treeView">
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