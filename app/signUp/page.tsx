"use client"

import { Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, styled } from "@mui/material"
import { badgeBorderRadius, blue400, fontSizeSub2, fontSizeSub3, shadow } from "../styles/theme"
import Link from "next/link"

const SignUpContainer = styled(Grid)({
  height: '100vh',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
})

const SignUpFormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '400px',
  height: '450px',
  padding: '50px 50px',
  margin: '50px 0px',
  borderRadius: `${badgeBorderRadius}`,
  boxShadow: `${shadow}`
})

const GridContainer = styled(Grid) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start'
})

const CheckButton = styled(Button)({
  height: '55px',
  marginLeft: '10px',
  borderRadius: '8px',
  fontSize: `${fontSizeSub3}`
});

const StyledTextField = styled(TextField)({
  width: '300px',
  marginBottom: '20px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  }
})

const SignUpButton = styled(Button)({
  width: '300px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
})

const LoginText = styled(Typography)({
  marginTop: '20px',
  textAlign: 'center',
  margin: '30px 0px',
  fontSize: `${fontSizeSub2}`,
  '& a': {
    color: `${blue400}`
  }
})

const signUp = () => {
  return (
    <SignUpContainer container direction="column">
      <SignUpFormContainer>
        <GridContainer container alignItems="center" style={{ marginTop: '40px' }}>
          <Grid item>
            <StyledTextField
              variant="outlined"
              label="Email"
              type="email"
              placeholder="Enter your Email"
              style={{ width: '215px' }}
            />
          </Grid>
          <Grid item>
            <CheckButton variant="outlined">check</CheckButton>
          </Grid>
        </GridContainer>
        <Grid item>
          <StyledTextField
            variant="outlined"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </Grid>
        <Grid item>
          <StyledTextField
            variant="outlined"
            label="Password Confirm"
            type="password"
            placeholder="Confirm your password"
          />
        </Grid>
        <GridContainer container alignItems="center">
          <Grid item>
            <StyledTextField
              variant="outlined"
              label="Nickname"
              placeholder="Enter your Nickname"
              style={{ width: '215px' }}
            />
          </Grid>
          <Grid item>
            <CheckButton variant="outlined">Check</CheckButton>
          </Grid>
        </GridContainer>
        <FormControl style={{ marginBottom: '15px' }}>
          <RadioGroup row aria-label="gender" name="genderChoice">
            <FormControlLabel value="female" control={<Radio />} label={<Typography variant="body2">여성</Typography>} />
            <FormControlLabel value="male" control={<Radio />} label={<Typography variant="body2">남성</Typography>} />
          </RadioGroup>
        </FormControl>
        <Grid item>
          <SignUpButton variant="contained" color="primary">
            Sign Up
          </SignUpButton>
          <LoginText>
            <Link href="/login">Do you need to login?</Link>
          </LoginText>
        </Grid>
      </SignUpFormContainer>
    </SignUpContainer>
  )
}

export default signUp