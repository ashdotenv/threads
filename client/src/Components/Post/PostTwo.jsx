import { Stack, Typography } from '@mui/material'
import React from 'react'
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa6"
import { IoMdSend } from 'react-icons/io'

const PostTwo = () => {
    return (
        <Stack flexDirection={"column"} justifyContent={"space-between"} >
            <Stack flexDirection={"column"} gap={2} >
                <Stack flexDirection={"column"} >
                    <Typography variant='h6' fontSize={"1rem"} fontWeight={"bold"} >Ashish Ghimire</Typography>
                    <Typography variant='h6' fontSize={"1`.2rem"}  >Ashish Ghimire hate sidebars</Typography>
                    <img src="/error-bg.png" loading='lazy' alt="" width={"400px"} height={"auto"} />
                </Stack>
                <Stack flexDirection={"column"} gap={1} >
                    <Stack flexDirection={"row"} gap={2} m={1} >
                        <FaRegHeart size={32} />
                        <FaRegComment size={32} />
                        <FaRetweet size={32} />
                        <IoMdSend size={32} />
                    </Stack>
                    <Stack flexDirection={"row"} gap={1} position={"relative"} top={-3} left={4}>
                        <Typography variant='caption' color="GrayText" fontSize={"1.1rem"} >2 Likes .</Typography>
                        <Typography variant='caption' color="GrayText" fontSize={"1.1rem"} >2 Comments  </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default PostTwo