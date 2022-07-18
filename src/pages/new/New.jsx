import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import React from 'react'
import axios from 'axios';
import SystemSourceService from "../../services/SystemSourceService";
import { useForm, Controller } from "react-hook-form";
import { Watch } from 'react-loader-spinner'
import NotificationService from "../../services/NotificationsService"
import Select from 'react-select'
import GroupResourcesService from "../../services/GroupResourcesService";
import ServerService from "../../services/ServerService";

const New = ({ inputs, titleNew, url }) => {
  const [sources, setSources] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([]);
  const [loadingSelect, setSelectLoading] = useState(true);

  const onSubmit = data => {
    console.log(data);
    setLoading(true);
    ServerService.add(data, url)
      .then(response => {
        NotificationService.getNotification('success', 'Добавлено', 'Новый элемент успешно добавлен')
        setLoading(false);
      })
        .catch(error => {
          console.log(error.response)
        NotificationService.getNotification('error', 'Ошибка добавления', error.response.data.details)
        setLoading(false);
      });
  };

  const onChangeGroups = newGroups => {
    setGroups(newGroups == null ? [] : newGroups);
  }
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
  useEffect(() => {
    if (groups.length == 0) {
      try {
         GroupResourcesService.getGroups()
          .then(response => {
            var groupsTitle = []
            response.data._embedded.resourceGroupList.map(group=> groupsTitle.push(new Object({value: group.resourceGroupCd, label : group.resourceGroupCd})))
            setGroups(groupsTitle) 
            setSelectLoading(false)
            console.log(groupsTitle)
          })
      } catch (error) {
        console.log(error);
      }
    }
  }
  )
  
  
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
                      <Select
                        name="resourceGroupCd"
                        isClearable
                        placeholder='Search groups...'
                        onChange={onChangeGroups}
                        options={groups}
                        value={groups.value}
                        noOptionsMessage={() => 'No Groups Found'}
                        isLoading={loadingSelect}
                      />  
                      
                      
                      // <select  onClick={onLoadGroups}  {...register(name, input.rules)}
                      // >
                      //     <option value="" disabled selected hidden>Выберите группу...</option>
                      //   {groups.map(group => (
                      //     <option value={group.resourceGroupCd}>{group.resourceGroupCd}</option>
                      //   ))}
                      // </select>
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