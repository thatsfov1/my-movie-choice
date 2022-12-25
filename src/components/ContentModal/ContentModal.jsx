import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import classes from "../SingleContent/SingleContent.module.css";
import {useEffect, useState} from "react";
import {modalAPI} from "../../api/api.js";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height:"80%",
    bgcolor: 'background.paper',
    border: '2px solid #c2c9d1',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({children, id, media_type, original_title}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [singleContent,setSingleContent] = useState([])
    const [singleContentVideo,setSingleContentVideo] = useState([])

    const fetchContent = async (media_type,id)=>{
        const response = await modalAPI.getSingleContent(media_type,id)
        setSingleContent(response.data)
    }
    const fetchContentVideo = async (media_type,id)=>{
        const response =  await modalAPI.getSingleContent(media_type,id)
        setSingleContentVideo(response.data.results[0]?.key)
    }


    return (
        <div>
            <Button className={classes.container} onClick={handleOpen}>{children}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {original_title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}