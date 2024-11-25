import { Avatar, Button, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addPostModal } from '../../redux/slice'

const Input = () => {
    const dispatch = useDispatch()

    const handleAddPost = () => {
        dispatch(addPostModal(true))
    }

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
            {/* Clickable Stack */}
            <Stack 
                flexDirection={"row"} 
                alignItems={"center"} 
                justifyContent={"space-between"} 
                gap={2} 
                onClick={handleAddPost} // Add onClick event here
                sx={{ cursor: "pointer" }} // Optional: Add cursor pointer for better UX
            >
                <Avatar />
                <Typography color='GrayText'>
                    Start a Thread
                </Typography>
            </Stack>
            
            <Button 
                size='medium' 
                sx={{ bgcolor: "gray", color: "aliceblue" }}
                onClick={handleAddPost} // Add optional onClick for button
            >
                Post
            </Button>
        </Stack>
    )
}

export default Input
