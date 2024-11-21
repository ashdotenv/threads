import { Avatar, AvatarGroup, Badge, Stack, Stepper } from '@mui/material'
import React from 'react'

const PostOne = () => {
    return (
        <Stack
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Badge overlap='circular' anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                    <Avatar sx={{ height: 20, width: 20, bgcolor: "green", position: "relative", right: 4, bottom: 4 }} >+</Avatar>
                }
            >
                <Avatar sx={{ width: 40, height: 40 }} />
            </Badge>
            <Stack
                flexDirection={"column"}
                alignItems={"center"}
                gap={2}
                height={"100%"}
            >
                <Stepper orientation='horizontal' activeStep={0} sx={{ border: "0.1rem solid gray", height: "100%" }} ></Stepper>
                <AvatarGroup total={4} sx={{
                    "& .MuiAvatar-root": {
                        width: 24,
                        fontSize: 12,
                        height: 24
                    }
                }}  >
                    <Avatar />

                </AvatarGroup>
            </Stack>
        </Stack>
    )
}

export default PostOne