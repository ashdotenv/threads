import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Profilebar = () => {
    return (
        <>
            <Stack flexDirection={"row"}  px={1} py={2} mx={"auto"} boxShadow={"5px 5px 5px gray"} width={"70%"} borderRadius={"15px"} sx={{
                ":hover": {
                    cursor: "pointer"
                }
            }}  >

                <Stack flexDirection={"row"} gap={2}>
                    <Avatar />
                    <Stack flexDirection={"column"} gap={0.6}>
                        <Typography variant='h6' fontSize={"1rem"}>Ashish_120</Typography>
                        <Typography variant='caption' fontSize={"1.1rem"} color='gray'>Ashish_120</Typography>
                        <Typography variant='caption' fontSize={"1.1rem"} color='gray'>3 Followers</Typography>
                    </Stack>
                    <Button size='medium' sx={{ border: "1px solid gray", color: "black", padding: 2, height: 40 }} >Follow</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Profilebar