import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";


const Navbar = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"space-around"} >
      <Link to={"/"} >
        <FaHome size={36} />
      </Link>
      <Link to={"/search"}  >
        <FaSearch size={36} />
      </Link>
      <Link to={"/edit"} >
        <RiEditBoxLine size={36} />
      </Link>
      <Link>
        <CiHeart size={36} />
      </Link>
      <Link>
        <VscAccount size={36} />
      </Link>
    </Stack>
  )
}

export default Navbar