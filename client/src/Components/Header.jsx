import { Grid, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { toggleMainMenu } from '../redux/slice';
const Header = () => {
    const dispatch = useDispatch()
    const handleOpenMenu = (e) => {
        dispatch(toggleMainMenu(e.currentTarget)) 
    }
    const _700 = useMediaQuery("(min-width:700px")
    return (
        <>
            {_700 ? <Stack flexDirection={"row"}
                height={52}
                justifyContent={"space-around"}
                alignItems={"center"}
                position={"sticky"}
                top={9}
                py={1} >

                <Link to={"/"}>
                    <img height={50} width={60} src="/Threads-logo-white-bg.png" alt="" />
                </Link>
                <Stack justifyContent={"center"}
                    width={"550px"}
                    bgcolor={"aliceblue"}
                    color={"white"}
                    zIndex={2}
                    height={96}>
                    <Navbar />
                </Stack>
                <IoMenu onClick={handleOpenMenu} size={36} />
            </Stack> : <>
                <Stack
                    bottom={0}
                    justifyContent={"center"}
                    width={"100%"}
                    height={52}
                    p={1}
                    zIndex={2}
                    bgcolor={"aliceblue"}
                    position={"fixed"}>
                    <Navbar />
                    <Grid >
                        <Grid item md={4} xs={6} >
                            <img src="/Threads-logo-white-bg.png" alt="" />
                        </Grid>
                        <IoMenu />
                    </Grid>
                </Stack>
            </>}
        </>
    )
}

export default Header