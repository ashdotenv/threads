import { Stack } from '@mui/material'
import React from 'react'

const Post = () => {
    return (
        <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            borderBottom={"3px solid gray"}
            p={2}
            mx={"auto"}
            sx={{
                ":hover": {
                    cursor: "pointer",
                    boxShadow: "10px 10px 10px gray"
                },
                transition: "all ease-in-out 0.3s"
            }}
        >

        </Stack>
    )
}

export default Post