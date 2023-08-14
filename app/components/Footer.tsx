"use client"

import { Grid, IconButton, Typography, styled } from "@mui/material";
import React from "react"
import { blue300, fontSizeSub2, fontSizeSub3, fontSizeh5, fontWeighth4Bold, white } from "../styles/theme";

const FooterContainer = styled('div')({
  backgroundColor: `${blue300}`,
  height: '150px',
  padding: '30px 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const CompanyText = styled(Typography)({
  fontSize: `${fontSizeSub2}`,
  color: `${white}`,
  marginTop: '10px'
})

const CopyRightText = styled(Typography)({
  fontSize: `${fontSizeSub3}`,
  color: `${white}`,
});


const Footer: React.FC = () => {
  
  return (
    <FooterContainer>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <img src="/logo.png" />
        </Grid>
        <Grid item>
          <CompanyText>
            COMPANY NAME : 애플마켓 | Team : Killing-Healing
          </CompanyText>
        </Grid>
        <Grid item>
          <CopyRightText>
            Copyright ⓒ 2023 by Apple Market All Pictures cannot be copied without permission
          </CopyRightText>
        </Grid>
      </Grid>
    </FooterContainer>
  )
}

export default Footer