import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <Stack
            width={"100%"}
            height={"100vh"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ backgroundImage: `url("/register-bg.webp")`, backgroundRepeat: "no-repeat", backgroundSize: "100% 600px" }}

        >
            <Stack flexDirection={"column"} width={"40%"} gap={2} mt={20} >
                <Typography variant='h5' alignSelf={"center"} fontSize={"1.5rem"} fontWeight={"bold"} >Login With Email</Typography>
                <TextField placeholder='Enter Your Username' ></TextField>
                <TextField placeholder='Enter Your Email' ></TextField>
                <TextField placeholder='Enter Your Password' ></TextField>
                <Button size='large' sx={{
                    background: "blue",
                    color: "white",
                    height: 52,
                    fontSize: "1rem"
                }} >Register</Button>
                <Typography variant='h6' alignSelf={"Center"} >
                    Already Have an Account?
                    <Link to={"/Login"} >Login</Link>
                </Typography>

            </Stack>
        </Stack >
    )
}

export default Register