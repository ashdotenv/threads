import React from 'react'
import { Stack, TextField } from "@mui/material"
import Post from "../../Components/Home/Post"
import Comments from '../../Components/Post/Comments'
const SinglePost = () => {
    const [comment, setComment] = useState("")
    return (
        <Stack flexDirection={"column"} my={5} gap={2}>
            <Post />
            <Stack flexDirection={"column"} gap={2} width={"80%"} mx={"auto"}>
                <Comments />
            </Stack>
            <TextField
                onChange={(e) => setComment(e.target.value)}
                variant='outlined'
                autoFocus
                placeholder='Comment Here '
                id='comment'
                sx={{ width: "50%", mx: "auto", my: 5, p: 1 }}
            >
            </TextField>
        </Stack>
    )
}

export default SinglePost