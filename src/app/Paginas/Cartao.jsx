import { Card } from '@mui/material'
import React, { Component } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imagem from '../Img/bolo.jpg'
export default class Cartao extends Component {
  render() {
    return (
      <div>


<Card sx={{ maxWidth: 200 ,margin: 2 }} >
      <CardMedia
        sx={{ height: 250 ,
        
        }}
        image={imagem}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Bolo de Casamento
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bolo tipico para 
          cerimonia de casamento
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: 15.000,00
        </Typography>
      </CardContent>
      <CardActions>
       {/* <Modal/> */}
        {/* <Button size="small">Saber Mais</Button> */}
      </CardActions>
    </Card>

      </div>
    )
  }
}
