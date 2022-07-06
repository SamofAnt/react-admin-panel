import React, { useEffect, useState } from 'react'
import "./datatable.scss"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n"
import SystemSourceService from '../../services/SystemSourceService';
import { columns } from "../../datatablesource"
import {localizedTextsMap} from "../../GridLocalization"


const Datatable = (props) => {
    const { t } = useTranslation();
    const [sources, setSources] = useState([]);
    
    useEffect(() => {
        getSources()
    }, [])

    const getSources = () => {
        try {
            SystemSourceService.getSources().then((response) => {
                setSources(response.data._embedded.sourceSystemList)
                console.log(response.data._embedded.sourceSystemList)
            });
        
        } catch (e) {
            console.log(e)
        }
    }
    const actionColumn = [
        {
            field: "action",
            headerName: "Действия",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">

                        <div className="view"> {t("actions.view")}</div>
                        <div
                            className="delete">
                            {t("actions.delete")}
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                {props.title}
                <Link to={props.link} className="link">
                    {t("actions.add")}
                </Link>
            </div>
           
                <DataGrid
                    className="datagrid"
                    rows={sources}
                    showBorders={false}
                    components={{
                        Toolbar: GridToolbar,
                        LoadingOverlay: LinearProgress,
                      }}
                    loading=
                    {!sources.length}
                    columns={columns.concat(actionColumn)}
                    getRowId={(row) => row.sourceSystemCd}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                    localeText={localizedTextsMap}
                />
        </div>
    )
}

export default Datatable