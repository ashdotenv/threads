import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import { IoIosMore } from 'react-icons/io'

const Comments = () => {
    return (
        <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            px={2}
            pb={4}
            borderBottom={"1px solid gray"}
            mx={"auto"}
            width={"90%"}
        >
            <Stack flexDirection={"row"}
                gap={2}
            >
                <Avatar />
                <Stack flexDirection={"column"}>
                    <Typography variant='h6' fontWeight={"bold"} fontSize={"0.9rem"}>
                        Ashish_34594
                    </Typography>
                    <Typography variant='subtitle2' fontSize={"0.9rem"}>
                        This is a Comment
                    </Typography>
                </Stack>
            </Stack>
            <Stack flexDirection={"row"} gap={1} alignItems={"center"} color={"GrayText"}
                fontSize={"0.9rem"} >
                <p>24 Min</p>
                <IoIosMore />
            </Stack>
        </Stack>
    )
}

export default Comments