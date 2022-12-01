import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { Content } from '../content/content'
import { TopBar } from '../top-bar/top-bar'

export const Profile: FC = () => {
  return (
    <Grid container width={{
      xs: "100%",
      lg: "1130px"
    }} display="flex" bgcolor="#FFFFFF" minHeight="100vh" margin="0 auto" component="main">
      <TopBar />
      <Content />
    </Grid>
  )
}
