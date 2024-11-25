import { Button, Stack, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux"
import { addPostModal } from '../redux/slice';
const Navbar = () => {
  const _700 = useMediaQuery("(min-width:700px")
  const _300 = useMediaQuery("(min-width:300px")
  const dispatch = useDispatch()
  const handleAddPost = () => {
    dispatch(addPostModal(true))
  }
  return (
    <Stack flexDirection={"row"} justifyContent={"space-around"} >
      <FaArrowLeft className='image-icon' color='black' size={_300 ? 24 : 40} />
      <Link color='black' className='link' to={"/"} >
        <FaHome size={_300 ? 36 : 24} />
      </Link>
      <Link color='black' className='link' to={"/search"}  >
        <FaSearch size={_300 ? 36 : 24} />
      </Link>
      <Link onClick={handleAddPost}>
        <RiEditBoxLine color='black' size={_300 ? 36 : 24} />
      </Link>
      <Link color='black' className='link' >
        <CiHeart size={_300 ? 36 : 24} />
      </Link>
      <Link color='black' className='link' to={"/profile/threads/1"} >
        <VscAccount size={_300 ? 36 : 24} />
      </Link>
    </Stack>
  )
}

export default Navbar