import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import Comments from '../../../Components/Post/Comments'

const Replies = () => {
  const _700 = useMediaQuery("(max-width:700px")
  return (
    <Stack flexDirection={"column"} gap={2} width={_700 ? "800px" : "90%"} mx={"auto"}>
      {/* Comment */}
      <Comments />
    </Stack>
  )
}

export default Replies