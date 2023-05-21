import { CardMedia } from '@mui/material'
import React from 'react'

function Image(props) {
  return (
    <CardMedia
          component="img"
          height={props.height}
          image={props.url}
          alt="image"
          sx={{maxWidth:props.width,objectFit:'fill',border:1,borderRadius:props.borderRadius,border:props.border}}
        />
  )
}

export default Image