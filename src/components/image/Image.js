import { CardMedia } from '@mui/material'
import React from 'react'

function Image(props) {
  return (
    <CardMedia
          component="img"
          height={props.height}
          width={props.width}
          image={props.url}
          alt="image"
        />
  )
}

export default Image