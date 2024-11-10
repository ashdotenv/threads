import { Stack } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <Stack flexDirection={"row"}
            height={52}
            justifyContent={"space-around"}
            alignItems={"center"}
            position={"sticky"}
            top={9}
            py={1} >

            <img height={50} width={60} src="Threads-logo-white-bg.png" alt="" />
            <Stack justifyContent={"center"}
                width={"550px"}
                bgcolor={"aliceblue"}
                color={"white"}
                zIndex={2}
                height={96}>
                <Navbar />
            </Stack>
            <p>Menu</p>
        </Stack>
    )
}

export default Header