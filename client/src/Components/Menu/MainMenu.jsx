import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleMainMenu } from '../../redux/slice'

const MainMenu = () => {
    const  {anchorE1}  = useSelector(state => state.service)
;

    
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(toggleMainMenu(null))
    }
    const handleToggleTheme = () => {
    }
    const handleLogout = () => {

    }

    return (
        <Menu
            anchorEl={anchorE1}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={anchorE1!==null?true:false} onClose={handleClose} >
            <MenuItem onClick={handleToggleTheme}> Toggle Theme </MenuItem>
            <Link>
                <MenuItem onClick={handleToggleTheme}> Profile</MenuItem>
            </Link>
            <MenuItem> Logout </MenuItem>
        </Menu>
    )
}

export default MainMenu