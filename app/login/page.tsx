"use client"

import { Button, Grid, TextField, Typography, styled } from "@mui/material"
import { badgeBorderRadius, blue400, fontSizeSub2, shadow } from "../styles/theme"
import Link from "next/link"

const LoginContainer = styled(Grid)({
  height: '100vh',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})

const LoginFormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  height: '400px',
  padding: '50px 50px',
  margin: '50px 0px',
  borderRadius: `${badgeBorderRadius}`,
  boxShadow: `${shadow}`
})

const StyledTextField = styled(TextField)({
  width: '300px',
  marginBottom: '30px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  }
})

const LoginButton = styled(Button)({
  width: '300px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
})

const SignUpText = styled(Typography)({
  marginTop: '20px',
  textAlign: 'center',
  margin: '30px 0px',
  fontSize: `${fontSizeSub2}`,
  '& a': {
    color: `${blue400}`
  }
})

const login = () => {
  
  return (
    <LoginContainer container direction="column">
      <LoginFormContainer>
        <Grid item>
          <StyledTextField
            variant="outlined"
            label="Email"
            type="email"
            placeholder="Enter your Email"
            style={{ marginTop: '50px' }}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </Grid>
        <Grid item>
          <LoginButton variant="contained" color="primary">
            LOGIN
          </LoginButton>
          <SignUpText>
            <Link href="/signUp">Do you need to sign up?</Link>
          </SignUpText>
        </Grid>
      </LoginFormContainer>
    </LoginContainer>
  )
}

export default login