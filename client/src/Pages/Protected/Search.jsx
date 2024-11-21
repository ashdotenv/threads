import React from 'react'
import SearchInput from '../../Components/Search/SearchInput'
import Profilebar from '../../Components/Search/Profilebar'
import { Stack } from '@mui/material'

const Search = () => {
    return (
        <>
            <SearchInput />
            <Stack flexDirection={"column"} maxWidth={"750px"} gap={1} mb={5} width={"80%"} mx={"auto"} >
                <Profilebar />
            </Stack>
        </>
    )
}

export default Search