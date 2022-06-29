import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../../datatablesource';

const Datatable = () => {
    return (
        <div className='datatable'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable