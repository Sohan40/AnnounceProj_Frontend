import * as React from 'react';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useForm} from 'react-hook-form'
import Backdrop from '@mui/material/Backdrop';
import axios from 'axios'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth:'min(95%,500px)',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius:'5px',
    boxShadow:'5px 10px 8px #888888',
    boxShadow: 24,
    display:'flex',
    justifyContent:'center',
    p:4
};

export default function ProfileModal({ pic }) {
    const [open, setOpen] = React.useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = (e) => {
        const formData = new FormData();
        formData.append("profile", e.profile[0]);
        console.log(formData);
        axios.post('https://94c7-2405-201-c01f-4262-b5ed-fbb8-3b72-43ed.ngrok-free.app/student/profilePic',formData).then((url)=>{
        pic(url.data);
        });
        handleClose();
}
    return (
        <div>
            <Button onClick={handleOpen}>Edit Profile pic</Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data' className='w-100'>
                            <div className="mb-3">
                                <label htmlFor="profile" className="form-label">Upload File</label>
                                <input type="file" className="form-control" name="profile" id="profile" {...register("profile")}/>
                            </div>

                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </form>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
