import React from 'react'
import { Stack } from "@mui/material"
import Input from '../../Components/Home/Input'
const Home = () => {
    return (
        <>
            <Input />
            <Stack flexDirection={"column"} gap={2} mb={10} >
                <p>Post</p>
                <p>Post</p>
                <p>Post</p>
                <p>Post</p>
            </Stack>
        </>
    )
}

export default Home