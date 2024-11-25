import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header'
import AddPost from '../../Components/Modals/AddPost'
import EditProfile from '../../Components/Modals/EditProfile'
import MainMenu from '../../Components/Menu/MainMenu'
import MyMenu from '../../Components/Menu/MyMenu'

const ProtectedLayout = () => {
    const _700 = useMediaQuery("(min-width:700px)")
    return (
        <Stack flexDirection={"column"}
            maxWidth={_700 ? "800px" : "90%"}
            minWidth={"100%"}
            mx={"auto"}
            overflow={"hidden"}
        >
            <EditProfile />
            <MainMenu />
            <MyMenu />
            <AddPost />
            <Header />
            <Outlet />
        </Stack>
    )
}

export default ProtectedLayout