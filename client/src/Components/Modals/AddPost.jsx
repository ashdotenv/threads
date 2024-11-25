import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaImages } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addPostModal } from '../../redux/slice';

const AddPost = () => {
    const { openAddPostModal } = useSelector(state => state.service)

    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(addPostModal(false))
    };
    const mediaRef = useRef()

    const handleMediaRef = (e) => {
        mediaRef.current.click()
    }
    const [media, setMedia] = useState()
    return (
        <Dialog
            open={openAddPostModal}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 'auto',
                    mb: 'auto'
                }
            }}
        >
            <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
                <RxCross2 />
            </Box>
            <DialogTitle textAlign={"center"} mb={5}>
                New Thread
            </DialogTitle>
            <DialogContent>
                <Stack flexDirection={"row"} gap={2} mb={2}>
                    <Avatar />
                    <Stack>
                        <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
                            Ashish
                        </Typography>
                        <textarea rows={20} cols={32} ></textarea>
                        {media ?
                            <img style={{ objectFit: "cover" }} src={URL.createObjectURL(media)} /> : ""}
                        <FaImages onClick={handleMediaRef} size={28} className="image-icon" />
                        <input style={{ display: "none" }} onChange={(e) => setMedia(e.target.files[0])} ref={mediaRef} type="file" accept="image/*" />
                    </Stack>
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography color="gray" variant="h6" fontSize={"1rem"}>
                        Any One
                    </Typography>
                    <Button
                        size="large"
                        sx={{
                            bgcolor: "GrayText",
                            color: "white",
                            '&:hover': { bgcolor: 'darkgray' }
                        }}
                    >
                        Post
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default AddPost;
