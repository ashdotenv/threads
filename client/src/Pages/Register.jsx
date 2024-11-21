import { Button, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [credintials, setCrendintials] = useState({ username: "", email: "", password: "" })
    const handleRegister = () => {
        console.log(credintials);
    }
    const _700 = useMediaQuery("(min-width:700px)")
    return (
        <Stack
            width={"100%"}
            height={"100vh"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={_700 ? { backgroundImage: `url("/register-bg.webp")`, backgroundRepeat: "no-repeat", backgroundSize: "100% 600px" } : null}

        >
            <Stack flexDirection={"column"} width={"40%"} gap={2} mt={_700 ? 20 : 9} >
                <Typography variant='h5' alignSelf={"center"} fontSize={_700 ? "1.5rem" : "1rem"} fontWeight={"bold"} >Register With Email</Typography>
                <TextField onChange={(e) => setCrendintials({ ...credintials, username: e.target.value })} placeholder='Enter Your Username' ></TextField>
                <TextField onChange={(e) => setCrendintials({ ...credintials, email: e.target.value })} placeholder='Enter Your Email' ></TextField>
                <TextField onChange={(e) => setCrendintials({ ...credintials, password: e.target.value })} placeholder='Enter Your Password' ></TextField>
                <Button onClick={handleRegister} size='large' sx={{
                    background: "blue",
                    color: "white",
                    height: 52,
                    fontSize: _700 ? "1.3rem" : "1rem"
                }} >Register</Button>
                <Typography variant='h6' fontSize={_700 ? "1.3rem" : "1rem"} alignSelf={"Center"} >
                    Already Have an Account?
                    <Link to={"/Login"} >Login</Link>
                </Typography>

            </Stack>
        </Stack >
    )
}

export default Register