import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../../datatablesource';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n"

const Datatable = (props) => {
    const { t } = useTranslation();
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
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
                rows={rows}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable