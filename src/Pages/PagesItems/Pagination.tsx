import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


type Props = {
    onPageChange(event: React.ChangeEvent<unknown>, value: number): void,
    pagesCount:number
}


const PaginationRounded = ({pagesCount, onPageChange}:Props) => {
    return (
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:15
        }}>
            <Stack spacing={2}>
                <Pagination count={pagesCount} shape="rounded"
                            onChange={onPageChange}/>
            </Stack>
        </div>
    );
}

export default PaginationRounded