import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Input = () => {
    return (
        <Stack
            flexDirection={"row"}
            width={"70%"}
            alignItems={"center"}
            height={28}
            justifyContent={"space-between"}
            p={3}
            borderBottom={"2px solid gray"}
            my={5}
            mx={"auto"}
        >
            <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} gap={2} >
                <Avatar />
                <Typography color='GrayText' >
                    Start a Thred
                </Typography>
            </Stack>
            <Button size='medium' sx={{ bgcolor: "gray", color: "aliceblue" }} >Post</Button>
        </Stack>
    )
}

export default Input