import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationRounded = ({pagesCount, onPageChange}) => {
    return (
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:15
        }}>
            <Stack spacing={2}>
                <Pagination count={pagesCount} shape="rounded"
                            onChange={(e) => onPageChange(e.target.textContent)}/>
            </Stack>
        </div>
    );
}

export default PaginationRounded