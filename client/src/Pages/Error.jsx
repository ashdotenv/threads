import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    return (
        <Stack sx={{
            background: 'url("error-bg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }} width={"100%"} height={"100vh"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} >
            <Stack
                p={5}
                border={"2px solid black"}
                bgcolor={"wheat"}
                borderRadius={"10px"}
                flexDirection={"column"}
                gap={2}
                boxShadow={"7px 7px 7px 7px white"}
            >
                <Typography variant='h3' >Oops</Typography>
                <Typography variant='h6' >You Entered Wrong Location</Typography>
                <Button onClick={()=>navigate(-1)} size='large' sx={{ ":hover:": { bgcolor: "red", cursor: "pointer" }, p: 2, bgcolor: "blue", color: "white", borderRadius: "10px" }} >
                        Goto Home
                </Button>
            </Stack>
        </Stack>
    )
}

export default Error