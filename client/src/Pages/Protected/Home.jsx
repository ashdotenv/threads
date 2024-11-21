import React from 'react'
import { Button, Stack } from "@mui/material"
import Input from '../../Components/Home/Input'
import Post from '../../Components/Home/Post'
const Home = () => {
    return (
        <>
            <Input />
            <Stack flexDirection={"column"} gap={2} mb={10} >
                <Post />
            </Stack>
            <Button size='small' sx={{
                my: 5,

                textDecoration: "underline",

            }}>Load More</Button>
        </>
    )
}

export default Home