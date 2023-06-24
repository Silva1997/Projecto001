import { Card } from '@mui/material'
import React, { Component } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import imagem from '../Img/A8.jpg'
// import  Button  from '@mui/material/Button';
import '../Estilos/Estilos.css'
export default class Cartao extends Component {
  render() {
    return (
      <div>
{/* <Button size='small'> */}

<Card sx={{ maxWidth: 200 ,margin: 2 }} >
      <CardMedia
        sx={{ height: 250 ,
        
        }}
        image={imagem}
        title="Bolos"
        style={{objectFit:"contain" , width:"50vh" , cursor:"pointer"}}
      />
      <CardContent >
      {/* <span className='f_social_icon'>7%</span> */}
        <Typography gutterBottom variant="h5" component="div">
          Bolo de Aniversario
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
          Bolo tipico para 
          Aniversario
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço: 15.000,00
        </Typography>
      </CardContent>
      <CardActions>
       {/* <Modal/> */}
        {/* <Button variant='outline' sx={{display:"flex",justifyContent:"center" , textAlign:"center"}}>Saber Mais</Button> */}
      </CardActions>
    </Card>
    {/* </Button> */}
      </div>
    )
  }
}
