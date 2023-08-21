"use client"

import { Button, Grid, TextField, styled } from "@mui/material"
import React from "react"
import { black200, black500, shadow, white } from "../styles/theme"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import Link from "next/link"

const Header: React.FC = () => {
  return (
    <HeaderContainer container justifyContent="space-between">
      <Grid item>
        <Link href='/main'>
          <img 
            src="./logo.png"
            alt="logo" 
            style={{ cursor: 'pointer', position: 'relative', top: '3px' }} />
        </Link>
      </Grid>
      <Grid item>
        <SearchField
          variant="outlined"
          placeholder="Search"
          InputProps={{
            endAdornment: <SearchSharpIcon style={{ cursor: 'pointer' }}/>
          }}
        />
      </Grid>
      <Grid item>
        <MyPageButton 
          variant="outlined"
          style={{ borderColor: `${black200}` }}
          startIcon={<PersonOutlineOutlinedIcon style={{ cursor: 'pointer' }}/>} />
      </Grid>
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Grid)({
  display: 'flex',
  padding: '10px 50px',
  alignItems: 'center',
  boxShadow: `${shadow}`,
  backgroundColor: `${white}`,
})

const SearchField = styled(TextField)({
  width: '400px',
  height: '40px',
  position: 'relative',
  left: '-57px',
  '.MuiOutlinedInput-root': {
    borderRadius: '15px',
  },
  '.MuiInputBase-input': {
    padding: '10px 20px',
  }
})

const MyPageButton = styled(Button)({
  textTransform: 'none',
  padding: '10px 0px 10px 12px',
  borderRadius: '15px',
  color: `${black500}`,
})

export default Header