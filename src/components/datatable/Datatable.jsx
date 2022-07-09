import React, { useEffect, useState } from 'react'
import "./datatable.scss"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18n"
import SystemSourceService from '../../services/SystemSourceService';
import { columns } from "../../datatablesource"
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Datatable = (props) => {
    const { t } = useTranslation();
    const [sources, setSources] = useState([]);
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

    const deleteItems = () => {
        setLoading(true);
        SystemSourceService.deleteSources(JSON.stringify(selectedRows, null, 4))
            .then(response => {
                console.log(response.data);
                setLoading(false);
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
                    onSelectionModelChange={(item) => {
                        const selectedIDs = new Set(item);
                        const selectedRows = sources.filter((row) =>
                            selectedIDs.has(row.sourceSystemCd));
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
                    <Button onClick={()=> {
                        deleteItems();
                        handleClose();
                    }}>Удалить</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default Datatable