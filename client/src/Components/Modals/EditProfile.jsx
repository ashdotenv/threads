import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from 'react-redux'
import { editProfileModal } from '../../redux/slice'
const EditProfile = () => {
    const { openEditProfileModal } = useSelector(state => state.service)

    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(editProfileModal(false))
    }
    const [pic, setPic] = useState()
    const [bio, setBio] = useState()
    const imgRef = useRef()
    const handlePhoto = () => {
        imgRef.current.click()
    }
    const handleUpdate = () => { }
    return (
        <>
            <Dialog fullScreen={false} open={openEditProfileModal} onClose={handleClose} >
                <Box onClick={handleClose} position={"absolute"} top={20} right={20} >
                    <RxCross2 className='cross' size={28} />
                </Box>
                <DialogTitle textAlign={"center"} mb={5} ></DialogTitle>
                <DialogContent>
                    <Stack flexDirection={"column"} gap={1}>
                        <Avatar src={pic ? URL.createObjectURL(pic) : ""} sx={{ width: 96, height: 96, alignSelf: "center" }} />
                        <Button onClick={handlePhoto} size='large' sx={{
                            border: "2px solid gray", borderRadius: "20px", width: 96, height: 20,
                            alignSelf: "center",
                            my: 2,
                        }}>Change</Button>
                        <input type="file" onChange={(e) => setPic(e.target.files[0])} ref={imgRef} accept='image/*' />
                        <Typography
                            variant='subtitle1'
                            fontWeight={"bold"}
                            fontSize={"1.2rem"}
                            my={2}
                        >
                            UserName

                        </Typography>
                        <input type="text" />
                    </Stack>
                    <Stack flexDirection={"column"} >
                        <Typography
                            variant='subtitle1'
                            fontWeight={"bold"}
                            fontSize={"1.2rem"}
                            my={2}
                        >
                            Email

                        </Typography>
                        <input type="text" />
                    </Stack>
                    <Stack flexDirection={"column"} >
                        <Typography
                            variant='subtitle1'
                            fontWeight={"bold"}
                            fontSize={"1.2rem"}
                            my={2}
                        >
                            Bio
                        </Typography>
                        <input onChange={(e) => setBio(e.target.value)} type="text" />
                    </Stack>
                    <Button size='large' sx={{
                        border: "2px solid gray",
                        borderRadius: "10px",
                        bgcolor: "GrayText",
                        color: "white",
                        width: "100%",
                        my: 2,
                        fontSize: "1.2rem"
                    }} onClick={handleUpdate} >
                        Update Profile
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default EditProfile