import { Box } from '@mui/material'
import React, { FC } from 'react'

export const Portrait: FC = () => {
  return (
    <>
      <Box component="img" px={{
          xs: 3,
          md: 0
        }} src="./unsplash_Zz5LQe-VSMY.png" alt="img" sx={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover",
        }}>
      </Box>
    </>
  )
}
