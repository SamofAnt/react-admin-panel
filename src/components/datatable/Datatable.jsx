import React, { useEffect, useRef, useState } from 'react'
import "./datatable.scss"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n"
import SystemSourceService from '../../services/SystemSourceService';
import { localizedTextsMap } from "../../GridLocalization"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Watch } from 'react-loader-spinner';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import NotificationsService from '../../services/NotificationsService';
import ResourceService from '../../services/ResourceService';
import {
    useLocation
} from "react-router-dom";
import GroupResourcesService from '../../services/GroupResourcesService';
import RegistryService from '../../services/RegisterService';
import ServerService from '../../services/ServerService';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Datatable = (props) => {
    const { t } = useTranslation();
    const [rows, setRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation()
    const prevProps = useRef(location)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
            try {
                ServerService.get(props.url).
                then((response=> {
                    setRows(response.data._embedded[props.list])
                    console.log(response.data._embedded[props.list])
                }))

            } catch (e) {
                console.log(e.response)
            }
    }, [location])

    const deleteItems = () => {
        setLoading(true);
        ServerService.delete(JSON.stringify(selectedRows, null, 4))
            .then(response => {
                console.log(response.data);
                setLoading(false);
                NotificationsService.getNotification('success', 'Элементы удалены', "Выбранные вами элементы были успешно удалены")
            });
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
                            className="delete" onClick={handleClickOpen}>
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
                <div className="actions-icons">
                    {
                        selectedRows != 0 ? (
                            <div className="deleteAction" onClick={handleClickOpen}>
                                <DeleteOutlineIcon className='deleteIcon' />Удалить отмеченные
                            </div>
                        ) : null
                    }
                    <Link to={props.link} className="link">
                        <AddIcon className='addIcon' />
                        {t("actions.add")}
                    </Link>
                </div>
            </div>
            {!loading ?
                <DataGrid
                    className="datagrid"
                    rows={rows}
                    showBorders={false}
                    components={{
                        Toolbar: GridToolbar,
                        LoadingOverlay: LinearProgress,
                    }}
                    loading=
                    {!rows.length}
                    columns={props.columns.concat(actionColumn)}
                    getRowId={(row) => row.sourceSystemCd || row.resourceId || row.resourceGroupCd || row.registryId}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                    localeText={localizedTextsMap}
                    onSelectionModelChange={(item) => {
                        const selectedIDs = new Set(item);
                        const selectedRows = rows.filter((row) =>
                            selectedIDs.has(row.sourceSystemCd || row.resourceCd || row.resourceGroupCd || row.registryId));
                        setSelectedRows(selectedRows);
                        console.log(selectedRows);
                    }}
                /> : <div className="loader">
                    <Watch
                        height={50}
                        width={50}
                        color='#6439ff'
                    />
                </div>
            }
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Удалить элементы?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Вы уверены что хотите удалить выбранные элементы? Вы не сможете восстановить это действие
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={() => {
                        deleteItems();
                        handleClose();
                    }}>Удалить</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default Datatable