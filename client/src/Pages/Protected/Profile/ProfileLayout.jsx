import { Avatar, Button, Chip, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from "react-router-dom"
import { editProfileModal } from '../../../redux/slice'
const ProfileLayout = () => {
    const _700 = useMediaQuery("(min-width:700px)")
    const _500 = useMediaQuery("(min-width:500px)")
    const _300 = useMediaQuery("(min-width:300px)")
    const dispatch = useDispatch()
    const { } = useSelector(state => state.service)
    const handleOpenEditModal = () => {
        dispatch(editProfileModal(true))
    }
    

    return (
        <>
            <Stack flexDirection={"column"} gap={2} p={2} m={2} width={_700 ? "800px" : "90%"} mx={"auto"}>
                <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} >
                    <Stack gap={1} flexDirection={"column"} >
                        <Typography variant='h2' fontWeight={"bold"} fontSize={_300 ? "2rem" : "1rem"}  >Ashish Ghimire</Typography>
                        <Stack flexDirection={"column"} fontSize={_700 ? "1rem" : "0.8rem"} alignItems={"center"} gap={1}>
                            <Typography variant='h2' fontSize={"1rem"}>Ashish Ghimire</Typography>
                        </Stack>
                        <Chip size='40' sx={{ fontSize: _300 ? "0.8rem" : "0.6rem" }} label="threads.net" />
                    </Stack>
                    <Avatar sx={{ height: _300 ? 60 : 40, width: _300 ? 60 : 40 }} />
                </Stack>
                <Typography variant='subtitle2' >This is bio</Typography>
                <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant='subtitle2' color='gray' >19 Followers </Typography>
                    <FaInstagram size={_300 ? 40 : 24} />
                </Stack>
                <Button size='large' sx={{
                    color: "black",
                    width: _700 ? "800px" : "90%",
                    mx: "auto",
                    textAlign: "center",
                    border: "1px solid gray",
                    borderRadius: "10px"
                }} onClick={handleOpenEditModal}  >Edit Profile</Button>
                <Stack
                    flexDirection={"row"}
                    justifyContent={"space-evenly"}
                    my={5}
                    pb={2}
                    borderBottom={"2px solid gray"}
                    fontSize={_500 ? "1.2rem" : _300 ? "1.1rem" : "0.9rem"}
                    width={"800px"}
                    mx={"auto"}
                >
                    <Link to={"/profile/threads/1"} className='link'  >Threads</Link>
                    <Link to={"/profile/replies/1"} className='link'  >Replies</Link>
                    <Link to={"/profile/repost/1"} className='link' >Repost</Link>
                </Stack>
            </Stack>
            <Outlet />
        </>
    )
}

export default ProfileLayout