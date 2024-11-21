import { Stack, Typography } from '@mui/material'
import React from 'react'
import { IoIosMore } from "react-icons/io";
import PostOne from '../Post/PostOne';
import PostTwo from '../Post/PostTwo';

const Post = () => {
    return (
        <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            borderBottom={"3px solid gray"}
            p={2}
            mx={"auto"}
            width={"70%"}
            position="relative"
            sx={{
                ":hover": {
                    cursor: "pointer",
                    boxShadow: "10px 10px 10px gray"
                },
                transition: "all ease-in-out 0.3s"
            }}
        >
            <Stack flexDirection={"row"} gap={2}>
                <PostOne />
                <PostTwo />
            </Stack>
            <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
                fontSize={"1rem"}
                position="absolute"
                top="10px"
                right="10px"
                zIndex={1}
            >
                <Typography variant='caption' color='GrayText' fontSize={"1rem"}>
                    <p>Menu</p>
                </Typography>
                <IoIosMore size={28} />
            </Stack>
        </Stack>
    )
}

export default Post
